import type { Head } from "../types";

type Props = {
  supportedColorSchemes: string;
  colorScheme: string;
  themeColor: string;
};

export function defineColorSchemeHeads(props: Props) {
  if (!props) throw new Error("Must have full props");
  const { supportedColorSchemes, colorScheme, themeColor } = props;
  const heads: Head[] = [];
  heads.push(
    {
      meta: { name: "supported-color-schemes", content: supportedColorSchemes },
    },
    { meta: { name: "color-scheme", content: colorScheme } },
    { meta: { name: "theme-color", content: themeColor } },
  );

  return heads;
}
