"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import trial from "@/public/globe.svg";

const ProjectsPage = () => {
  return (
    <div className="flex items-center justify-center mx-auto">
      <div className="grid grid-cols-4 gap-3 items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Project Name</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={trial} alt="trial" width={300} height={300} />
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            View Projects
          </Button>
          <p className=" font-sans flex items-center justify-center ">
            Discover how this project helped transform ideas into real business
            solutions with modern design and technology.
          </p>
        </CardFooter>
      </Card>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Project Name</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={trial} alt="trial" width={300} height={300} />
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            View Projects
          </Button>
          <p className=" font-sans flex items-center justify-center ">
            Discover how this project helped transform ideas into real business
            solutions with modern design and technology.
          </p>
        </CardFooter>
      </Card>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Project Name</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={trial} alt="trial" width={300} height={300} />
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            View Projects
          </Button>
          <p className=" font-sans flex items-center justify-center ">
            Discover how this project helped transform ideas into real business
            solutions with modern design and technology.
          </p>
        </CardFooter>
      </Card>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Project Name</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={trial} alt="trial" width={300} height={300} />
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            View Projects
          </Button>
          <p className=" font-sans flex items-center justify-center ">
            Discover how this project helped transform ideas into real business
            solutions with modern design and technology.
          </p>
        </CardFooter>
      </Card>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Project Name</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={trial} alt="trial" width={300} height={300} />
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            View Projects
          </Button>
          <p className=" font-sans flex items-center justify-center ">
            Discover how this project helped transform ideas into real business
            solutions with modern design and technology.
          </p>
        </CardFooter>
      </Card>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Project Name</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={trial} alt="trial" width={300} height={300} />
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            View Projects
          </Button>
          <p className=" font-sans flex items-center justify-center ">
            Discover how this project helped transform ideas into real business
            solutions with modern design and technology.
          </p>
        </CardFooter>
      </Card>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Project Name</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={trial} alt="trial" width={300} height={300} />
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            View Projects
          </Button>
          <p className=" font-sans flex items-center justify-center ">
            Discover how this project helped transform ideas into real business
            solutions with modern design and technology.
          </p>
        </CardFooter>
      </Card>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Project Name</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={trial} alt="trial" width={300} height={300} />
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            View Projects
          </Button>
          <p className=" font-sans flex items-center justify-center ">
            Discover how this project helped transform ideas into real business
            solutions with modern design and technology.
          </p>
        </CardFooter>
      </Card>
      </div>
    </div>
  );
};

export default ProjectsPage;
