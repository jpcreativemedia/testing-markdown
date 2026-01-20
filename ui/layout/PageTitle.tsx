export default function PageTitle({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle?: string;
  description?: string;
}) {
  return (
    <div className="max-w-4xl">
      <h1 className="text-base/7 font-semibold text-primary">{title}</h1>
      {subtitle ? (
        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          {subtitle}
        </p>
      ) : null}
      {description ? (
        <p className="mt-6 text-xl/8 text-balance text-secondary">
          {description}
        </p>
      ) : null}
    </div>
  );
}
