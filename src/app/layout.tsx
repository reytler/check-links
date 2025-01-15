import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Verificar links da sua landing page",
  description: "Testa todos os links de uma landing page afim de conferir se todos os links vão para um link de afiliado informado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
