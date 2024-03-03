"use client";
import React from "react";
import Input from "../Input";
import { TiArrowRightThick } from "react-icons/ti";
import { Button } from "@/components/ui/button";

interface ContactProps {
  setContactPageCompleted: Function;
  setContactPageData: Function;
}

const Contact: React.FC<ContactProps> = ({
  setContactPageCompleted,
  setContactPageData,
}) => {
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [postalcode, setPostalcode] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [linkedin, setLinkedin] = React.useState("");

  return (
    <div className="h-full  w-full p-10">
      <div className="flex justify-start h-full flex-col gap-5">
        <div>
          <h2 className="text-[1.4rem] lg:text-[1.8rem] font-medium">
            Please enter your <span className="text-primary"> contact </span>{" "}
            info
          </h2>
          <small className="text-md text-muted-foreground leading-10">
            It allows employers to see how they contact you.
          </small>
        </div>
        <div className="">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setContactPageCompleted(true);
              let data = {
                name,
                address,
                city,
                postalcode,
                phone,
                email,
                linkedin,
              };
              setContactPageData(data);
              console.log(data);
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <Input label="Fullname" placeholder="Tanuj" setText={setName} />
              <Input
                label="Address"
                placeholder="Enter a Location"
                setText={setAddress}
              />
              <Input label="City" placeholder="Dehradun" setText={setCity} />
              <Input
                label="Postal Code"
                placeholder="248002"
                setText={setPostalcode}
              />
              <Input
                label="Phone"
                placeholder="987-654-3210"
                setText={setPhone}
              />
              <Input
                label="Email"
                placeholder="e.g. mail@example.com"
                setText={setEmail}
              />
              <Input
                label="Linked-in"
                placeholder="Your Linked-in url"
                setText={setLinkedin}
              />
            </div>
            <Button type="submit" className="mt-5 text-white">
              <span>Compile</span>
              {/* <span className="text-2xl">
                <TiArrowRightThick />
              </span> */}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
