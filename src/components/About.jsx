import React from "react";

const About = () => {
  return (
    <div className="w-full space-y-8 py-4">
      <div className="max-w-2xl space-y-4">
        <h2 className="text-sm font-mono uppercase text-gray-400 tracking-widest">
          About Me
        </h2>
        <h1 className="text-4xl font-bold">Rifqi Muhammad Aliya</h1>
        <p className="text-gray-400 leading-relaxed">
          Fresh Graduate dengan passion mendalam di bidang frontend development
          dan UI design. Berfokus pada pembuatan website clean, responsif, dan
          visual yang kuat untuk menghadirkan pengalaman digital yang optimal.
        </p>
        <blockquote className="border-l-2 border-white pl-4 italic text-gray-300 my-6">
          "Turning ideas into clean, modern, and meaningful digital
          experiences."
        </blockquote>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
          <h3 className="text-3xl font-extrabold">3+</h3>
          <p className="text-xs text-gray-400 font-mono mt-1 uppercase">
            Projects Done
          </p>
        </div>
        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
          <h3 className="text-3xl font-extrabold">1</h3>
          <p className="text-xs text-gray-400 font-mono mt-1 uppercase">
            Certificates
          </p>
        </div>
        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
          <h3 className="text-3xl font-extrabold">Fresh</h3>
          <p className="text-xs text-gray-400 font-mono mt-1 uppercase">
            Graduate
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
