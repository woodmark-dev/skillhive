export default function SkillhiveNumbers({
  num,
  description,
}: {
  num: number;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <p className="text-secondaryColor text-6xl font-extrabold">{num}+</p>
      <p className="font-extralight text-center">{description}</p>
    </div>
  );
}
