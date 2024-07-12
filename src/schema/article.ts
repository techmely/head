import type { SchemaOrgProps } from "../types";
import {
  setAuthorSchemaOrg,
  setPublisherSchemaOrg,
  toSchemaOrg,
} from "./utils";

interface NewsArticleSchemaOrg extends SchemaOrgProps {
  url: string;
  title: string;
  images: ReadonlyArray<string>;
  section: string;
  keywords?: string;
  dateCreated?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string | string[];
  description: string;
  body: string;
  publisherName: string;
  publisherLogo: string;
}

export function defineNewsArticleSchema({
  scriptId,
  type = "NewsArticle",
  keyOverride,
  url,
  title,
  images,
  section,
  dateCreated,
  datePublished,
  dateModified,
  authorName,
  publisherName,
  publisherLogo,
  body,
  ...rest
}: NewsArticleSchemaOrg) {
  const data = {
    ...rest,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: title,
    image: images,
    articleSection: section,
    dateCreated: dateCreated || datePublished,
    datePublished,
    dateModified: dateModified || datePublished,
    author: setAuthorSchemaOrg(authorName),
    publisher: setPublisherSchemaOrg(publisherName, publisherLogo),
    articleBody: body,
  };
  return toSchemaOrg("NewsArticle", { ...data });
}
