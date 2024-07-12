import type { Head, HeadMetaRobots } from "../types";

type Props = {
  index: boolean;
  follow: boolean;
};

const robotsMap = ({ follow, index }: HeadMetaRobots) => ({
  index: index ? "index" : "noindex",
  follow: follow ? "follow" : "nofollow",
});

export function defineRobotsHeads(props: Props) {
  const heads: Head[] = [];
  const robotsContent = Object.values(
    robotsMap(props || ({} as HeadMetaRobots)),
  ).join(",");

  heads.push({
    meta: {
      name: "robots",
      content: robotsContent,
    },
  });

  return heads;
}
