export default function FaqWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid w-full divide-y divide-neutral-200 px-5 md:max-w-xl">
      {children}
    </div>
  );
}
