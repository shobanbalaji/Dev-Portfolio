import "./globals.css";
import Footer from "./footer/page";

export const metadata = {
  title: "Shobanbalaji: Web developer | Gen AI",
  description: "Passionate Web developer | Gen AI | Full-stack developer",
  openGraph: {
    title: "Shobanbalaji: Web developer | Gen AI",
    description: "Portfolio of a full-stack developer passionate about Gen AI.",
    keywords:
      "Shobanbalaji, Web Developer, Full Stack Developer, Gen AI, Next.js, Firebase, Backend Developer, Frontend Developer, Tamilnadu region, Delta region, Best developer, AI Enthusiastic",
    url: "https://shoban-dev.web.app",
    siteName: "Shobanbalaji Developer",
    locale: "en_IN", // <-- Set to English (India)
    type: "website",
  },
  locale: "en-IN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
