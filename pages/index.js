import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon, btnStyles } from "../Utiles/commonImports";
import { faCoffee, faEnvelope, faHouse } from "../Utiles/icons";
import NavBar from "../Utiles/NavBar";
import Button from "../Utiles/Button";

export default function Home() {
  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

  return (
    <>
      <div>
        <NavBar />
      </div>

      <div>
        <FontAwesomeIcon icon={faHouse} />
      </div>

      <Link href="/login"> Login Page</Link>
      <Link href="/register"> Register page</Link>
      <Link href="/CitySearch"> City search page</Link>
      <Link href="/state"> State search page</Link>
      <Link href="/about-us">About us</Link>
      <div style={{ marginTop: "20px", marginBottom: "50px" }}>
        <Link href={"/login-page"}>Saransh Login Page</Link>
      </div>

      <div style={{ marginTop: "20px", marginBottom: "50px" }}>
        <Link href={"/signup-page/"}>Saransh Register Page-1</Link>
      </div>

      <div style={{ marginTop: "20px", marginBottom: "50px" }}>
        <Link href={"/signup-page/signup"}>Saransh Register Page</Link>
      </div>

      <Button
        className={btnStyles.smallButton}
        onClick={() => alert("Button Clicked")}
      >
        Click Me
      </Button>
    </>
  );
}
