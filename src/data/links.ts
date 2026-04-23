export const profile = {
  name: "Hayata Yamamoto",
} as const;

export type Link = {
  label: string;
  url: string;
  ogImage?: string;
  ogDescription?: string;
};

export type LinkSection = {
  title: string;
  links: Link[];
};

export const sections: LinkSection[] = [
  {
    title: "SNS",
    links: [
      { label: "GitHub", url: "https://github.com/hayata-yamamoto" },
      { label: "X (Twitter)", url: "https://x.com/hayata_yamamoto" },
      { label: "Facebook", url: "https://www.facebook.com/hayata.yamamoto/" },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/hayata-yamamoto/",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "Tied, Inc.",
        url: "https://corp.tied-inc.com/",
        ogImage: "https://corp.tied-inc.com/opengraph-image?44df4bbee224c2ed",
        ogDescription:
          "スタートアップから成長企業まで、技術戦略の策定から実装、チーム構築まで包括的にサポート。",
      },
      {
        label: "Rokuse LLC",
        url: "https://rokuse.com/",
        ogDescription:
          "日常を豊かに、鮮やかにする場づくりを行う会社です。",
      },
    ],
  },
];
