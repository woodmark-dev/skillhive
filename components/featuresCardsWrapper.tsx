export default function FeaturesCardsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
      {children}
    </div>
  );
}
