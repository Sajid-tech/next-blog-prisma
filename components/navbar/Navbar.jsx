import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLink from "../authLink/AuthLink";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href={"https://github.com/Sajid-tech"}>
          <FaGithub className="h-6 w-6" />
        </Link>
        <Link href={"https://www.linkedin.com/in/sajid-h-8300a11ab"}>
          <FaLinkedin className="h-6 w-6" />
        </Link>
        <Image src="/facebook.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <button href="/" className={styles.logo}>
        Sajid-Dev
      </button>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <AuthLink />
      </div>
    </div>
  );
};

export default Navbar;
