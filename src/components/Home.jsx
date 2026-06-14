import React from "react";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
      {/* Left Text details */}
      <div className="space-y-6">
        <p className="text-sm font-mono text-green-400 tracking-widest uppercase">
          ● Available for work
        </p>
        <h1 className="text-6xl font-extrabold tracking-tight leading-none">
          Frontend <br /> <span className="text-gray-400">Developer</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-md">
          Menciptakan website modern dengan tampilan clean, responsif, dan
          elegan. Mengubah ide dan desain menjadi pengalaman digital yang
          menarik.
        </p>
        <div className="flex gap-3 pt-2">
          {["React.js", "Tailwind CSS", "Vite"].map((tech) => (
            <span
              key={tech}
              className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Right "ID Card / Profile Picture" Area */}
      <div className="flex justify-center md:justify-end">
        <div className="relative w-72 h-96 bg-cardBg border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col justify-between items-center group hover:border-white/30 transition-all">
          <div className="w-full h-4 bg-white/10 rounded-full mb-4 flex items-center justify-center">
            <div className="w-12 h-1 bg-black rounded-full" />
          </div>
          {/* Placeholder for Profile image */}
          <div className="w-full flex-grow bg-neutral-800 rounded-lg overflow-hidden flex items-center justify-center relative">
            <span className="text-sm text-neutral-500 font-mono">
              [ Foto Profil ]
            </span>
          </div>
          <div className="mt-4 text-center">
            <h3 className="font-bold text-lg tracking-wide">Rifqi Muhammad</h3>
            <p className="text-xs text-gray-400 font-mono mt-1">
              ID CARD // FRONTEND DEV
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
