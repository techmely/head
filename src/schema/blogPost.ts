import type { ArticleAuthorSchemaOrg } from "../types";
import {
  setAuthorSchemaOrg,
  setPublisherSchemaOrg,
  toSchemaOrg,
} from "./utils";

export type BlogPostingSchemaOrg = {
  canonical: string;
  title: string;
  description: string;
  thumbnail: string;
  datePublished: string;
  dateModified: string;
  author: string | string[] | ArticleAuthorSchemaOrg | ArticleAuthorSchemaOrg[];
  publisher: {
    name?: string;
    logo?: string;
  };
  image?: string;
};

export function defineBlogAuthorSchema(props: BlogPostingSchemaOrg) {
  const data = {
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": props.canonical,
    },
    headline: props.title,
    description: props.description,
    author: setAuthorSchemaOrg(props.author),
    publisher: setPublisherSchemaOrg(
      props.publisher.name,
      props.publisher.logo,
    ),
    datePublished: props.datePublished,
    image: props.image,
  };

  if (props.thumbnail) {
    data.image = props.thumbnail;
  }

  return toSchemaOrg("BlogPosting", data);
}
