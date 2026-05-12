import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memory Lane",
  description: "A simple developer journal built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-wrapper">
          {children}

          <footer className="footer">
            <p>Memory Lane • Built by Stephanie Olivares</p>

            <div className="footer-links">
              <a
                href="https://github.com/OlivaresStephanie-FS"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://soli.nyc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}