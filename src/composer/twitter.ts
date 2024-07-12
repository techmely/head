import type { Head } from "../types";

type Props = {
  siteContent: string;
  title: string;
  description: string;
  thumbnail: string;
};

export function defineTwitterHeads(props: Props) {
  const { siteContent, title, description, thumbnail } = props;
  const heads: Head[] = [];
  heads.push(
    { meta: { name: "twitter:card", content: "summary_large_image" } },
    { meta: { property: "twitter:site", content: siteContent } },
    { meta: { name: "twitter:title", content: title } },
    { meta: { name: "twitter:description", content: description } },
    { meta: { name: "twitter:image", content: thumbnail } },
  );
  return heads;
}
