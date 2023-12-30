import { writeFile } from "fs/promises";
import { type NextRequest, NextResponse } from "next/server";
import { join } from "path";
import sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file: File | null = formData.get('file') as unknown as File;
  const type: any = formData.get("type");

  if (!file) return NextResponse.json({ success: false });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  const pngBuffer = await sharp(buffer).toFormat(type as any).toBuffer();
  const outputPath = `${uuidv4()}.${type}`;

  const path = join("/", "tmp", outputPath);

  await writeFile(path, pngBuffer);
  console.log(`open ${path} to see the uploaded file`);

  return new NextResponse(
    JSON.stringify({ success: true, message: "body.message", path: outputPath }),
    { status: 200, headers: { 'content-type': 'image/png' } }
  );
}
