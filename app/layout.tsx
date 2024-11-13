import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

//antialiased is for smoothing the font - from tailwind
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
