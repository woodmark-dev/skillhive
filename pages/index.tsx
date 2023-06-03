import { useEffect, useState } from "react";
import { home, benefits, faqs, testimonials, theTeam } from "../content";
import { useInView } from "react-intersection-observer";
import FeaturesCard from "@/components/featuresCard";
import TeamCard from "@/components/teamCard";
import DesktopMarquee from "@/components/desktopMarquee";
import MobileMarquee from "@/components/mobileMarquee";
import TestimonialWrapper from "@/components/testimonialsWrapper";
import Testimonial from "@/components/testimonial";
import Benefit from "@/components/benefit";
import FaqWrapper from "@/components/faqWrapper";
import FaqUnit from "@/components/faq";
import ContentHeader from "@/components/contentHeaders";
import BenefitsWrapper from "@/components/benefitsWrapper";
import SkillhiveNumbersWrapper from "@/components/skillhiveNumbersWrapper";
import SkillhiveNumbers from "@/components/skillhiveNumbers";
import FeaturesCardsWrapper from "@/components/featuresCardsWrapper";
import HeroWrapper from "@/components/heroWrapper";
import { ContentProps } from "@/types";

export default function Home({
  featuresContent,
  heroContent,
  featuresHeader,
  benefitsContent,
  faqsContent,
  testimonialsContent,
  theTeamContent,
}: ContentProps) {
  const [applicantNo, setApplicantNo] = useState(0);
  const [studentNo, setStudentNo] = useState(0);
  const currentStudents = 70;
  const currentApplicants = 370;
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      if (studentNo !== currentStudents) {
        setTimeout(() => {
          setStudentNo(studentNo + 1);
        }, 5);
      }
      if (applicantNo !== currentApplicants) {
        setTimeout(() => {
          setApplicantNo(applicantNo + 1);
        }, 5);
      }
    }
  }, [inView, studentNo, applicantNo, currentApplicants, currentStudents]);

  return (
    <main>
      {/* Hero section */}
      <div className="hero min-h-max md:min-h-screen bg-gradient-to-r from-primaryColor to-darkNuetral text-lightNuetral py-12">
        <HeroWrapper title={heroContent?.title} content={heroContent?.detail} />
      </div>

      {/* Features Section */}
      <div
        className="py-20 md:px-16 px-5 flex flex-col gap-16 justify-center items-center md:items-start bg-lightNuetral"
        id="features"
      >
        <ContentHeader
          text={featuresHeader?.title}
          details={featuresHeader?.detail}
        />
        <FeaturesCardsWrapper>
          {featuresContent?.map((item, i) => (
            <FeaturesCard
              key={item.id}
              imageLink={item.imageLink}
              title={item.title}
              detail={item.detail.split(" ").slice(0, 12).join(" ")}
              fullDetail={item.detail}
              id={item.id}
            />
          ))}
        </FeaturesCardsWrapper>
      </div>

      {/* Skillhive in Numbers Section */}

      <div
        className="bg-darkNuetral py-20 md:px-16 px-5 flex flex-col gap-16 items-center"
        ref={ref}
      >
        <ContentHeader text="SkillHive365 In Numbers" details={undefined} />

        <SkillhiveNumbersWrapper>
          <SkillhiveNumbers
            num={applicantNo}
            description="Recent SkillHive365 Applicants"
          />
          <div className="divider divider-horizontal"></div>
          <SkillhiveNumbers
            num={studentNo}
            description="Current Skillhive365 Students"
          />
        </SkillhiveNumbersWrapper>
      </div>

      {/* The Team Section */}
      <div className="bg-lightNuetral py-20 flex flex-col gap-24" id="the-team">
        <ContentHeader text="Meet the team" details={undefined} />

        <DesktopMarquee>
          {theTeamContent?.map((item, i) => (
            <TeamCard
              key={i}
              name={item.name}
              imageLink={item.imageLink}
              about={item.about}
            />
          ))}
        </DesktopMarquee>

        <MobileMarquee animationDirection="reverse">
          {theTeamContent
            ?.map((item, i) => (
              <TeamCard
                key={i}
                name={item.name}
                imageLink={item.imageLink}
                about={item.about}
              />
            ))
            .splice(0, 4)}
        </MobileMarquee>

        <MobileMarquee animationDirection="normal">
          {theTeamContent
            ?.map((item, i) => (
              <TeamCard
                key={i}
                name={item.name}
                imageLink={item.imageLink}
                about={item.about}
              />
            ))
            .splice(3)}
        </MobileMarquee>
      </div>

      {/* Testimonial Section */}
      <div
        className="bg-darkNuetral flex flex-col justify-center items-center gap-16 pt-20 pb-8 md:px-16"
        id="testimonials"
      >
        <ContentHeader text="Testimonials" details={undefined} />
        <TestimonialWrapper>
          {testimonialsContent?.map((item, i) => (
            <Testimonial
              key={i}
              name={item.name}
              testimonial={item.testimonial}
            />
          ))}
        </TestimonialWrapper>
      </div>

      {/* Benefits Section */}
      <div
        className="hero min-h-screen py-20 md:px-16 bg-lightNuetral flex flex-col gap-16 items-center"
        id="benefits"
      >
        <ContentHeader text="Why Us" details={undefined} />
        <BenefitsWrapper>
          {benefitsContent?.map((item, i) => (
            <Benefit
              key={i}
              title={item.title}
              description={item.description}
            />
          ))}
        </BenefitsWrapper>
      </div>

      {/* Faqs section */}
      <div
        className="py-20 md:px-16 bg-darkNuetral flex flex-col gap-5 items-center"
        id="faq"
      >
        <ContentHeader text="FAQs" details={undefined} />
        <FaqWrapper>
          {faqsContent?.map((item, i) => (
            <FaqUnit key={i} question={item.question} answer={item.answer} />
          ))}
        </FaqWrapper>
      </div>
    </main>
  );
}

export function getStaticProps() {
  return {
    props: {
      featuresContent: home.featuresContent,
      heroContent: home.heroContent,
      featuresHeader: home.featuresHeader,
      benefitsContent: benefits,
      faqsContent: faqs,
      testimonialsContent: testimonials,
      theTeamContent: theTeam,
    },
  };
}
