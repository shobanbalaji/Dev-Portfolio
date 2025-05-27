"use client";

import { usePathname } from "next/navigation";
import Footer from "../footer/page";

const FooterControl = ({ children }) => {
  const pathname = usePathname();
  const hideFooterPaths = ["/contact"];
  const shouldRenderFooter = !hideFooterPaths.includes(pathname);

  return (
    <>
      {children}
      {shouldRenderFooter && <Footer />}
    </>
  );
};

export default FooterControl;
