import { toSchemaOrg } from "./utils";

export interface ItemListElementsSchema {
  item: string;
  name: string;
  position: number;
}
export function setItemListElementsJson(items: ItemListElementsSchema[]) {
  if (items && items.length > 0) {
    return items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      item: {
        "@id": item.item,
        name: item.name,
      },
    }));
  }

  return undefined;
}

export function defineBreadcrumbSchema(items: ItemListElementsSchema[]) {
  return toSchemaOrg("BreadcrumbList", {
    itemListElement: setItemListElementsJson(items),
  });
}
