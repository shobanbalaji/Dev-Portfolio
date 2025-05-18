import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./home/page";
import Footer from "./footer/page";
import "./stylesheet/main.css"
export default function Home() {
  return (
<>
    <HomePage/>
    {/* <Footer/> */}
</>

  );
}
