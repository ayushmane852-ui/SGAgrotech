import { Helmet } from "react-helmet-async";

export default function SEO({ title, description }) {
  const fullTitle = title.includes("S.G. Enterprises")
    ? title
    : `${title} | S.G. Enterprises`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
