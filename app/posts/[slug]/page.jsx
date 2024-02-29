import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={"/p1.jpeg"} alt="" fill className={styles.avatar} />
            </div>

            <div className={styles.userTextContainer}>
              <span className={styles.username}>Sajid dev</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className="styles.description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              magnam rem totam, iure veritatis obcaecati quo. Minus esse illum
              nostrum amet voluptates possimus? Natus laboriosam labore
              voluptates magnam, rerum dolores?
            </p>
            <h2 className="text-2xl font-bold text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste in
              nisi, quia veniam eius non obcaecati voluptate laborum similique
              hic perspiciatis nostrum itaque facilis quam mollitia sequi
              tempora? Quod, a. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quo, molestias? Nulla, voluptate suscipit illum
              quos commodi asperiores optio tempora aut voluptas, magnam,
              molestias ullam blanditiis quasi rem enim maxime est! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Delectus animi
              laudantium aliquam vel. Beatae aliquam impedit itaque suscipit
              minima. Voluptates, facilis! Minus omnis accusantium, illo
              doloremque architecto adipisci itaque numquam. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Iure pariatur vitae eos
              magni repellendus sit, beatae quod fuga natus sed tenetur cumque
              provident assumenda, officia doloribus praesentium odio
              consequatur? Natus.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste in
              nisi, quia veniam eius non obcaecati voluptate laborum similique
              hic perspiciatis nostrum itaque facilis quam mollitia sequi
              tempora? Quod, a.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste in
              nisi, quia veniam eius non obcaecati voluptate laborum similique
              hic perspiciatis nostrum itaque facilis quam mollitia sequi
              tempora? Quod, a.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste in
              nisi, quia veniam eius non obcaecati voluptate laborum similique
              hic perspiciatis nostrum itaque facilis quam mollitia sequi
              tempora? Quod, a.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
