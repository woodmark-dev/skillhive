import MarqueeAnimation, { Props } from "./marqueeAnimation";

export default function MobileMarquee({ children, animationDirection }: Props) {
  return (
    <div className="md:hidden block w-full">
      <MarqueeAnimation animationDirection={animationDirection}>
        {children}
      </MarqueeAnimation>
    </div>
  );
}
