import Image from "next/image";
import FeatureModal from "./featuresModel";
export default function FeaturesCard({
  title,
  detail,
  fullDetail,
  id,
  imageLink,
}: {
  title: string;
  detail: string;
  fullDetail: string;
  id: number;
  imageLink: string;
}) {
  return (
    <div className="card w-80 bg-darkNuetral shadow-xl">
      <figure>
        <Image
          src={imageLink}
          alt="Server photo"
          width={450}
          height={500}
          className="rounded-lg shadow-2xl h-48"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{detail}...</p>
        <div className="card-actions justify-end">
          <label
            htmlFor={`my-modal-${id}`}
            className="btn bg-secondaryColor text-[#edf4ed] hover:bg-secondaryColor"
          >
            Learn more
          </label>
        </div>
      </div>
      <FeatureModal id={id} fullDetail={fullDetail} title={title} />
    </div>
  );
}
