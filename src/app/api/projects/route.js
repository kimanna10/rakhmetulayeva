import {
  addProject,
  deleteProject,
  getProjects,
  updateProject,
} from "@/data/projects";

export async function GET() {
  return Response.json(getProjects());
}

export async function POST(req) {
  const data = await req.json();
  const created = addProject(data);
  return Response.json({ message: "Создано", project: created });
}

export async function PUT(req) {
  const data = await req.json();
  const updated = updateProject(data);
  return Response.json({ message: "Обновлено", project: updated });
}

export async function DELETE(req) {
  const { id } = await req.json();
  deleteProject(id);
  return Response.json({ message: "Удалено" });
}
