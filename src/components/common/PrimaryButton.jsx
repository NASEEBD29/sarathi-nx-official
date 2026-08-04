export default function PrimaryButton({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      className={`bg-[#0F766E] hover:bg-[#115E59] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}