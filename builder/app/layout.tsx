import type { ReactNode } from "react";
import "./globals.css";
export const metadata = {
  title: "Human Webs — Builder",
  description: "Generador de webs para negocios",
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
