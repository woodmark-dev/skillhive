import {
  HiOutlineLightBulb,
  HiOutlineCalendar,
  HiSupport,
} from "react-icons/hi";
import { IoIosSchool } from "react-icons/io";
import { HiOutlineBeaker } from "react-icons/hi2";

type BenefitProps = {
  title: string;
  description: string;
};

export default function Benefit({ title, description }: BenefitProps) {
  return (
    <div className="flex gap-5">
      <div>
        {title === "Comprehensive Curriculum" ? (
          <HiOutlineLightBulb className="w-16 h-16 text-[#6b2737]" />
        ) : title === "Flexible Learning" ? (
          <HiOutlineCalendar className="w-16 h-16 text-[#6b2737]" />
        ) : title === "Expert Instructors" ? (
          <IoIosSchool className="w-16 h-16 text-[#6b2737]" />
        ) : title === "Hands-On Projects" ? (
          <HiOutlineBeaker className="w-16 h-16 text-[#6b2737]" />
        ) : (
          <HiSupport className="w-16 h-16 text-[#6b2737]" />
        )}
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold text-[#3943b7]">{title}</h2>
        <p className="pr-4 md:pr-0 text-black">{description}</p>
      </div>
    </div>
  );
}
