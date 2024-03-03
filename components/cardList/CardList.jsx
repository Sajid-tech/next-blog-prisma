/* eslint-disable @next/next/no-async-client-component */
"use client";
import React, { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import axios from "axios";

const CardList = ({ page, cat }) => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const POST_PER_PAGE = 3;
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/posts?page=${page}&cat=${cat || ""}`,
          {
            headers: {
              "Cache-Control": "no-store",
            },
          }
        );
        console.log("response", response.data);
        setPosts(response.data.posts);
        setCount(response.data.count);
        setHasPrev(POST_PER_PAGE * (page - 1) > 0);
        setHasNext(
          POST_PER_PAGE * (page - 1) + POST_PER_PAGE < response.data.count
        );
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [page, cat]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
