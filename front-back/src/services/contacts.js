import { supabase } from "@/lib/db";

export const contactService = {
  async getAll() {
    const { data } = await supabase.from("contacts").select("*");
    return data;
  },

  async getById(id) {
    const { data } = await supabase
      .from("contacts")
      .select("*")
      .eq("id", id)
      .single();

    return data;
  },

  async create(contact) {
    const { data } = await supabase.from("contacts").insert([contact]);

    return data;
  },

  async update(id, updates) {
    const { data } = await supabase
      .from("contacts")
      .update(updates)
      .eq("id", id);

    return data;
  },

  async delete(id) {
    await supabase.from("contacts").delete().eq("id", id);
  },
};
