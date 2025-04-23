import * as React from "react";
import { useRoute } from "wouter";
import { projects } from "../data/projects";
import ImageModal from "../components/ImageModal";

interface ImageFile {
  name: string;
  path: string;
}

export default function Project() {
  const [, params] = useRoute("/project/:id");
  const [images, setImages] = React.useState<ImageFile[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number | null>(null);
  const project = projects.find((p) => p.id === params?.id);

  React.useEffect(() => {
    const loadImages = async () => {
      try {
        if (project) {
          // Extract the folder name from the base folder path
          const folderName = project.baseFolder.split("/").pop();

          // Import all images from the public folder using Vite's import.meta.glob
          const imageFiles = import.meta.glob("/public/photos/**/*.{jpg,jpeg,png,gif,webp}", {
            eager: true,
            as: "url",
          });

          // Filter and map the images that belong to the current project
          const projectImages = Object.entries(imageFiles)
            .filter(([path]) => path.includes(`/photos/${folderName}/`))
            .map(([path]) => {
              const name = path.split("/").pop() || "";
              return {
                name,
                path: path.replace("/public", ""), // Remove the /public prefix
              };
            });

          setImages(projectImages);
        }
      } catch (error) {
        console.error("Error loading images:", error);
        // Fallback to at least show the cover image
        if (project) {
          setImages([
            {
              name: project.image.split("/").pop() || "",
              path: project.image,
            },
          ]);
        }
      }
    };

    loadImages();
  }, [project]);

  if (!project) {
    return <div className="p-4">Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-light">{project.title}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={image.path}
            className="aspect-square overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedImageIndex(index)}
          >
            <img
              src={image.path}
              alt={`${project.title} - ${image.name}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading={index > 8 ? "lazy" : "eager"} // Lazy load images beyond the first 9
            />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <ImageModal
          isOpen={selectedImageIndex !== null}
          onClose={() => {
            console.log("onClose");
            setSelectedImageIndex(null);
          }}
          images={images}
          currentImageIndex={selectedImageIndex}
          onNavigate={setSelectedImageIndex}
          projectTitle={project.title}
        />
      )}
    </div>
  );
}
