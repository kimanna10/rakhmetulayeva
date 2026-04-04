import { projectService } from "@/services/projects";

export async function GET() {
  try {
    const data = await projectService.getAll();
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (e) {
    return new Response(
      JSON.stringify({ success: false, message: e.message }),
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const data = await projectService.create(body);
    return new Response(JSON.stringify({ success: true, data }), {
      status: 201,
    });
  } catch (e) {
    return new Response(
      JSON.stringify({ success: false, message: e.message }),
      { status: 500 },
    );
  }
}
