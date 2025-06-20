"use client";
import CourseList from "./components/CourseList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="text-center pt-10">
        <CourseList />
      </div>
    </main>
  );
}