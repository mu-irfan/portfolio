const blogs = {
  name: "blogs",
  title: "Blogs",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "publishedDate",
      title: "Published Date",
      type: "date",
      options: {
        dateFormat: "DD/MM/YYYY",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              { title: "Before", value: "before" },
              { title: "Link", value: "link" },
            ],
          },
        },
      ],
    },
    {
      name: "codeTechnology",
      title: "Code Technology",
      type: "string",
    },
    {
      name: "code",
      title: "Code",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default blogs;
