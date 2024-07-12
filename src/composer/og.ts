import type { Head } from "../types";

type OgProps = {
  canonical: string;
  title: string;
  description: string;
  thumbnail: string;
  siteName: string;
};

export function defineOgHeads(props: OgProps) {
  if (!props) throw new Error("Must have full props");
  const { canonical, title, description, thumbnail, siteName } = props;
  const heads: Head[] = [];
  heads.push(
    { meta: { property: "og:type", content: "website" } },
    { meta: { property: "og:url", content: canonical } },
    { meta: { property: "og:site_name", content: siteName } },
    { meta: { property: "og:title", content: title } },
    { meta: { property: "og:description", content: description } },
    { meta: { property: "og:image", content: thumbnail } },
  );

  return heads;
}
