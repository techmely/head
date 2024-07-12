import type { Head } from "../types";

type Props = {
  icon: string;
  appleTouchIcon: string;
  icon16: string;
  icon32: string;
  maskIcon: string;
  msapplicationConfig: string;
  manifest: string;
};

export function defineFaviconHeads(props: Props) {
  const {
    icon,
    appleTouchIcon,
    icon16,
    icon32,
    maskIcon,
    msapplicationConfig,
    manifest,
  } = props;

  const heads: Head[] = [];
  heads.push(
    {
      link: {
        id: "favicon",
        rel: "shortcut icon",
        href: icon,
      },
    },
    {
      link: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: appleTouchIcon,
      },
    },
    {
      link: {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: icon32,
      },
    },
    {
      link: {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: icon16,
      },
    },
    {
      link: {
        rel: "mask-icon",
        color: "#21C3A9",
        href: maskIcon,
      },
    },
    {
      link: {
        id: "manifest",
        rel: "manifest",
        href: manifest,
      },
    },
    {
      meta: {
        name: "msapplication-config",
        content: msapplicationConfig,
      },
    },
  );
  return heads;
}
