export type ContentProps = {
  featuresContent: Array<{
    title: string;
    detail: string;
    id: number;
  }>;
  heroContent: {
    title: string;
    detail: string;
  };
  featuresHeader: {
    title: string;
    detail: string;
  };
  benefitsContent: Array<{ title: string; description: string }>;
  faqsContent: Array<{ question: string; answer: string }>;
  testimonialsContent: Array<{ name: string; testimonial: string }>;
  theTeamContent: Array<{ name: string; imageLink: string; about: string }>;
};
