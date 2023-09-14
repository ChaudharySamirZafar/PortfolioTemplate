"use client";

import WorkExperienceData from "../../lib/data/WorkExperienceData.json";
import KeySkillsData from "../../lib/data/KeySkillsData.json";
import EducationData from "../../lib/data/EducationData.json";
import { useState } from "react";

export default function CV() {
  return (
    <div className="flex flex-col gap-y-4 pb-8">
      <Introduction />
      <hr className="border-skin-line" />
      <ProfileSection />
      <hr className="border-skin-line" />
      <KeySkills />
      <hr className="border-skin-line" />
      <WorkExperience />
      <hr className="border-skin-line" />
      <Education />
    </div>
  );
}

const Introduction = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold capitalize">
        curriculum vitae (CV)
      </h1>
      <p className="text-md font-medium">
        This is my current CV. Please click{" "}
        <a className="underline font-bold cursor-pointer" href="/CV/CV.docx">
          here
        </a>{" "}
        to download it, feel free to reuse it.
      </p>
    </div>
  );
};

const ProfileSection = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold capitalize">Profile</h1>
        <p className="text-sm font-medium">
          I'm a dedicated software engineer with a passion for crafting
          innovative solutions. I thrive on contributing to enterprise-level
          software projects, constantly refining my development, testing, and
          maintainability approaches. Committed to lifelong learning, I'm always
          leveling up my skills to stay at the cutting edge of software
          engineering.
        </p>
      </div>
    </div>
  );
};

const KeySkills = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold capitalize">Key Skills</h1>
      <div className="mt-2">
        {KeySkillsData.skills.map((element, index) => {
          return (
            <IndividualAccordion
              key={index}
              skill={element.skill}
              nestedSkills={element.children}
            />
          );
        })}
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
        className={`flex items-center text-left justify-between w-full border p-2 text-xs md:text-sm ${
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

const WorkExperience = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold capitalize">Work Experience</h1>
      <ol className="relative border-l mt-2">
        {WorkExperienceData.workExperience.map((element, index) => {
          return (
            <li className="mb-5 ml-4" key={index}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {element.startDate}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {element.employerName}
              </h3>
              <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {element.location}
              </p>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                {element.jobTitle}
              </h3>
              <ul className="list-disc ml-4">
                {element.keyPoints?.map((element, index) => {
                  return (
                    <li className="text-sm whitespace-pre-wrap" key={index}>
                      {element}
                    </li>
                  );
                })}
              </ul>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"></p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

const Education = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold capitalize">Education</h1>
      {EducationData.map((element, index) => {
        return (
          <div className="mb-4" key={index}>
            <div className="flex md:flex-row md:justify-between flex-col">
              <h2 className="text-md font-semibold capitalize">
                {element.institute}
              </h2>
              <p className="text-sm capitalize">
                {element.location} ({element.dateRange})
              </p>
            </div>
            <h2 className="text-md font-semibold capitalize">
              {element.courseTitle}
            </h2>
            <ul>
              {element.grades.map((element, index) => {
                return (
                  <h2 className="text-sm font-semibold capitalize" key={index}>
                    {element.subject} - {element.grade}
                  </h2>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
