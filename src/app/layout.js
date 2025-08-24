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
  "Shobanbalaji, Shoban Balaji, Web Developer in Tamil Nadu, Full Stack Developer in Nagapattinam, MERN Stack Developer, Next.js Developer, Firebase Developer, React Developer, Backend Developer, Frontend Developer, Gen AI Developer, AI Enthusiast, Python Developer, Portfolio Web Developer India, Freelance Web Developer Tamil Nadu, Best Web Developer in Nagapattinam, Software Engineer Delta Region, Cloud Developer, JavaScript Developer, Node.js Developer, Express.js Developer, MongoDB Developer, Tailwind CSS Developer, UI/UX Developer, API Developer, REST API Developer, GraphQL Developer, Freelance Full Stack Developer India, Remote Web Developer, Modern Web Application Developer, SaaS Developer, AI-powered Web Developer, Open Source Contributor, Tech Enthusiast, Indian Web Developer, Personal Portfolio Developer, Startup Web Developer, Web Development Services Tamil Nadu, Professional Web Developer Nagapattinam, Affordable Web Developer India, Best developer website, Developer portfolio, ",
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
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <Toaster position="top-center" />
        <FooterControl>{children}</FooterControl>
      </body>
    </html>
  );
}
