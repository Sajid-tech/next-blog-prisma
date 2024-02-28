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
        <FaGithub className="h-6 w-6" />
        <FaLinkedin className="h-6 w-6" />
        <Image src="/facebook.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>Sajid-Blog</div>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/" className={styles.link}>
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
