"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useState } from "react";

// instead of useeffect we can use react query or SWR

const fetcher = async (url) => {
  const res = await axios.get(url);
  const data = await res.data;
  console.log(data, "comments");
  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            placeholder="write a comment..."
            className={styles.input}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login" className=" text-orange-300">
          Login to write a comment
        </Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <div className={styles.comment} key={item?._id}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}

                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item?.user.name}</span>
                    <span className={styles.date}>
                      {item?.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </div>
                <p className={styles.desc}>{item?.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
