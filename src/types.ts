import type { StringEnum } from "@techmely/types";

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

// htmlAttrs?: Record<string, any>;
// bodyAttrs?: Record<string, any>;
