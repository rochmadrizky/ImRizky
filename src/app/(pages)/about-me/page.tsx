import About from "@/app/components/about/About";
import React from "react";

const page = () => {
  return (
    <main>
      <section className="mt-4 mb-8">
        <div className="flex items-center justify-center">
          <About />
        </div>
      </section>
    </main>
  );
};

export default page;
