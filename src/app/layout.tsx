import type { Metadata } from "next";
import "./globals.css";
import RouteScrollReset from "@/components/RouteScrollReset";

export const metadata: Metadata = {
  title: "Emperia World",
  description:
    "Emperia World — premium residential and commercial real estate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'if ("scrollRestoration" in history) history.scrollRestoration = "manual"; window.scrollTo(0, 0);',
          }}
        />
        <RouteScrollReset />
        {children}
      </body>
    </html>
  );
}