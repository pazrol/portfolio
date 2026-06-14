import React from "react";

const Contact = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left: Standard Contact Fields */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Hubungi Saya</h2>
        <p className="text-gray-400 text-sm">
          Feel free to reach out if you want to collaborate, discuss ideas, or
          simply say hello.
        </p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-mono text-gray-400 uppercase mb-2">
              Your Name
            </label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-gray-400 uppercase mb-2">
              Your Email
            </label>
            <input
              type="email"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-gray-400 uppercase mb-2">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none"
            ></textarea>
          </div>
          <button className="bg-white text-black font-semibold w-full py-3 rounded-xl hover:bg-gray-200 transition-colors">
            Send Message
          </button>
        </form>
      </div>

      {/* Right: Guestbook / Comments Simulation */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Comments</h2>
        <p className="text-gray-400 text-sm">
          Leave your thoughts or feedback here.
        </p>
        <div className="bg-cardBg border border-white/10 rounded-2xl p-6 space-y-4">
          <div className="border-b border-white/5 pb-3">
            <span className="text-sm font-bold block">
              Rifqi Muhammad A.{" "}
              <span className="text-xs bg-white/10 text-gray-400 px-2 py-0.5 rounded ml-2">
                Pinned
              </span>
            </span>
            <p className="text-sm text-gray-400 mt-1">
              Terima kasih sudah mampir!
            </p>
          </div>
          <div className="pb-3">
            <span className="text-sm font-bold block text-gray-300">
              Visitor_01
            </span>
            <p className="text-sm text-gray-400 mt-1">
              Website portofolio yang sangat rapi dan estetik!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
