import Image from "next/image";
import { BsQuote } from "react-icons/bs";

export default function Testimonial({
  testimonial,
  name,
}: {
  testimonial: string;
  name: string;
}) {
  return (
    <div className="md:flex md:justify-center">
      <div className="flex flex-col justify-center items-center gap-8 pb-16">
        <div className="flex px-5 md:px-0">
          <div>
            <BsQuote className="md:w-8 md:h-8 text-secondaryColor" />
          </div>
          <p className="text-center md:w-96 font-bold md:pr-0">{testimonial}</p>
        </div>
        <div className="flex gap-7 items-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {/* <Image
                src="/images/ibrahim.JPG"
                alt="image 3"
                width={450}
                height={500}
              /> */}
            </div>
          </div>
          <div>
            <p>{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
