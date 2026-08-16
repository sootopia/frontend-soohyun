type SectionTitleProps = {
  title: string;
  description: string;
};

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-2xl text-center mb-10">
      <h3 className="text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl dark:text-white">{title}</h3>
      <p className="mt-2 md:mt-3 text-base break-keep leading-relaxed text-gray-500 md:text-lg dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
