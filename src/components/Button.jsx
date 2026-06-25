import { Link } from "react-router-dom";

const variants = {
  primary: "bg-accent-orange hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25",
  secondary: "bg-primary-green hover:bg-green-800 text-white shadow-lg shadow-green-700/20",
  outline: "border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white",
  outlineLight: "border-2 border-white text-white hover:bg-white hover:text-primary-green",
  blue: "bg-primary-blue hover:bg-blue-800 text-white shadow-lg shadow-blue-700/20",
  whatsapp: "bg-[#25D366] hover:bg-[#1da851] text-white shadow-lg shadow-green-500/25",
};

export default function Button({
  children,
  variant = "primary",
  href,
  to,
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
