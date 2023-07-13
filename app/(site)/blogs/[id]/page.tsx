"use client";
import { BLOGS } from "@/config/constants";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import sanityClient from "@/sanity/config/client";
import { BlogPage } from "@/types";
import { PortableText } from "@portabletext/react";

export default async function page({ params }: { params: { id: string } }) {
  const blogsData = await sanityClient.fetch(`*[_type in ["blogs"]]`);
  const blogs: BlogPage[] = blogsData.filter(
    (item: any) => item._type === "blogs"
  );
  const data = blogs.find((blog) => blog.slug.current === params.id);
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
      <PortableText
        value={data.content}
        components={{
          block: {
            normal: ({ children }) => (
              <h2 className="text-slate-lightest  font-medium text-xl pt-10">
                {children}
              </h2>
            ),
          },
        }}
      />
      <h1 className="flex items-center text-left text-[26px] sm:text-3xl md:text-[30px] font-semibold mt-12 mb-10">
        {data.codeTechnology}
      </h1>
      <div className="bg-[#112340] mb-32">
        <PortableText
          value={data.code}
          components={{
            block: {
              normal: ({ children }) => (
                <pre className="code-highlight rounded-lg text-sm px-5 text-[#50B3CB] py-8">
                  {children
                    ?.toString()
                    .split(/\b/)
                    .map((codePart, index) => (
                      <span
                        key={index}
                        className={
                          codePart.match(/^\w+$/)
                            ? "text-violet-400"
                            : codePart.startsWith("") && codePart.endsWith("")
                            ? "text-blue-400"
                            : ""
                        }
                      >
                        {codePart}
                      </span>
                    ))}
                </pre>
              ),
            },
          }}
        />
      </div>
    </div>
  );
}
