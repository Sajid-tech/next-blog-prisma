/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import axios from "axios";

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className={styles.loadingSkeleton}>
    <div className={styles.title}></div>
    <div className="flex bg-green-100 transition hover:shadow-xl mt-5">
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr] bg-sky-200">
        <div className="w-full bg-gray-900/10 animate-pulse h-8"></div>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <div className="h-8 bg-gray-900/10 animate-pulse mb-4"></div>
          <div className="h-8 bg-gray-900/10 animate-pulse w-3/4"></div>
          <div className="h-8 bg-gray-900/10 animate-pulse w-2/4"></div>
          <div className="h-8 bg-gray-900/10 animate-pulse w-4/4"></div>
          <div className="h-8 bg-gray-900/10 animate-pulse w-3/4"></div>
        </div>

        <div className="h-12 bg-gray-900/10 animate-pulse w-1/3 mx-auto mt-4"></div>
      </div>

      <div className="hidden sm:block sm:basis-72">
        <div className="w-full bg-gray-900/10 animate-pulse aspect-auto h-full"></div>
      </div>
    </div>
  </div>
);

const Featured = () => {
  const [featuredPost, setFeaturedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts?page=${2}`);
        const data = res.data;
        console.log("featured data", data);

        setFeaturedPost(data.posts[0]);
        setLoading(false);
      } catch (error) {
        console.log(error, "error in featured post");
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <b>Hey, Sajid dev here!</b> Discover my stories and creative ideas.
        </h1>
      </div>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <article className="flex bg-green-100 transition hover:shadow-xl mt-5">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr] bg-sky-200">
            <time
              dateTime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>Featured Blog</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>Oct 10</span>
            </time>
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="/">
                <h3 className="font-bold text-2xl lg:text-4xl uppercase text-gray-900">
                  {featuredPost?.title}
                </h3>
              </a>

              <p
                className="mt-3 line-clamp-4 lg:line-clamp-6  lg:text-xl text-sm/relaxed  text-gray-700"
                dangerouslySetInnerHTML={{ __html: featuredPost?.desc }}
              ></p>
            </div>

            <div className="">
              <a
                href={`/posts/${featuredPost?.slug}`}
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                Read Blog
              </a>
            </div>
          </div>

          <div className="hidden sm:block sm:basis-72">
            <img
              alt=""
              src={featuredPost?.img}
              className=" aspect-auto h-full w-full object-cover"
            />
          </div>
        </article>
      )}
    </>
  );
};

export default Featured;
