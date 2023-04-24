import Image from "next/image";
import FeatureModal from "./featuresModel";
export default function FeaturesCard({
  title,
  detail,
  fullDetail,
  id,
}: {
  title: string;
  detail: string;
  fullDetail: string;
  id: number;
}) {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <Image
          src="/images/main-image.jpg"
          alt="Server photo"
          width={450}
          height={500}
          className="rounded-lg shadow-2xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{detail}...</p>
        <div className="card-actions justify-end">
          <label htmlFor={`my-modal-${id}`} className="btn">
            Learn more
          </label>
        </div>
      </div>
      <FeatureModal id={id} fullDetail={fullDetail} title={title} />
    </div>
  );
}
