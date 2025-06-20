// "use client";
// import React from 'react';
// import {
//   FaCode,
//   FaJava,
//   FaPhp,
//   FaPython,
//   FaReact,
//   FaServer,
//   FaCloudDownloadAlt,
// } from "react-icons/fa";

// import { courses } from '../data';
// import Link from 'next/link';


// const CourseList = () => {
//   return (
//     <div className="container mx-auto p-6">
//       <div className="text-center mb-10">
//         <h1 className="text-4xl text-amber-500">Welcome to Course Zone</h1>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer ">
//         {courses.map((course) => {
//           return (
//             <div key={course.id} className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-center border-2 border-s-2 border-amber-200"
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.transform = "translateY(-5px)")
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.transform = "translateY(0)")
//               }
//             >
//               <div className="text-4xl text-blue-400 mb-4 flex justify-center" >
//                 {course.icon}
//               </div>
//               <h5 className="text-xl text-white">{course.title}</h5>
//               <button className='btn bg-gray-700 px-10 py-2.5 mt-4 text-amber-300 border-2 border-amber-300 hover:bg-black-200 rounded-lg'>
//                  <Link href={`${course.id}`}>
//                 Explore Course 
//               </Link>
//               </button>
             
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CourseList;


"use client";
import React from "react";
import {
  FaCode,
  FaJava,
  FaPhp,
  FaPython,
  FaReact,
  FaServer,
  FaCloudDownloadAlt,
} from "react-icons/fa";

import { courses } from "../data";
import Link from "next/link";

// Map icon names to actual components
const iconMap = {
  FaCode,
  FaJava,
  FaPhp,
  FaPython,
  FaReact,
  FaServer,
  FaCloudDownloadAlt,
};

const CourseList = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl text-amber-500">Welcome to Course Zone</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => {

          return (
            <div
              key={course.id}
              className="bg-gray-800 p-6 rounded-lg shadow-md text-center border-2 border-amber-300 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl text-blue-400 mb-4 flex justify-center">
                {course.icon}
              </div>
              <h5 className="text-xl text-white font-medium mb-4">
                {course.title}
              </h5>
              <Link
                href={`${course.id}`}
                className="inline-block px-4 py-2 bg-transparent border border-amber-300 text-amber-300 rounded hover:bg-gray-700 hover:text-amber-100 transition-colors"
              >
                Explore Course
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseList;