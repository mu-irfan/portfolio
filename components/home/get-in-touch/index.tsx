import Link from "next/link";
import React from "react";

export const GetInTouch = () => {
  return (
    <section className="mb-12 text-center" id="contact">
      <p className="pt-20 mb-5 font-mono text-green">04. What’s Next?</p>
      <h1 className="text-[40px] leading-[0.9] lg:text-[68px] font-semibold text-slate-lightest mb-2">
        Get In Touch
      </h1>
      <h2 className="text-lg leading-[24px] text-slate max-w-lg mx-auto">
        I&apos;m searching for a frontend position, emphasizing React and
        Next.js. Open to new tech, currently exploring NodeJS. Proficient in
        Tailwind, JavaScript, ReactJS and NextJS. I&apos;m open to challenging
        roles, as I enjoy working in a fast-paced environment where I learn new
        things every day. This is what drives my dedication to this field.
      </h2>
      <Link
        href="mailto:irfan.dev34@gmail.com"
        className="mt-12 inline-block font-mono border rounded-[4px] leading-[0.9] text-green border-green transition-all hover:shadow-outline-green hover:-translate-x-1 hover:-translate-y-1 text-sm px-7 py-5"
      >
        Say Hello
      </Link>
    </section>
  );
};
