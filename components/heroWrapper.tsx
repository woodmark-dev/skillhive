import Image from "next/image";
export default function HeroWrapper({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <Image
        src="/images/main-image.jpg"
        alt="Server photo"
        width={450}
        height={500}
        className="rotate-90 rounded-lg shadow-2xl invisible md:visible hidden md:block"
      />
      <div className="md:pr-28">
        <h1 className="md:text-5xl text-4xl font-bold">{title}</h1>
        <p className="py-6">{content}</p>
      </div>
    </div>
  );
}
