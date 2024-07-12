import type { ArticleAuthorSchemaOrg, JsonLdProvider } from "../types";

export function toSchemaOrg(type: string, jsonLd: any) {
  const { id = undefined } = jsonLd;
  const updated = {
    ...(id ? { "@id": jsonLd.id } : {}),
    ...jsonLd,
  };

  // biome-ignore lint/performance/noDelete: <explanation>
  delete updated.id;

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": type,
    ...updated,
  });
}

function genAuthorInfoSchemaOrg(author: string | ArticleAuthorSchemaOrg) {
  if (typeof author === "string") {
    return { "@type": "Person", name: author };
  }

  return {
    "@type": author?.type ?? "Person",
    name: author.name,
    url: author?.url,
  };
}

export function setAuthorSchemaOrg(
  author: string | string[] | ArticleAuthorSchemaOrg | ArticleAuthorSchemaOrg[],
) {
  if (Array.isArray(author)) {
    return author.map((author: string | ArticleAuthorSchemaOrg) =>
      genAuthorInfoSchemaOrg(author),
    );
  }
  return genAuthorInfoSchemaOrg(author);
}

export function setPublisherSchemaOrg(name?: string, logo?: string) {
  if (!name && !logo) {
    return undefined;
  }
  return {
    "@type": "Organization",
    name: name,
    logo: { "@type": "ImageObject", url: logo },
  };
}

export function setProviderSchemaOrg(provider: JsonLdProvider) {
  if (provider) {
    return {
      "@type": provider.type || "Organization",
      name: provider.name,
      sameAs: provider.url,
    };
  }

  return undefined;
}
