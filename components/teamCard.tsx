import Image from "next/image";
export default function TeamCard() {
  return (
    <div className="card w-76 bg-blue-200 shadow-xl rounded-tl-[100px] inline-block mx-4">
      <div className="avatar">
        <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <Image
            src="/images/ibrahim.jpg"
            alt="Server photo"
            width={450}
            height={500}
          />
        </div>
      </div>
      <div className="card-body">
        <h1 className="font-bold">Ibrahim Ayuba</h1>
        <div>
          <p className="text-sm font-mono">
            Ibrahim Ayuba is a web developer who
          </p>
          <p className="text-sm font-mono">loves helping others</p>
        </div>
      </div>
    </div>
  );
}
