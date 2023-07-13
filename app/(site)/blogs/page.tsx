import React from "react";
import Blogs from "@/components/Blogs/blog";
import sanityClient from "@/sanity/config/client";
import { BlogPage } from "@/types";

export default async function AllBlogs() {
  const data = await sanityClient.fetch(`*[_type in ["blogs"]]`);
  const blogs: BlogPage[] = data.filter((item: any) => item._type === "blogs");

  return (
    <div>
      <Blogs data={blogs} />
    </div>
  );
}
