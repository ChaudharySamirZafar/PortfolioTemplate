"use client";

import PortfolioData from "@/lib/data/PortfolioData.json";
import Project from "@/lib/types/Project";
import IconsMap from "@/lib/types/IconsMap";
import Image from "next/image";
import { useState } from "react";

export default function PortfolioProject({
  params,
}: {
  params: { projectName: string };
}) {
  const decodedProjectName = decodeURIComponent(params.projectName);
  const project: Project | undefined = PortfolioData.projects.find(
    (e) => e.title === decodedProjectName
  );

  if (project !== undefined) {
    return (
      <div className="flex flex-col gap-y-4 pb-16">
        <Introduction projectName={decodedProjectName} project={project} />
        <hr className="border-skin-line" />
        <TechnologiesUsed project={project} />
        <hr className="border-skin-line" />
        <Summary project={project} />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-y-4 pb-8">
        <h1 className="text-lg font-bold text-red-500">
          Error - {decodedProjectName} does not exist... Hopefully I will
          complete it next time 🤥
        </h1>
      </div>
    );
  }
}

const Introduction = ({
  projectName,
  project,
}: {
  projectName: string;
  project: Project;
}) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold capitalize">{projectName}</h1>
      <p>
        {new Date(project.date).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <a className="underline font-bold" href={project.link}>
        Source Code | Live Link
      </a>
      {project.typeOfProject.endsWith("University Project") &&
        project.report && (
          <p className="text-md font-medium">
            Yep, I was forced to write a report on this. Click{" "}
            <a
              className="underline font-bold cursor-pointer"
              href={`/Projects/Reports/${projectName}.docx`}
            >
              here
            </a>{" "}
            to download it.
          </p>
        )}
    </div>
  );
};

const TechnologiesUsed = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-xl font-semibold capitalize">Technologies Used</h1>
      <div className="flex flex-row mt-2 gap-x-2 flex-wrap">
        {project.technologies.map((element, index) => {
          const iconLink = IconsMap[element];
          return (
            <Image
              key={index}
              className="rounded-lg p-1"
              src={iconLink}
              width={60}
              height={60}
              alt="Samir Zafar"
              priority={true}
            />
          );
        })}
      </div>
    </div>
  );
};

const Summary = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-xl font-semibold capitalize">Summary</h1>
      <div>
        <IndividualAccordion
          skill="Project Description"
          nestedSkills={project.projectDescription}
        />
        <IndividualAccordion
          skill="Key Features"
          nestedSkills={project.keyFeatures}
        />
        <IndividualAccordion
          skill="Technical Implementation"
          nestedSkills={project.technicalImplementation}
        />
      </div>
    </div>
  );
};

const IndividualAccordion = ({
  skill,
  nestedSkills,
}: {
  skill: string;
  nestedSkills: string[];
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setToggle(!toggle);
        }}
        className={`flex items-center text-left justify-between w-full border p-2 text-lg font-semibold capitalize ${
          nestedSkills?.length > 0
            ? "focus:ring-4 focus:ring-gray-200 hover:bg-gray-100"
            : ""
        }`}
      >
        <span>{skill}</span>
        {nestedSkills?.length > 0 && (
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        )}
      </button>
      {nestedSkills?.length > 0 && (
        <div className={toggle ? "block" : "hidden"}>
          <div className="border border-gray-200 py-3 px-7">
            <ul className="list-disc">
              {nestedSkills.map((element, index) => (
                <li
                  className="text-xs md:text-sm mb-2 whitespace-pre-wrap"
                  key={index}
                >
                  {element}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
