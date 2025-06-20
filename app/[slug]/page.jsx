"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaClock, FaLayerGroup, FaArrowLeft } from "react-icons/fa";
import { courseDetails } from "../data";

const Page = ({ params }) => {
  const router = useRouter();
  const { slug } = React.use(params);
  const course = courseDetails.find(course=>course.title.toLowerCase().includes(slug.toLowerCase()))

  if (!course) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
        <h1 className="text-2xl">Course Not Found</h1>
        <button
          onClick={() => router.back()}
          className="ml-4 px-4 py-2 bg-amber-500 text-gray-900 rounded hover:bg-amber-400"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex justify-center items-center p-6"
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
      }}
    >
      <div
        className="w-full max-w-2xl p-8 rounded-xl backdrop-blur-sm shadow-lg"
        style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
      >
        <h1 className="text-3xl font-bold text-amber-400 mb-4 text-center">{course.title}</h1>

        <div className="flex justify-center gap-4 mb-6">
          <span className="inline-flex items-center gap-1 bg-blue-900/50 px-3 py-1 rounded-md text-white">
            <FaClock /> {course.duration}
          </span>
          <span className="inline-flex items-center gap-1 bg-green-900/50 px-3 py-1 rounded-md text-white">
            <FaLayerGroup /> {course.level}
          </span>
        </div>

        <h3 className="text-xl text-gray-200 mb-3">Projects You Can Build:</h3>

        <ul className="space-y-2">
          {course.projects.map((project) => (
            <li
              key={project.id}
              className="bg-gray-800/50 px-4 py-3 rounded-md text-gray-100 hover:bg-gray-700/60 transition-colors cursor-pointer"
            >
              {project.title}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button
            onClick={() => router.back()}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-amber-500 text-gray-900 rounded-md hover:bg-amber-400 transition-colors"
          >
            <FaArrowLeft />
            Back To Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;