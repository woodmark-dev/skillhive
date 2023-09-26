import Image from "next/image";

export type TeamDetails = {
  name: string;
  introduction: string;
  imageLink: string;
};

export default function TeamsCard2({
  name,
  introduction,
  imageLink,
}: TeamDetails) {
  return (
    <div className="card md:w-96 h-140 md:h-160 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={imageLink}
          width={300}
          height={300}
          alt="Ibrahim"
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{introduction}</p>
      </div>
    </div>
  );
}
