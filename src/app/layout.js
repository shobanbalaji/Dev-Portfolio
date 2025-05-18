import "./globals.css";
import Footer from "./footer/page";

export const metadata = {
  title: "Shobanbalaji: Web developer | Gen AI",
  description: "Passionate Web developer | Gen AI | IoT Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
