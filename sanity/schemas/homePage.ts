const homePage = {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "seo",
      type: "object",
      title: "Seo",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "description",
          type: "text",
          title: "Description",
        },
      ],
    },
    {
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
        {
          name: "tagline",
          title: "Tagline",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "callToAction",
          title: "Call To Action",
          type: "object",
          fields: [
            {
              name: "label",
              title: "Button Label",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "aboutSection",
      title: "About Section",
      type: "object",
      fields: [
        {
          name: "content",
          title: "Content",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "technologies",
          title: "Technologies",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "getInTouchSection",
      title: "Get In Touch Section",
      type: "object",
      fields: [
        {
          name: "tagline",
          title: "Tagline",
          type: "string",
        },
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "content",
          title: "Content",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "callToAction",
          title: "Call To Action",
          type: "object",
          fields: [
            {
              name: "label",
              title: "Button Label",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

export default homePage;
