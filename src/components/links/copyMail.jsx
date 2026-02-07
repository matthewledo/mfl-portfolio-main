import React, { useState } from "react";
import { HiCheck, HiOutlineClipboardCopy } from "react-icons/hi";

export default function EmailCopy() {
  const [copied, setCopied] = useState(false);
  const email = "matthewf.ledo@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex flex-col items-center sm:flex-row gap-4">
      {/* Email Display */}
      <span className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
        {email}
      </span>

      {/* Copy Button */}
      <button
        onClick={copyToClipboard}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 border ${
          copied 
          ? "bg-emerald-500 border-emerald-500 text-white shadow-emerald-200 shadow-lg" 
          : "bg-white border-slate-200 text-slate-600 hover:border-emerald-500 hover:text-emerald-600 hover:shadow-md"
        }`}
      >
        {copied ? (
          <>
            <HiCheck className="text-lg" />
            Copied!
          </>
        ) : (
          <>
            <HiOutlineClipboardCopy className="text-lg" />
            Copy Email
          </>
        )}
      </button>
    </div>
  );
}