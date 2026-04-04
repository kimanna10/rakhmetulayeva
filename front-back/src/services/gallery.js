import { supabase } from "@/lib/db";

const BUCKET = "images";
const FOLDER = "gallery";

export const galleryService = {
  async getAll() {
    const { data, error } = await supabase.storage.from(BUCKET).list(FOLDER, {
      limit: 100,
      sortBy: { column: "name", order: "asc" },
    });

    if (error) {
      throw new Error(error.message);
    }

    return data.map((file) => {
      const { data: urlData } = supabase.storage
        .from(BUCKET)
        .getPublicUrl(`${FOLDER}/${file.name}`);

      return {
        name: file.name,
        url: urlData.publicUrl,
      };
    });
  },
};
