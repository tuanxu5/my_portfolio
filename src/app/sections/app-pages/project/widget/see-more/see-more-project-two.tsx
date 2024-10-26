"use client";

import { ListTechStack } from "../list-tech-stack";

export const SeeMoreProjectTwo = () => {
  return (
    <div>
      <div className="font-semibold text-[24px] mt-10">
        <span>
          🤝 Team size: 15 personal (2 frontend, 6 backend, 2️ tester, 3️ business analyst, 1️ product owner, 1️ leader)
        </span>
      </div>
      <div className="w-fit mt-5 text-[16px]">
        <div>👉 Link Repository: Confidential and cannot be disclosed 🙅</div>
        <div>👉 Link Preview: Confidential and cannot be disclosed 🙅</div>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Description ✍️</span>
        <p className="mt-3 font-medium">
          Lorem ipsum dolor sit amen, consectetur advising edit. Pharsalus finials, purus vel facilities aliquant,
          libero erat phaedra just, at premium libero lacks a edit. Vivas Lucius felid non libero gravid, eger edit
          vulgate.
        </p>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Tech Stack</span>
        <ListTechStack techStack={["ReactJs", "Antd", "Sass", "GraphQL", "Apollo", "Nx"]} />
      </div>
    </div>
  );
};
