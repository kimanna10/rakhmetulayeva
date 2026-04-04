import { projectService } from "@/services/projects";

export async function GET(_, { params }) {
  const data = await projectService.getById(params.id);
  return Response.json(data);
}

export async function PUT(req, { params }) {
  const body = await req.json();
  const data = await projectService.update(params.id, body);

  return Response.json(data);
}

export async function DELETE(_, { params }) {
  await projectService.delete(params.id);
  return Response.json({ success: true });
}
