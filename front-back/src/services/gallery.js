import { supabase } from "@/lib/db";

const BUCKET = "images";
const FOLDER = "gallery";

export const galleryService = {
  async upload(file) {
    // Создаём уникальное имя
    const fileName = `${Date.now()}-${file.name}`;

    // Загружаем в Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(BUCKET)
      .upload(`${FOLDER}/${fileName}`, file);

    if (uploadError) throw new Error(uploadError.message);

    // Получаем public URL
    const { data: publicData } = supabase.storage
      .from(BUCKET)
      .getPublicUrl(`${FOLDER}/${fileName}`);

    // Вставляем URL в таблицу
    const { error: dbError } = await supabase
      .from("gallery")
      .insert([{ name: fileName, url: publicData.publicUrl }]);

    if (dbError) throw new Error(dbError.message);

    return publicData.publicUrl;
  },

  async getAll() {
    const { data, error } = await supabase
      .from("gallery")
      .select("*")
      .or("type.not.eq.main,type.is.null");
    if (error) throw new Error(error.message);
    return data;
  },
};
