"use client";
import React, { useEffect, useState } from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const CategoryList = () => {
  const [img, setImg] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/api/categories`);
        const data = response.data;
        console.log("data", data);
        setImg(data);
      } catch (error) {
        console.log(error, "error in fetching category list");
      }
    };
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {img?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && <Image src={item.img} alt="" height={50} width={50} />}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
