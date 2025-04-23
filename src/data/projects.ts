export interface Project {
  id: string; // Changed to string for UUID
  title: string;
  image: string;
  baseFolder: string; // Added to help manage multiple images
}

export const projects: Project[] = [
  {
    id: "8f7d3b2a-1c4e-4f6d-9e8b-5a7c3d2f1e9a",
    title: "Parked Cars",
    image: "/photos/Autos Estacionados/DSC01552.jpg",
    baseFolder: "/photos/Autos Estacionados",
  },
  {
    id: "2e6f4d8c-9b3a-4e7d-8f1c-6b5a4d2e9c8b",
    title: "F1 Monza 2024",
    image: "/photos/F1 Monza 2024/DSC06932.jpg",
    baseFolder: "/photos/F1 Monza 2024",
  },
  {
    id: "5a9c7b4e-3d2f-4e8b-9c7a-1b5e3d2f9c8a",
    title: "F1 Spa 2024",
    image: "/photos/F1 Spa 2024/DSC06072.jpg",
    baseFolder: "/photos/F1 Spa 2024",
  },
  {
    id: "1d9e7c4b-5f3a-4d8e-2b7c-9f5e3d2a1b8c",
    title: "Rally Sudamericano Jesus Maria 2025",
    image: "/photos/Rally Sudamericano Jesus Maria 2025/DSC04952.jpg",
    baseFolder: "/photos/Rally Sudamericano Jesus Maria 2025",
  },
];
