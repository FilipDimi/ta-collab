import ClassCard from "@/components/custom/class-card";
import Sidebar from "@/components/ui/sidebar";
import React from "react";

const page = () => {
  return (
    <>
      <Sidebar />
      <main className="flex-1 container mx-auto py-8 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ClassCard title="CPS181" subtitle="Kelly" tas="3" />
        <ClassCard title="CPS181" subtitle="Kelly" tas="3" />
        <ClassCard title="CPS181" subtitle="Kelly" tas="3" />
        <ClassCard title="CPS181" subtitle="Kelly" tas="3" />
        <ClassCard title="CPS181" subtitle="Kelly" tas="3" />
        <ClassCard title="CPS181" subtitle="Kelly" tas="3" />
        <ClassCard title="CPS181" subtitle="Kelly" tas="3" />
        <ClassCard title="CPS181" subtitle="Kelly" tas="3" />
        <ClassCard title="CPS181" subtitle="Kelly" tas="3" />
      </main>
    </>
  );
};

export default page;
