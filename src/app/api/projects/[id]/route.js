import { getProjectById } from "@/data/projects";

export async function GET(request) {
  const url = new URL(request.url); // ✅ берём весь URL
  const id = url.pathname.split("/").pop(); // например: '1'
  console.log("🔍 url:", url);
  console.log("🔍 ID на входе:", id);

  const project = getProjectById(id); // id может быть строкой — внутри функции преобразуем
  if (!project) {
    return Response.json({ error: "Проект не найден" }, { status: 404 });
  }

  return Response.json(project);
}
