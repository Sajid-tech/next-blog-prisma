/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <>
      <article className="flex mt-4 bg-green-100 transition hover:shadow-xl">
        <div className=" rotate-180 p-2 [writing-mode:_vertical-lr]  bg-sky-100 ">
          <time
            dateTime="2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>{item.createdAt.substring(0, 10)} </span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span className=" text-red-700">{item.catSlug}</span>
          </time>
        </div>

        <div className=" hidden sm:block sm:basis-56">
          <img
            alt=""
            src={item?.img}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1  flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <Link href={`/posts/${item.slug}`}>
              <h3 className="font-bold uppercase text-xl text-gray-900">
                {item.title}
              </h3>
            </Link>

            <p
              className="mt-2 line-clamp-5 lg:line-clamp-6 text-sm/relaxed text-gray-700"
              dangerouslySetInnerHTML={{ __html: item?.desc }}
            ></p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <Link
              href={`/posts/${item.slug}`}
              className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
