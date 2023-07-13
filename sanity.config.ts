import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "d14mzi4o",
  dataset: "production",
  title: "Sanity Portfolio",
  apiVersion: "2023-03-04",
  basePath: "/admin",
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Home Page")
              .child(
                S.document().schemaType("homePage").documentId("homePage")
              ),
            ...S.documentTypeListItems().filter(
              (item) => !["homePage"].includes(item.getId() || "")
            ),
          ]),
    }),
  ],
  schema: { types: schemas },
});

export default config;
