import { contactService } from "@/services/projects";

export async function GET(_, { params }) {
  const data = await contactService.getById(params.id);
  return Response.json(data);
}

export async function PUT(req, { params }) {
  const body = await req.json();
  const data = await contactService.update(params.id, body);

  return Response.json(data);
}

export async function DELETE(_, { params }) {
  await contactService.delete(params.id);
  return Response.json({ success: true });
}
