import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "POS Akuntansi Dashboard",
  description: "Manajemen impor dan laporan stok untuk POS Akuntansi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <main className="mx-auto w-full max-w-4xl p-6">{children}</main>
      </body>
    </html>
  );
}
