import { contactService } from "@/services/contacts";

export async function GET() {
  const data = await contactService.getAll();
  return Response.json(data);
}

export async function POST(req) {
  const body = await req.json();
  const data = await contactService.create(body);

  return Response.json(data);
}
