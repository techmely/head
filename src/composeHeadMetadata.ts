import { composeHead } from "./composeHead";
import { defineColorSchemeHeads } from "./composer/color-scheme";
import { defineCommonHeads } from "./composer/common";
import { defineFaviconHeads } from "./composer/favicon";
import { defineOgHeads } from "./composer/og";
import { defineTwitterHeads } from "./composer/twitter";
import type { Head, HeadMetadata } from "./types";

export function composeHeadMetadata(metadata: HeadMetadata, initialHeads: Head[] = []): string[] {
  let heads: Head[] = initialHeads;
  const {
    color,
    hint,
    favicon,
    title = "",
    description = "",
    canonical = "",
    thumbnail = "",
    siteName = "",
  } = metadata;

  if (color) {
    const colorSchemeHeads = defineColorSchemeHeads(color);
    heads = heads.concat(colorSchemeHeads);
  }
  if (hint) {
    const commonHeads = defineCommonHeads(hint);
    heads = heads.concat(commonHeads);
  }
  if (favicon) {
    const faviconHeads = defineFaviconHeads(favicon);
    heads = heads.concat(faviconHeads);
  }

  const ogHeads = defineOgHeads({
    title,
    description,
    canonical,
    siteName,
    thumbnail,
  });

  const twitterHeads = defineTwitterHeads({
    title,
    description,
    siteContent: `@${siteName.toLowerCase()}`,
    thumbnail,
  });

  heads.concat(ogHeads, twitterHeads);
  console.log("composeHeadMetadata  👻  heads:", heads);
  return composeHead(heads);
}
