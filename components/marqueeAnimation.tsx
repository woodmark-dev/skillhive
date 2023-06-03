export type Props = {
  children: React.ReactNode;
  animationDirection: string;
};

export default function MarqueeAnimation({
  children,
  animationDirection,
}: Props) {
  return (
    <div className="relative flex overflow-hidden w-full">
      <div
        style={{ animationDirection }}
        className="animate-marquee whitespace-nowrap"
      >
        {children}
      </div>

      <div
        style={{ animationDirection }}
        className="absolute top-0 animate-marquee2 whitespace-nowrap"
      >
        {children}
      </div>
    </div>
  );
}
