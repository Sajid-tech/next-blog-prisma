import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

const BlogPage = () => {
  return (
    <div>
      <h1 className="bg-[#FF7F50] font-bold text-2xl text-white flex justify-center p-3  uppercase ">
        {" "}
        Blog
      </h1>
      <div className=" flex gap-12">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
