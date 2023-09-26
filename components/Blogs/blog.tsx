import React from "react";
import Link from "next/link";
import Blog from "./BlogCard/index";

interface IProps {
  data: any;
}

const Blogs = ({ data }: IProps) => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-[40px] leading-[0.9] sm:text-5xl md:text-6xl lg:text-[80px] font-semibold text-slate-lightest mb-2 lg:mb-2 pt-24">
          Blogs
        </h1>
        <Link
          href="/archive"
          className="mb-5 font-mono sm:mb-7 lg:mb-10 text-green"
        >
          a collection of memories
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-20 mb-16">
        {data.map((blog: any) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
