"use client";
import { usePDF } from "react-to-pdf";
import ProjectPreview from "./project/ProjectPreview";
import ExperiencePreview from "./experience/ExperiencePreview";
import EducationPreview from "./education/EducationPreview";
import ContactPreview from "./contact/ContactPreview";
import { Button } from "../ui/button";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

interface PreviewProps {
  contactPageData: {
    name: string;
    address: string;
    city: string;
    postalcode: string;
    phone: string;
    email: string;
    linkedin: string;
  };
  educationPageData: Array<{
    year: string;
    degree: string;
    school: string;
    grade: string;
  }>;
  experiencePageData: Array<{
    title: string;
    employer: string;
    startDate: string;
    endDate: string;
    city: string;
    disp: string;
  }>;
  projectPageData: Array<{
    title: string;
    skills: string;
    startDate: string;
    endDate: string;
    disp: string;
  }>;
}

const Preview: React.FC<PreviewProps> = ({
  contactPageData,
  educationPageData,
  experiencePageData,
  projectPageData,
}) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleSave = () => {};
  return (
    <div className="w-full h-full relative border border-muted shadow-sm">
      <div className="absolute right-2 top-2">
        <div className="flex justify-end items-center gap-3">
          <Button
            onClick={() => handlePrint}
            variant={"secondary"}
            className=""
          >
            Save
          </Button>

          <Button
            onClick={() => {
              handlePrint(null, () => componentRef.current);
            }}
            className="text-white"
          >
            Download Resume
          </Button>
        </div>
      </div>
      <div
        ref={componentRef}
        className="bg-white text-black w-full h-screen py-5 px-10 "
      >
        {Object.keys(contactPageData) ? (
          <div>
            <ContactPreview contactPageData={contactPageData} />
            <EducationPreview educationPageData={educationPageData} />
            <ExperiencePreview experiencePageData={experiencePageData} />
            <ProjectPreview projectPageData={projectPageData} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Preview;
