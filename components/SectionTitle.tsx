// Shared Component #3 : SectionTitle
// หัวข้อหลักของแต่ละหน้า ใช้ซ้ำเพื่อให้สไตล์สม่ำเสมอ
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 text-center">
      {eyebrow && (
        <p className="mb-2 flex items-center justify-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-accent">
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
          <span className="h-px w-6 bg-accent" />
        </p>
      )}
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-muted">{subtitle}</p>
      )}
    </div>
  );
}
