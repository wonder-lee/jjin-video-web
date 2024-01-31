import type { Metadata } from "next";
import Header from "@/components/common/header";
import LayoutProvider from "@/components/layoutProvider/layoutProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "찐영상 유튜브 영상 분석",
  description: "가치있는 유튜브 영상을 찾아드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-200">
        <main className="max-sm:w-[100vw] w-[500px] mx-auto bg-gray-50">
          <Header />
          <LayoutProvider>{children}</LayoutProvider>
        </main>
      </body>
    </html>
  );
}
