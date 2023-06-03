import MarqueeAnimation from "./marqueeAnimation";

export default function DesktopMarquee({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:block hidden w-full">
      <MarqueeAnimation animationDirection="reverse">
        {children}
      </MarqueeAnimation>
    </div>
  );
}
