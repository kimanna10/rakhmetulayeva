// /app/api/gallery/route.js
import { galleryService } from "@/services/gallery";

export async function GET() {
  try {
    const images = await galleryService.getAll();

    return Response.json({
      success: true,
      data: images,
    });
  } catch (e) {
    return Response.json(
      { success: false, message: e.message },
      { status: 500 },
    );
  }
}
