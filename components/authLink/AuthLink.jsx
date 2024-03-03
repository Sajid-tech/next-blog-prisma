"use client";
import Link from "next/link";
import styles from "./authLink.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <>
      {status == "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          {session?.user.email === "s.khan9430319425@gmail.com" && (
            <Link href="/write" className="styles.link">
              Write
            </Link>
          )}
          <span className={styles.link} onClick={() => signOut()}>
            Logout
          </span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div onClick={() => setOpen(false)} className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>

          <Link href="/">About</Link>
          <Link href="/contact">Contact</Link>
          {status == "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              {session?.user.email === "s.khan9430319425@gmail.com" && (
                <Link href="/write">Write</Link>
              )}
              <span onClick={() => signOut()}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
