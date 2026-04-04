import { categoryService } from "@/services/categories";

export async function GET() {
  const data = await categoryService.getAll();
  return Response.json(data);
}

export async function POST(req) {
  const body = await req.json();
  const data = await categoryService.create(body);

  return Response.json(data);
}
