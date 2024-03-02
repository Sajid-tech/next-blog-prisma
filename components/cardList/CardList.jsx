import React from "react";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import axios from "axios";

const getData = async (page, cat) => {
  let url = process.env.NEXTAUTH_URL;
  try {
    const response = await axios.get(
      `${url}/api/posts?page=${page}&cat=${cat || ""}`,
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.log("errror", error);
  }
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 3;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

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
