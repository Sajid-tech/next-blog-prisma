/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <b>Hey, Sajid dev here!</b> Discover my stories and creative ideas.
        </h1>
      </div>
      <article className="flex bg-green-100 transition hover:shadow-xl mt-5">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr] bg-sky-200">
          <time
            datetime="2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>Featured Blog</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>Oct 10</span>
          </time>
        </div>

        {/* <div className="hidden sm:block sm:basis-72">
          <img
            alt=""
            src="/p1.jpeg"
            className=" aspect-auto h-full w-full object-cover"
          />
        </div> */}

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="/">
              <h3 className="font-bold text-2xl lg:text-5xl uppercase text-gray-900">
                Finding the right guitar for your style - 5 tips
              </h3>
            </a>

            <p className="mt-3 line-clamp-4 lg:line-clamp-none lg:text-xl text-sm/relaxed  text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>

          <div className="">
            <a
              href="#"
              className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            >
              Read Blog
            </a>
          </div>
        </div>

        <div className="hidden sm:block sm:basis-72">
          <img
            alt=""
            src="/p1.jpeg"
            className=" aspect-auto h-full w-full object-cover"
          />
        </div>
      </article>
    </>
  );
};

export default Featured;
