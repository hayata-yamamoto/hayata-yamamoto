export const profile = {
  name: "Hayata Yamamoto",
} as const;

export type Link = {
  label: string;
  url: string;
  role?: string;
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
        label: "Tied, Inc. / Tied株式会社",
        url: "https://corp.tied-inc.com/",
        role: "代表取締役",
        ogDescription:
          "スタートアップから投資家のみなさんまでを技術面でご支援する会社です",
      },
      {
        label: "Rokuse LLC / 六瀬合同会社",
        url: "https://rokuse.com/",
        role: "代表社員",
        ogDescription:
          "コミュニティ開発を中心にした、人と場づくりの会社です",
      },
    ],
  },
];
