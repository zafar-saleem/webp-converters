import type { Metadata } from "next";
import { Header } from "@/components/header";
import { GlobalStyles } from "@/theme/globals";
import Providers from "./styled-providers";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Webp Image Converter | Convert Webp Images to JPG, PNG, TIFF, Gif, HEIC etc online for free",
  description: "Convert Webp images to JPG, PNG, TIFF, Gif, HEIC etc for free. Webp converter is fast, secure and almost 100% accurate. Convert scanned Webp to variety of formats while keeping the original quality. Learn more",
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
              <Image src="/image-converter-logo.webp" width={300} height={28} alt="Webp Image Converter" />
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
