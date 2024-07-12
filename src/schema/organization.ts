import { toSchemaOrg } from "./utils";

export type OrganizationSchemaOrg = {
  name: string;
  url: string;
  logo: string;
  sameAs: string[];
};

export function defineOrganizationSchema(props: OrganizationSchemaOrg) {
  const data = props;
  return toSchemaOrg("Organization", data);
}
