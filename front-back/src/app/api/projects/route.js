import { projectService } from "@/services/projects";

export async function GET() {
  const data = await projectService.getAll();
  return Response.json(data);
}

export async function POST(req) {
  const body = await req.json();
  const data = await projectService.create(body);

  return Response.json(data);
}
