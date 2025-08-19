import "./globals.css";
import FooterControl from "./component/FooterControl";
import "bootstrap/dist/css/bootstrap.min.css";
import "../app/stylesheet/main.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Shobanbalaji: Web developer | Gen AI",
  description: "Passionate Web developer | Gen AI | Full-stack developer",
  openGraph: {
    title: "Shobanbalaji: Web developer | Gen AI",
    description: "Portfolio of a full-stack developer passionate about Gen AI.",
    keywords:
      "Shobanbalaji, Web Developer, Full Stack Developer, Gen AI, Next.js, Firebase, Backend Developer, Frontend Developer, Tamilnadu region, Delta region, Best developer, AI Enthusiastic, shoban the web developer, web developer, mern stack developer, best backend developer, best frontend developer, developer, dev, python developer",
    url: "https://shoban-dev.web.app",
    siteName: "Shobanbalaji Developer",
    locale: "en_IN", // English (India)
    type: "website",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D5603AQGoQiFEo5FZlA/profile-displayphoto-shrink_400_400/B56ZdaiMS1HUAk-/0/1749570603868?e=1758758400&v=beta&t=ZlbZw0FP8k0cy5yQJMHLBqpyPi7w_OkZZPyF0YweUjg", // optional: OG image
        width: 1200,
        height: 630,
        alt: "Shobanbalaji - Web Developer | Gen AI",
      },
    ],
  },
  locale: "en-IN",

  // ✅ Extra SEO signals
  other: {
    "github:profile": "https://github.com/shobanbalaji",
    "linkedin:profile": "https://www.linkedin.com/in/shobanbalaji-v/",
  },


};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="30" className="rounded-pill"/>
      </head>
      <body>
        <Toaster position="top-center" />
        <FooterControl>{children}</FooterControl>
      </body>
    </html>
  );
}
