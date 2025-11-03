import React from 'react'

import { Instructors } from "@/components/about/Instructors";
import { Welcome } from "@/components/about/Welcome";

import { Spacer } from "@/components/common/spacer/Spacer";
import { Slider } from "@/components/home/Slider";
import { PageHeader } from '@/components/common/page-header/PageHeader';
export const metadata = {
  title: "About Us",
  description:
    "Learn more about our organization. Our team, our mission, and our vision.",
};

export default async function AboutUsPage() {
  return (
    <>
      <PageHeader title="About Us" />
      <Welcome />
      <Slider />
      <Spacer/>
      <Instructors />
      <Spacer />
    </>
  );
}