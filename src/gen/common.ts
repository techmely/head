import type { Head } from "../types";

type Props = {
  viewport: string;
  charset?: string;
  acceptCh: string;
};

export function genCommonHeads(props: Props) {
  if (!props) throw new Error("Must have full props");
  const { viewport, charset = "UTF-8", acceptCh } = props;
  const heads: Head[] = [];
  heads.push(
    {
      meta: { name: "google", content: "notranslate" },
    },
    { meta: { name: "viewport", content: viewport } },
    { meta: { charset } },
    { meta: { httpEquiv: "Accept-CH", content: acceptCh } },
  );

  return heads;
}
