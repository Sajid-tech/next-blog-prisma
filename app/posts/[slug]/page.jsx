"use client";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "@/components/menu/Menu";

const SinglePage = ({ params }) => {
  const { slug } = params;
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/posts/${slug}`, {
          headers: {
            "Cache-Control": "no-store",
          },
        });
        setPostData(response.data);
      } catch (error) {
        setError("Failed to fetch data");
      }
    };

    fetchData();

    // Cleanup function if needed
    return () => {
      // Any cleanup code here
    };
  }, [slug]); // Run effect only when slug changes

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!postData) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{postData?.title}</h1>
          <div className={styles.user}>
            {postData?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={postData?.user.image}
                  alt=""
                  fill
                  className={styles.avatar}
                />
              </div>
            )}

            <div className={styles.userTextContainer}>
              <span className={styles.username}>{postData?.user.name}</span>
              <span className={styles.date}>
                {postData?.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
        {postData?.img && (
          <div className={styles.imageContainer}>
            <Image src={postData?.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className="styles.description"
            dangerouslySetInnerHTML={{ __html: postData?.desc }}
          ></div>
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
