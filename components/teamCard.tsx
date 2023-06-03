import Image from "next/image";
export default function TeamCard({
  name,
  imageLink,
  about,
}: {
  name: string;
  imageLink: string;
  about: string;
}) {
  return (
    <div className="card bg-darkNuetral shadow-xl rounded-tl-[100px] inline-flex mx-4 md:w-96 w-72 md:h-80 h-96">
      <div className="avatar">
        <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <Image src={imageLink} alt="Server photo" width={450} height={500} />
        </div>
      </div>
      <div className="card-body whitespace-normal">
        <h1 className="font-bold">{name}</h1>
        <div className="whitespace-normal">
          <p className="text-sm font-mono inline">{about}</p>
        </div>
      </div>
    </div>
  );
}
