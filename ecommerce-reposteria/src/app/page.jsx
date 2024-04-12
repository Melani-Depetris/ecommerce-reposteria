"use client";
import React from "react";
import Slide from "../components/landing/slide";
import CategoriesLanding from "../components/landing/categories-landing";

const page = () => {
  return (
    <div>
      <Slide className="relative z-1"/>
      <CategoriesLanding className="absolute z-100"/>
    </div>
  );
};

export default page;
