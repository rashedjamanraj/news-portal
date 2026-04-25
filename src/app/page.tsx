import Banner from "@/components/navbar/shared/Banner";
import NewsCard from "@/components/navbar/shared/NewsCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" py-12 px-1 md:px-20">
     <Banner />

     <div className=" py-12 ">
      <h2 className=" text-2xl font-bold mb-8">Latest News</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <NewsCard />
      </div>
     </div>
    </div>
  );
}
