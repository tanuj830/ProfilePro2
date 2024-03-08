"use client";
import Contact from "@/components/resume builder/contact/Contact";
import Education from "@/components/resume builder/education/Education";
import Experience from "@/components/resume builder/experience/Experience";
import Preview from "@/components/resume builder/Preview";
import Project from "@/components/resume builder/project/Project";
import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useParams } from "next/navigation";

const page = () => {
  const data = useParams();
  console.log(data);
  // 1: Contact Details
  const [contactPageCompleted, setContactPageCompleted] = React.useState(false);
  const [contactPageActive, setContactPageActive] = React.useState(true);
  const [contactPageData, setContactPageData] = React.useState({
    name: "Tanuj Bhatt",
    address: "Sunshine Enclave, Clement Town",
    city: "Dehradun",
    postalcode: "248002",
    phone: "7668088539",
    email: "tanujbhatt65@gmail.com",
    linkedin: "https://tanujbhatt.in
  });
  // 2: Education Details
  const [educationPageCompleted, setEducationPageCompleted] =
    React.useState(false);
  const [educationPageActive, setEducationPageActive] = React.useState(false);
  const [educationPageData, setEducationPageData] = React.useState([
    {
      year: "2020-2024",
      degree: "Bachelor of Science in Computer Science",
      school: "Graphic Era Hill University",
      grade: "8.1/10",
    },
  ] as any);

  // 3: Experience Details
  const [experiencePageCompleted, setExperiencePageCompleted] =
    React.useState(false);
  const [experiencePageActive, setExperiencePageActive] = React.useState(false);
  const [experiencePageData, setExperiencePageData] = React.useState([
    {
      title: "Web Developer Intern",
      employer: "Visit Uttarakhand",
      startDate: "Mar 2023",
      endDate: "May 2023",
      city: "Dehradun",
      disp: "Build and optimized the front-end of a web application using ReactJS and NextJS framework; implemented performance enhancements that reduced page load time by 40 percent.",
    },
  ] as any);
  // {
  //   title: "Founder",
  //   employer: "ProfilePro.",
  //   startDate: "Jan 2024",
  //   endDate: "Present",
  //   city: "Dehradun",
  //   disp: "Building ProfilePro.: A web application which will help users to increase there productivity by 20 times. ",
  // }
  // 3: Project Details
  const [projectPageCompleted, setProjectPageCompleted] = React.useState(false);
  const [projectPageActive, setProjectPageActive] = React.useState(false);
  const [projectPageData, setProjectPageData] = React.useState([
    {
      title: "Talkify",
      skills: "ReactJS, NextJS, NodeJS",
      startDate: "Dec 2023",
      endDate: "Dec 2023",
      disp: "Executed and led the development of Talkify, a revolutionary web application that combined advanced language      capabilities and cutting-edge speech recognition technology, driving a 40 percent boost in user engagement and reducing      customer support issues by 25 percent.",
    },
  ] as any);
  const buttons = [
    {
      id: 1,
      text: "Contact",
    },
    {
      id: 2,
      text: "Education",
    },
    {
      id: 3,
      text: "Experiences",
    },
    {
      id: 4,
      text: "Projects",
    },
    {
      id: 5,
      text: "Achievements",
    },
  ];

  // Function for showing resume component on the basis of id
  const handleclick = (id: Number) => {
    if (id === 1) {
      setContactPageActive(true);
      setEducationPageActive(false);
      setExperiencePageActive(false);
      setProjectPageActive(false);
    } else if (id === 2) {
      setContactPageActive(false);
      setEducationPageActive(true);
      setExperiencePageActive(false);
      setProjectPageActive(false);
    } else if (id === 3) {
      setContactPageActive(false);
      setEducationPageActive(false);
      setExperiencePageActive(true);
      setProjectPageActive(false);
    } else if (id === 4) {
      setContactPageActive(false);
      setEducationPageActive(false);
      setExperiencePageActive(false);
      setProjectPageActive(true);
    }
  };

  return (
    <>
      <div className="lg:hidden flex flex-col-reverse lg:flex-row gap-5">
        <div className="flex  flex-col w-full lg:w-[50%]">
          <div className="flex justify-evenly mt-5 ">
            <div className="border-b h-2 w-full absolute  border-secondary -z-10" />
            {buttons.map((btn) => (
              <div key={btn.id} className="flex flex-col items-center ">
                <div className="rounded-full h-3 w-3 bg-[#0000ff]" />
                <button
                  className="text-xs py-1 md:px-4 bg-muted rounded-3xl"
                  onClick={() => handleclick(btn.id)}
                >
                  {btn.text}
                </button>
              </div>
            ))}
          </div>
          {contactPageActive ? (
            <Contact
              setContactPageCompleted={setContactPageCompleted}
              setContactPageData={setContactPageData}
            />
          ) : null}
          {educationPageActive ? (
            <Education
              setEducationPageCompleted={setEducationPageCompleted}
              setEducationPageData={setEducationPageData}
              educationPageData={educationPageData}
            />
          ) : null}
          {experiencePageActive ? (
            <Experience
              setExperiencePageCompleted={setExperiencePageCompleted}
              setExperiencePageData={setExperiencePageData}
              experiencePageData={experiencePageData}
            />
          ) : null}
          {projectPageActive ? (
            <Project
              setProjectPageCompleted={setProjectPageCompleted}
              setProjectPageData={setProjectPageData}
              projectPageData={projectPageData}
            />
          ) : null}
        </div>
        <div className="w-full lg:w-[50%]">
          <Preview
            contactPageData={contactPageData}
            educationPageData={educationPageData}
            experiencePageData={experiencePageData}
            projectPageData={projectPageData}
          />
        </div>
      </div>

      {/* pc view */}
      <div className="hidden lg:inline w-full gap-5">
        <ResizablePanelGroup
          direction="horizontal"
          className=" w-full rounded-lg "
        >
          <ResizablePanel defaultSize={40}>
            <div className="flex  flex-col w-full ">
              <div className="flex justify-evenly mt-5 ">
                <div className="border-b h-2 w-full absolute border-secondary -z-10" />
                {buttons.map((btn) => (
                  <div key={btn.id} className="flex flex-col items-center ">
                    <div className="rounded-full h-3 w-3 bg-[#0000ff]" />
                    <button
                      className="text-xs py-1 md:px-4 bg-muted rounded-3xl"
                      onClick={() => handleclick(btn.id)}
                    >
                      {btn.text}
                    </button>
                  </div>
                ))}
              </div>
              {contactPageActive ? (
                <Contact
                  setContactPageCompleted={setContactPageCompleted}
                  setContactPageData={setContactPageData}
                />
              ) : null}
              {educationPageActive ? (
                <Education
                  setEducationPageCompleted={setEducationPageCompleted}
                  setEducationPageData={setEducationPageData}
                  educationPageData={educationPageData}
                />
              ) : null}
              {experiencePageActive ? (
                <Experience
                  setExperiencePageCompleted={setExperiencePageCompleted}
                  setExperiencePageData={setExperiencePageData}
                  experiencePageData={experiencePageData}
                />
              ) : null}
              {projectPageActive ? (
                <Project
                  setProjectPageCompleted={setProjectPageCompleted}
                  setProjectPageData={setProjectPageData}
                  projectPageData={projectPageData}
                />
              ) : null}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={60}>
            <div className="w-full ">
              <Preview
                contactPageData={contactPageData}
                educationPageData={educationPageData}
                experiencePageData={experiencePageData}
                projectPageData={projectPageData}
              />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default page;
