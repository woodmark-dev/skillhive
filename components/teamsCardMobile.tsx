import TeamsCard2, { TeamDetails } from "./newsCard2";

export default function TeamsCardMobile({
  name,
  introduction,
  imageLink,
}: TeamDetails) {
  return (
    <div className="relative aspect-[2/3] w-[80%] shrink-0 snap-start snap-always sm:w-[44%]">
      <TeamsCard2
        name={name}
        introduction={introduction}
        imageLink={imageLink}
      />
    </div>
  );
}
