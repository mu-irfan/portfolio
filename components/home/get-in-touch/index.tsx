import { Button } from "@/components/ui";
import { GetInTouchSection } from "@/types";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import React from "react";

export const GetInTouch: React.FC<{ data: GetInTouchSection }> = ({ data }) => {
  return (
    <section className="mb-12 text-center" id="contact">
      <p className="pt-20 mb-5 font-mono text-green">{data?.tagline}</p>
      <h1 className="text-[40px] leading-[0.9] lg:text-[68px] font-semibold text-slate-lightest mb-2">
        {data.title}
      </h1>
      <PortableText
        value={data.content}
        components={{
          block: {
            normal: ({ children }) => (
              <h2 className="text-lg leading-[24px] text-slate max-w-lg mx-auto">
                {children}
              </h2>
            ),
          },
        }}
      />
      <Link
        href={data.callToAction.url}
        className="mt-12 inline-block font-mono border rounded-[4px] leading-[0.9] text-green border-green transition-all hover:shadow-outline-green hover:-translate-x-1 hover:-translate-y-1 text-sm px-7 py-5"
      >
        {data.callToAction.label}
      </Link>
    </section>
  );
};
