"use client";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BLOGS_DATA } from "@/config/constants";

export default async function page({ params }: { params: { id: string } }) {
  const data = BLOGS_DATA.find((blog) => blog.slug.current === params.id);
  if (!data) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="max-w-[700px] mx-auto mt-24">
      <Link
        href="/blogs"
        className="flex items-center text-green gap-2 max-w-[150px]"
      >
        <BiArrowBack className="h-5 w-5" />
        <h2 className="text-green pt-1 font-medium text-base tracking-widest">
          ALL MEMORIES
        </h2>
      </Link>
      <h1 className="text-[30px] leading-[0.9] sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-lightest mb-2 lg:mb-2 pt-14">
        {data.name}
      </h1>
      <h2 className="text-green pt-1 font-medium text-[18px] tracking-widest pb-12">
        {new Date(data.publishedDate).toLocaleDateString()} —{" "}
        {data.technologies.map((tech) => tech)}
      </h2>
      <Link
        href={data.url}
        target="_blank"
        className="text-green text-xl font-medium text-[18px]"
      >
        Codepen Demo
      </Link>
      <p className="text-slate-lightest  font-medium text-xl pt-10">{data.description}</p>
      <h1 className="flex items-center text-left text-[26px] sm:text-3xl md:text-[30px] font-semibold mt-12 mb-10">
        {data.name}
      </h1>
    </div>
  );
}
