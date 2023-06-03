export default function ContentHeader({
  text,
  details = undefined,
}: {
  text: string;
  details: string | undefined;
}) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="md:text-4xl text-3xl text-primaryColor font-bold pt-12 text-center">
        {text}
      </h1>
      {details && <p className="text-lg text-center pt-3">{details}</p>}
    </div>
  );
}
