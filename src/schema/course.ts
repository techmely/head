import type { JsonLdProvider } from "../types";
import { setProviderSchemaOrg, toSchemaOrg } from "./utils";

export function defineCourseSchema(
  name: string,
  provider: JsonLdProvider,
  props?: any,
) {
  const data = {
    ...props,
    name,
    provider: setProviderSchemaOrg(provider),
  };
  return toSchemaOrg("Course", data);
}
