import imageUrlBuilder from "@sanity/image-url";
import client from "@/sanity/config/client";
import { Image } from "@/types";

const builder = imageUrlBuilder(client);

export const urlFor = (source: Image) => {
  return builder.image(source);
};
