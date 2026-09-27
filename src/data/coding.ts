import { CodingProfile } from "./types";
import { links } from "./links";

// Statistics come from here only — nothing is invented at render time.
// Leave `statistic` undefined if you don't want a number displayed yet.
export const codingProfiles: CodingProfile[] = [
  {
    id: "leetcode",
    platform: "LeetCode",
    username: "tsh007",
    statistic: "360+ problems solved",
    description: "Problem solving & data structures practice.",
    url: links.leetcode,
  },
  {
    id: "codeforces",
    platform: "Codeforces",
    username: "Tejash007",
    statistic: "1000+ Rating, 330+ problems solved",
    description: "Competitive programming.",
    url: links.codeforces,
  },
  {
    id: "github",
    platform: "GitHub",
    username: "Tsh007",
    statistic: undefined,
    description: "Open source & personal projects.",
    url: links.github,
  },
];
