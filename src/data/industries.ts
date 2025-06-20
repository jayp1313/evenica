interface Industry {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  prioritiesImage: string;
  learnMoreHref?: string;
}

export const industries: Industry[] = [
  {
    id: "retail",
    title: "Retail",
    description:
      "Evenica’s ‘Commerce for Retail’ solution empowers B2C and B2C retailers to transact and interact online. Further connect the online and in-store experience by leveraging the capabilities of Store Commerce App.",
    imageSrc: "/industries/Commerce-for-Retail.png",
    prioritiesImage: "/industries/Retail-Priorities.png",
    learnMoreHref: "/industries/retail",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Evenica’s ‘Commerce for Healthcare’ solution empowers healthcare providers to transact and interact with ease. Create a digital platform for patient engagement that faciliates secure payments.",
    imageSrc: "/industries/Commerce-for-Healthcare.png",
    prioritiesImage: "/industries/Healthcare-Priorities.png",
    learnMoreHref: "/industries/healthcare",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "Evenica’s ‘Commerce for Manufacturing’ solution empowers self-service portals, field sales and digital client engagement. Merge transactions and interactions through meaningful digital transformation.",
    imageSrc: "/industries/Commerce-for-Manufacturing.png",
    prioritiesImage: "/industries/Manufacturing-Priorities.png",
    learnMoreHref: "/industries/manufacturing",
  },
  {
    id: "municipalities",
    title: "Municipalities",
    description:
      "Evenica’s ‘Commerce for Municipalities’ solution empowers municipalities and local governments to transact and interact online. Replace siloed systems with a single-sign-on platform, and engage with citizens through meaningful digital interactions.",
    imageSrc: "/industries/Commerce-for-Municipalities.png",
    prioritiesImage: "/industries/Evenica_Municipality-Priorities.png",
    learnMoreHref: "/industries/public-sector",
  },

  {
    id: "financial-services",
    title: "Financial Services",
    description:
      "Evenica’s ‘Commerce for Financial Services’ solution utilizes Commerce as a portal – to create a client dashboard that facilitates transactions and interactions. Allows clients to ability to view accounts, download files and pay for invoices in one platform.",
    imageSrc: "/industries/Commerce-for-Financial-Services.png",
    prioritiesImage: "/industries/Financial-Services-Priorities.png",
    learnMoreHref: "/industries/b2b",
  },
  {
    id: "beverage-cannabis",
    title: "Beverage and Cannabis",
    description:
      "Evenica’s ‘Commerce for Beverage and Cannabis’ solution empowers retailers to transact and interact online. Enable advanced capabilities such as product eligibility and field sales for a robust competitive edge.",
    imageSrc: "/industries/Commerce-for-Beverage-and-Cannabis.png",
    prioritiesImage: "/industries/Beverage-Priorities.png",
    learnMoreHref: "/industries/b2b",
  },
];
