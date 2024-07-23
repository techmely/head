import { describe, it, expect } from "vitest";
import { composeHeadMetadata } from "./composeHeadMetadata";
import type { HeadMetadata } from "./types";

describe("Compose head metadata", () => {
  it("Basic heads", () => {
    const metadata: HeadMetadata = {
      title: "Title",
      description: "Description",
      canonical: "https://techmely.com",
      siteName: "Techmely",
      thumbnail: "https://techmely.com/thumbnail.webp",
      color: {
        supportedColorSchemes: "dark light",
        colorScheme: "dark",
        themeColor: "#00000",
      },
      hint: {
        viewport:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        acceptCh: "Accept, DPR, Viewport-Width, ECT, Width, Save-Data",
      },
      favicon: {
        appleTouchIcon: "/favicons/apple-touch-icon.png",
        icon: "/favicons/favicon.ico",
        icon16: "/favicons/favicon-16x16.png",
        icon32: "/favicons/favicon-32x32.png",
        manifest: "/favicons/site.webmanifest",
        maskIcon: "/favicons/favicon-32x32.svg",
        msapplicationConfig: "/favicons/browserconfig.xml",
      },
    };
    const head = composeHeadMetadata(metadata);
    expect(head).toStrictEqual([
      '<meta name="supported-color-schemes" content="dark light" />',
      '<meta name="color-scheme" content="dark" />',
      '<meta name="theme-color" content="#00000" />',
      '<meta name="google" content="notranslate" />',
      '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />',
      '<meta charset="UTF-8" />',
      '<meta http-equiv="Accept-CH" content="Accept, DPR, Viewport-Width, ECT, Width, Save-Data" />',
      '<link id="favicon" rel="shortcut icon" href="/favicons/favicon.ico" />',
      '<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />',
      '<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />',
      '<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />',
      '<link rel="mask-icon" color="#21C3A9" href="/favicons/favicon-32x32.svg" />',
      '<link id="manifest" rel="manifest" href="/favicons/site.webmanifest" />',
      '<meta name="msapplication-config" content="/favicons/browserconfig.xml" />',
    ]);
  });
});
