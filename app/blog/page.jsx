import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div>
      <h1 className="bg-[#FF7F50] font-bold text-2xl text-white flex justify-center p-3  uppercase ">
        {" "}
        {cat} Blog
      </h1>
      <div className=" flex gap-12">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
