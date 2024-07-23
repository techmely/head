import type { Head } from "./types";
import { kebabize } from "@techmely/es-toolkit/kebabize";
const importRe = /@import/;

export function composeHead(heads: Head[]) {
  // Sort head - Prefer follow CapoJs
  const headHtml = heads
    .map((h) => {
      if (h.script?.async) {
        h.priority = 30;
      }
      if (h.style?.innerHTML && importRe.test(h.style.innerHTML as string)) {
        h.priority = 40;
      }
      if (
        h.script?.src &&
        !h.script?.defer &&
        !h.script?.async &&
        h.script?.type !== "module" &&
        ((h.script?.type as string) || undefined)?.endsWith("json")
      ) {
        h.priority = 50;
      }
      if ((h.link && h.link?.rel === "stylesheet") || h.style) {
        h.priority = 60;
      }
      if (
        h.link &&
        ["preload", "modulepreload"].includes(h.link.rel as string)
      ) {
        h.priority = 70;
      }
      if (h.script?.defer && h.script.src && !h.script.async) {
        h.priority = 80;
      }
      if (
        h.link &&
        ["prefetch", "dns-prefetch", "prerender"].includes(h.link.rel as string)
      ) {
        h.priority = 90;
      }
      return h;
    })
    .sort((a, b) => a.priority || 0 - (b.priority || 0))
    .flatMap(convertHeadToHtml)
    .filter(Boolean);

  return headHtml;
}

function convertHeadToHtml(head: Head) {
  const headKeys = Object.keys(head).filter(
    (k) => k !== "priority"
  ) as (keyof Head)[];
  const headHtml: string[] = [];
  if (headKeys.length === 0) return [];
  for (const key of headKeys) {
    if (key === "title") {
      headHtml.push(`<title>${head[key]}</title>`);
    } else {
      // @ts-expect-error Ignore type check
      const attributes = Object.entries(head[key])
        .map(([key, value]) => `${kebabize(key)}="${value}"`)
        .join(" ");
      headHtml.push(`<${key} ${attributes} />`);
    }
  }
  return headHtml;
}
