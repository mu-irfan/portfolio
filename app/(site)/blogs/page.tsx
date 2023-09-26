import React from "react";
import Blogs from "@/components/Blogs/blog";
import { BLOGS_DATA } from "@/config/constants";



export default async function AllBlogs() {

  return (
    <div>
      <Blogs data={BLOGS_DATA} />
    </div>
  );
}
