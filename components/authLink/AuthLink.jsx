"use client";
import Link from "next/link";
import styles from "./authLink.module.css";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = "authenticated";

  return (
    <>
      {status === "authenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div onClick={() => setOpen(false)} className={styles.responsiveMenu}>
          <Link href="/posts/jknkd" onClick={() => setOpen(false)}>
            Homepage
          </Link>

          <Link href="/" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/" onClick={() => setOpen(false)}>
            Contact
          </Link>
          {status === "unauthenticated" ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <>
              <Link href="/write" onClick={() => setOpen(false)}>
                Write
              </Link>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
