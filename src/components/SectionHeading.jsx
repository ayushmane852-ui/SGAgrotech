export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}) {
  const alignClass =
    align === "center"
      ? "text-center mx-auto"
      : align === "left"
        ? "text-left"
        : "text-right ml-auto";

  return (
    <div className={`max-w-3xl mb-12 ${alignClass}`}>
      {subtitle && (
        <span
          className={`inline-block text-sm font-semibold uppercase tracking-wider mb-3 ${
            light ? "text-accent-orange" : "text-primary-green"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            light ? "text-gray-200" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
