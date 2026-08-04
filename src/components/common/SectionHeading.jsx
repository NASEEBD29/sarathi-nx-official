export default function SectionHeading({
  subtitle,
  title,
  description,
  center = true,
}) {
  return (
    <div className={center ? "text-center mb-16" : "mb-16"}>
      <span className="inline-block text-sm font-semibold uppercase tracking-[4px] text-[#0F766E] bg-teal-50 px-4 py-2 rounded-full">
        {subtitle}
      </span>

      <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>

      <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
        {description}
      </p>
    </div>
  );
}