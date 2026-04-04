import { supabase } from "@/lib/db";

export const projectService = {
  // async getAll() {
  //   const { data } = await supabase.from("projects").select("*");
  //   return data;
  // },

  async getAll() {
    const { data, error } = await supabase.from("projects").select(`
      id, title, subtitle, desc, url, type, created_at, preview,
      projects_categories (
        category (name)
      )
    `);

    if (error) {
      console.error(error);
      return [];
    }

    return data.map((p) => ({
      ...p,
      projects_categories: p.projects_categories.map((pc) => pc.category),
    }));
  },

  async getById(id) {
    const { data } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .single();

    return data;
  },

  async create(project) {
    const { data } = await supabase.from("projects").insert([project]);

    return data;
  },

  async update(id, updates) {
    const { data } = await supabase
      .from("projects")
      .update(updates)
      .eq("id", id);

    return data;
  },

  async delete(id) {
    await supabase.from("projects").delete().eq("id", id);
  },
};
