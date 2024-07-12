import { describe, it, expect } from "vitest";
import type { Head } from "./types";
import { composeHead } from "./composeHead";
import { defineColorSchemeHeads } from "./composer/color-scheme";
import { defineCommonHeads } from "./composer/common";
import { defineFaviconHeads } from "./composer/favicon";
import { defineOgHeads } from "./composer/og";
import { defineTwitterHeads } from "./composer/twitter";

describe("Compose heads", () => {
  it("Basic heads", () => {
    const heads: Head[] = [];
    heads.push(
      {
        link: {
          id: "favicon",
          rel: "shortcut icon",
          href: "/icon",
        },
      },
      {
        link: {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "appleTouchIcon",
        },
      },
      {
        meta: {
          name: "msapplication-config",
          content: "msapplicationConfig",
        },
      },
    );
    const head = composeHead(heads);
    expect(head).toStrictEqual([
      '<link id="favicon" rel="shortcut icon" href="/icon" />',
      '<link rel="apple-touch-icon" sizes="180x180" href="appleTouchIcon" />',
      '<meta name="msapplication-config" content="msapplicationConfig" />',
    ]);
  });

  it("Compose every gen head", () => {
    const colorSchemeHeads = defineColorSchemeHeads({
      supportedColorSchemes: "dark light",
      colorScheme: "dark",
      themeColor: "#00000",
    });
    const commonHeads = defineCommonHeads({
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      acceptCh: "Accept, DPR, Viewport-Width, ECT, Width, Save-Data",
    });
    const faviconHeas = defineFaviconHeads({
      appleTouchIcon: "/favicons/apple-touch-icon.png",
      icon: "/favicons/favicon.ico",
      icon16: "/favicons/favicon-16x16.png",
      icon32: "/favicons/favicon-32x32.png",
      manifest: "/favicons/site.webmanifest",
      maskIcon: "/favicons/favicon-32x32.svg",
      msapplicationConfig: "/favicons/browserconfig.xml",
    });
    const ogHeads = defineOgHeads({
      title: "Title",
      description: "Description",
      canonical: "https://techmely.com",
      siteName: "Techmely",
      thumbnail: "https://techmely.com/thumbnail.webp",
    });

    const twitterHeads = defineTwitterHeads({
      title: "Title",
      description: "Description",
      siteContent: "@techmely",
      thumbnail: "https://techmely.com/thumbnail.webp",
    });

    const heads = Array.prototype.concat(
      colorSchemeHeads,
      commonHeads,
      faviconHeas,
      ogHeads,
      twitterHeads,
    );

    const headHtml = composeHead(heads);
    expect(headHtml).toStrictEqual([
      '<meta name="supported-color-schemes" content="dark light" />',
      '<meta name="color-scheme" content="dark" />',
      '<meta name="theme-color" content="#00000" />',
      '<meta name="google" content="notranslate" />',
      '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />',
      '<meta charset="UTF-8" />',
      '<meta httpEquiv="Accept-CH" content="Accept, DPR, Viewport-Width, ECT, Width, Save-Data" />',
      '<link id="favicon" rel="shortcut icon" href="/favicons/favicon.ico" />',
      '<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />',
      '<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />',
      '<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />',
      '<link rel="mask-icon" color="#21C3A9" href="/favicons/favicon-32x32.svg" />',
      '<link id="manifest" rel="manifest" href="/favicons/site.webmanifest" />',
      '<meta name="msapplication-config" content="/favicons/browserconfig.xml" />',
      '<meta property="og:type" content="website" />',
      '<meta property="og:url" content="https://techmely.com" />',
      '<meta property="og:site_name" content="Techmely" />',
      '<meta property="og:title" content="Title" />',
      '<meta property="og:description" content="Description" />',
      '<meta property="og:image" content="https://techmely.com/thumbnail.webp" />',
      '<meta name="twitter:card" content="summary_large_image" />',
      '<meta property="twitter:site" content="@techmely" />',
      '<meta name="twitter:title" content="Title" />',
      '<meta name="twitter:description" content="Description" />',
      '<meta name="twitter:image" content="https://techmely.com/thumbnail.webp" />',
    ]);
  });
});
