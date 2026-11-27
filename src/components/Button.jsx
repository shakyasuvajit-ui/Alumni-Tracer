export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  className = "",
  ...rest
}) {
  const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none border border-slate-300 dark:border-slate-700";

  const variants = {
    primary: "bg-moss-600 text-black hover:bg-moss-700 shadow-sm border-transparent",
    outline: "bg-white text-ink hover:border-moss-500 hover:text-moss-600",
    ghost: "border-transparent text-ink hover:bg-ink/5",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-1.5 text-base",
  };

  return (
    <button
      className={`${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      disabled={loading}
      {...rest}
    >
      {loading && (
        <span className="h-3.5 w-3.5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
      )}
      {children}
    </button>
  );
}