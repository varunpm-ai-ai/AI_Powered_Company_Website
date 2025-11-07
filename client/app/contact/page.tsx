"use client";

import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TextareaAutosize from "react-textarea-autosize";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";

const page = () => {
  return (
    <>
      <div className="bg-[url('/contanct.png')] bg-cover bg-center h-50">
        <div>
          {/* <Image
          src={Contact}
          alt="contact png"
          className=""
          /> */}
        </div>
        <div
          className=" font-bold text-2xl sm:text-2xl
        md:text-4xl lg:text-4xl flex items-center justify-center "
        >
          Contact Our Team
        </div>
        <p className="mt-10 text-[justify] flex items-center justify-center px-10 sm:px-10 md:px-45 lg:px-55 ">
          We’d love to hear from you! Whether you have questions, feedback, or
          just want to say hello, our team is here to help. Please fill out the
          form below or reach out via email or phone, and we’ll get back to you
          as soon as possible. Your thoughts and inquiries are always welcome.
        </p>

        <div>
          <div className="flex items-center justify-center mt-15 gap-4">
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="name">First Name</Label>
              <Input type="text" id="fname" placeholder="First Name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="name">Last Name</Label>
              <Input type="text" id="lname" placeholder="Last Name" />
            </div>
          </div>
          <div>
            <div className="flex justify-center mt-3 items-center">
              <div className="grid w-full max-w-3xl items-center ">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="mt-3"
                />
              </div>
            </div>
            <div className="felx w-full max-w-3xl gap-6 items-center justify-center mx-auto mt-5">
              <Label htmlFor="name">Message</Label>
              <InputGroup className="mt-3">
                <TextareaAutosize
                  data-slot="input-group-control"
                  className="flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
                  placeholder="Leave your message..."
                />
                <InputGroupAddon align="block-end">
                  <InputGroupButton
                    className="ml-auto"
                    size="sm"
                    variant="default"
                  >
                    Submit
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
