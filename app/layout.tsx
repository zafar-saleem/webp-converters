import type { Metadata } from "next";
import { Header } from "@/components/header";
import { GlobalStyles } from "@/theme/globals";
import Providers from "./styled-providers";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "JPG Image Converter | Convert JPG Images to PNG, Webp, TIFF, Gif etc online for free",
  description: "Convert JPG images to PNG, Webp, TIFF, Gif etc for free. JPG converter is fast, secure and almost 100% accurate. Convert scanned JPG to variety of formats while keeping the original quality.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">  
      <body>
        <Providers>
          <Header>
            <Link href="/">
              <Image src="/image-converter-logo.webp" width={300} height={28} alt="" />
            </Link>
          </Header>
          <GlobalStyles />
            {children}
          <Footer>
            <p>Made by <Link href="https://zafarsaleem.com">Zafar Saleem</Link></p>
          </Footer>
        </Providers>
      </body>
    </html>
  )
}
