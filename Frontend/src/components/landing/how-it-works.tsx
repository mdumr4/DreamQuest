
"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const steps = [
  {
    title: "Share Your Story",
    description: "Begin by telling us about a role you've held. Whether you're a student or a seasoned professional, this is your first step toward discovery.",
    imageUrl: "https://raw.githubusercontent.com/sohaa-khan11/dream-quest-assests/main/Screenshot%202025-09-21%20082843.png",
    aiHint: "prototype screenshot role input"
  },
  {
    title: "Draft Your Career Identity",
    description: "Draft a Career Identity Statement that showcases the unique skills and experiences you bring to the workforce.",
    imageUrl: "https://github.com/sohaa-khan11/dream-quest-assests/raw/main/Screenshot%202025-09-21%20092021.png",
    aiHint: "prototype screenshot profile details"
  },
  {
    title: "Explore AI-Powered Job & Course Paths",
    description: "Discover personalized career and course suggestions. Dive into AI-powered insights to chart your path forward.",
    imageUrl: "https://github.com/sohaa-khan11/dream-quest-assests/raw/main/Screenshot%202025-09-21%20092446.png",
    aiHint: "prototype screenshot career exploration"
  },
];

function Step({ title, description, imageUrl, aiHint, index }: (typeof steps)[0] & { index: number }) {
  const [stepRef, isStepVisible] = useScrollAnimation<HTMLDivElement>();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={stepRef}
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ease-out",
        isStepVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className={cn("space-y-4 text-center lg:text-left", isEven ? "lg:order-1" : "lg:order-2")}>
        <h3 className="text-3xl font-bold tracking-tight">{title}</h3>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>
      <div className={cn("relative aspect-video rounded-xl shadow-2xl border group", isEven ? "lg:order-2" : "lg:order-1")}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain rounded-xl"
          data-ai-hint={aiHint}
        />
      </div>
    </div>
  );
}


export default function HowItWorks() {
  const [titleRef, isTitleVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="how-it-works" className="w-full py-20 md:py-32 bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-16">
          <div
            ref={titleRef}
            className={cn(
              "text-center transition-all duration-700",
              isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Three simple steps to unlock your professional potential.
            </p>
          </div>

          <div className="w-full max-w-5xl mx-auto space-y-24">
            {steps.map((step, index) => (
              <Step key={index} {...step} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
