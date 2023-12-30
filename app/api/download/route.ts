import { readFile } from 'fs/promises';
import { type NextRequest } from 'next/server';
import path from 'path';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const imageParam: string = searchParams.get("image") as string;

  const buffer = await readFile(path.join("/", "tmp", imageParam));

  const headers = new Headers();
  headers.append('Content-Disposition', 'attachment; filename="image.png"');
  headers.append('Content-Type', 'image/png');

  return new Response(buffer, {
    headers,
  });
}
