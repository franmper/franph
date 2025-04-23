import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{ path: string; name: string }>;
  currentImageIndex: number;
  onNavigate: (index: number) => void;
  projectTitle: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  images,
  currentImageIndex,
  onNavigate,
  projectTitle,
}: ImageModalProps) {
  const currentImage = images[currentImageIndex];
  const hasNext = currentImageIndex < images.length - 1;
  const hasPrev = currentImageIndex > 0;

  const handleKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "ArrowRight" && hasNext) {
        onNavigate(currentImageIndex + 1);
      }
      if (e.key === "ArrowLeft" && hasPrev) {
        onNavigate(currentImageIndex - 1);
      }
    },
    [currentImageIndex, hasNext, hasPrev, onClose, onNavigate]
  );

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentImageIndex, handleKeyDown]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        {hasPrev && (
          <button
            onClick={() => onNavigate(currentImageIndex - 1)}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        )}

        <img
          src={currentImage.path}
          alt={`${projectTitle} - ${currentImage.name}`}
          className="max-h-[90vh] max-w-[90vw] object-contain"
        />

        {hasNext && (
          <button
            onClick={() => onNavigate(currentImageIndex + 1)}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        )}
      </div>
    </div>
  );
}
