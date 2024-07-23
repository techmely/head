import type { Entity, StringEnum } from "@techmely/types";

export type Head = {
  title?: string;
  link?: Partial<
    Record<
      StringEnum<keyof HTMLAnchorElement>,
      HTMLAnchorElement[keyof HTMLAnchorElement]
    >
  >;
  script?: Partial<
    Record<
      StringEnum<keyof HTMLScriptElement>,
      HTMLScriptElement[keyof HTMLScriptElement]
    >
  >;
  style?: Partial<
    Record<
      StringEnum<keyof HTMLStyleElement>,
      HTMLStyleElement[keyof HTMLStyleElement]
    >
  >;
  meta?: Partial<
    Record<
      StringEnum<keyof HTMLMetaElement>,
      HTMLMetaElement[keyof HTMLMetaElement]
    >
  >;
  priority?: number;
};

type HeadMetaAuthor = {
  name: string;
  url: string;
};

export type HeadMetaRobots = {
  index?: boolean;
  follow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
  noimageindex?: boolean;
  nocache?: boolean;
  notranslate?: boolean;
  indexifembedded?: boolean;
  nositelinkssearchbox?: boolean;
  unavailable_after?: string;
  "max-video-preview"?: number | string;
  "max-image-preview"?: "none" | "standard" | "large";
  "max-snippet"?: number;
  googleBot?: string | HeadMetaRobots;
};

export interface HeadMetadata {
  title?: string;
  description?: string;
  thumbnail?: string;
  siteName?: string;
  /**
   * The robots setting for the document.
   *
   * @see https://developer.mozilla.org/docs/Glossary/Robots.txt
   * @example
   *
   * { index: false, follow: false }
   * <meta name="robots" content="noindex, nofollow" />
   * ```
   */
  robots?: HeadMetaRobots;
  /**
   * @example
   * { canonical: "https://example.com" }
   * <link rel="canonical" href="https://example.com" />
   */
  canonical?: string;
  /**
   * <meta name="application-name" content="Techmely" />
   */
  applicationName?: string;
  /**
   * @example * <meta name="author" content="Techmely Team" />
   * <link rel="author" href="https://techmely.com/about-us" />
   */
  authors?: HeadMetaAuthor | HeadMetaAuthor[];
  /**
   * @example * <meta name="generator" content="VikeJs" />
   */
  generator?: string;
  /**
   * @example <meta name="keywords" content="education, documents, blog, courses" />
   * ```
   */
  keywords?: string | string[];
  /**
   * @example <meta name="creator" content="Techmely Team" />
   */
  creator?: string;
  /**
   * <meta name="publisher" content="Cloudflare" />
   * ```
   */
  publisher?: string;
  /**
   * The category meta name property.
   * @example
   * "Education"
   * <meta name="category" content="Education" />
   */
  category?: string;

  hint?: {
    viewport: string;
    acceptCh: string;
  };

  color?: {
    supportedColorSchemes: string;
    colorScheme: string;
    themeColor: string;
  };

  favicon?: {
    appleTouchIcon: string;
    icon: string;
    icon16: string;
    icon32: string;
    maskIcon: string;
    manifest: string;
    msapplicationConfig: string;
  };
}

export interface SchemaOrgProps {
  type?: string;
  scriptId?: string;
  [key: string]: any;
}

export type JsonLdProvider = {
  type?: "Organization" | "Person";
  name: string;
  url?: string;
};

export type ArticleAuthorSchemaOrg = {
  name: string;
  type?: string;
  url?: string;
};

export type HtmlAttrs = Record<string, Entity>;
export type BodyAttrs = Record<string, Entity>;
