import { supabase } from "@/lib/db";

// services/categories.js
export const categoryService = {
  async getAll() {
    const { data, error } = await supabase.from("category").select("*");

    if (error) {
      console.error(error);
      return [];
    }

    return data;
  },
};
