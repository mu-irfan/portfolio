"use client";
import React from "react";
import { CiBookmark } from "react-icons/ci";
import Link from "next/link";

interface IProps {
  blog: any;
}

const Blog = ({ blog }: IProps) => {
  return (
    <>
      <Link
        key={blog._id}
        href={`/blogs/${blog.slug.current}`}
        className="reset-link"
      >
        <div className="group bg-[#112240] text-white flex flex-col justify-between rounded-[4px] px-7 py-7 h-full transition-all duration-300 transform hover:-translate-y-2 min-w-[320px]">
          <div className="flex flex-col justify-between">
            <CiBookmark className="h-11 w-11 text-green mb-8" />
            <h2 className="text-[1.4rem] leading-[26px] font-semibold transition-colors group-hover:text-green">
              {blog.name}
            </h2>
            <p className="text-[17px] leading-[22px] py-2 text-slate-light">
              {blog.description}
            </p>
          </div>
          <ul className="flex justify-between space-x-4">
            <li className="text-xs text-slate-light py-2">21/04/2019</li>
            {blog.technologies.map((tech: string, ind: number) => (
              <li key={ind} className="text-xs text-green py-2">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </>
  );
};

export default Blog;
