import { HiChevronDown } from "react-icons/hi2";

export default function FaqUnit({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="py-5">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
          <span className="font-bold">{question}</span>
          <span className="transition group-open:rotate-180">
            <HiChevronDown />
          </span>
        </summary>
        <p className="group-open:animate-fadeIn mt-3 text-black">{answer}</p>
      </details>
    </div>
  );
}
