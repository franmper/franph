import * as React from "react";
import { X } from "lucide-react";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setVisible(true));
    }
  }, [isOpen]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        visible ? "bg-black/80 backdrop-blur-sm" : "bg-black/0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative max-w-lg w-full rounded-none overflow-hidden shadow-2xl transition-all duration-500 ${
          visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gradient bar with VCARB colors */}
        <div className="h-2 bg-gradient-to-r from-[#1e3a5f] via-[#1334CB] to-[#1e3a5f]" />

        <div className="bg-[#1a1d33] p-8 flex flex-col items-center text-center gap-6">
          <img
            src="/vcarb-logo.png"
            alt="Visa Cash App RB"
            className="h-20 object-contain"
          />

          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-white">
              Hey, Visa Cash App RB!
            </h2>
            <div className="w-12 h-0.5 bg-[#1334CB] mx-auto rounded-none" />
          </div>

          <p className="text-lg text-gray-200 leading-relaxed">
            My name is <span className="text-white font-bold">Fran</span>, a photographer from
            Córdoba, Argentina. Ever since I first watched F1 as a child, I dreamed of being
            there — at a race, in the stands, in the pits. I love it.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed">
            I've been lucky enough to experience Interlagos, Spa, Monza, Zandvoort, and
            Silverstone. Being there is something else — hearing the engines, the crowd, the
            anticipation before a race, the start. It's amazing.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed">
            I submitted this form because it would be an incredible opportunity to photograph
            the team and the world of F1 up close through the{" "}
            <span className="text-white font-bold">VCARB Creator Platform</span>.
          </p>

          <p className="text-white text-xl font-bold italic">
            Thanks for looking at my photos — hope to be at an F1 race taking pictures soon!
          </p>

          <button
            onClick={handleClose}
            className="mt-2 px-8 py-3 bg-gradient-to-r from-[#1e3a5f] to-[#1334CB] text-white font-bold rounded-none hover:opacity-90 transition-opacity cursor-pointer text-lg"
          >
            See My Work
          </button>
        </div>

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
