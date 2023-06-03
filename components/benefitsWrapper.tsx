export default function BenefitsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-12">{children}</div>
  );
}
