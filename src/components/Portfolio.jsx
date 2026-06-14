import React, { useState } from "react";

const Portfolio = () => {
  const [subTab, setSubTab] = useState("projects");

  return (
    <div className="w-full space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Portfolio Showcase
        </h1>
        <p className="text-gray-400 mt-2">
          Explore my journey through projects, certifications, and technical
          expertise.
        </p>
      </div>

      {/* Sub-navigation inside Portfolio */}
      <div className="flex bg-white/5 p-1 rounded-xl max-w-sm border border-white/10">
        {["projects", "certificates", "tech stack"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSubTab(tab)}
            className={`flex-1 text-center py-2 text-sm font-medium rounded-lg transition-all capitalize ${
              subTab === tab
                ? "bg-white text-black font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Conditional Sub-tab Content */}
      <div className="pt-4">
        {subTab === "projects" && (
          <div className="bg-cardBg border border-white/10 rounded-2xl p-6 max-w-md hover:border-white/20 transition-all">
            <span className="text-xs font-mono text-gray-500 uppercase">
              Featured Project
            </span>
            <h3 className="text-xl font-bold mt-1">
              Project Portofolio Website
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Kumpulan dokumentasi, karya, dan pencapaian terbaik yang disusun
              secara sistematis untuk menunjukkan kapabilitas frontend
              development.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="bg-white/5 text-xs font-mono px-2 py-1 rounded border border-white/5 text-gray-300">
                NextJS
              </span>
              <span className="bg-white/5 text-xs font-mono px-2 py-1 rounded border border-white/5 text-gray-300">
                Tailwind
              </span>
            </div>
          </div>
        )}

        {subTab === "certificates" && (
          <div className="bg-cardBg border border-white/10 rounded-2xl p-6 max-w-md text-center">
            <div className="w-full h-48 bg-neutral-800 rounded-xl mb-4 flex items-center justify-center text-gray-500 font-mono">
              [ Preview Sertifikat PKL ]
            </div>
            <h3 className="font-bold text-lg">
              Sertifikat PKL Catra Global Yaksa
            </h3>
            <p className="text-xs text-gray-400 mt-1">Issued: Oct 2023</p>
          </div>
        )}

        {subTab === "tech stack" && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "React.js",
              "TypeScript",
              "Tailwind CSS",
              "HTML5",
              "CSS3",
              "Laravel",
              "NextJS",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-cardBg border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center text-center hover:border-white/20 transition-all"
              >
                <div className="w-8 h-8 bg-white/10 rounded mb-2" />
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
