import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

interface Experience {
  title: string;
  company_name: string;
  date: string;
  icon: string;
  iconBg: string;
  points: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { title, company_name, date, icon, iconBg, points } = experience;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={icon}
            alt={company_name}
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
      }
    >
      <header>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="m-0 text-base font-semibold text-secondary">
          {company_name}
        </p>
      </header>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {points.map((point, index) => (
          <li
            key={`${company_name}-point-${index}`}
            className="pl-1 text-sm tracking-wider text-white-100"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
