import { Helmet } from "react-helmet-async";
import { siteConfig } from "../data/siteConfig";

export default function SEO({ title, description }) {
  const brandName = siteConfig.name;
  const fullTitle = title.includes(brandName) ? title : `${title} | ${brandName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
