export interface Project {
  id: string; // Changed to string for UUID
  title: string;
  image: string;
  baseFolder: string; // Added to help manage multiple images
  order: number;
}

export const projects: Project[] = [
  {
    id: "8f7d3b2a-1c4e-4f6d-9e8b-5a7c3d2f1e9a",
    title: "Autos en lugares",
    image: "/photos/Autos Estacionados/DSC01552.jpg",
    baseFolder: "/photos/Autos Estacionados",
    order: 11,
  },
  {
    id: "2e6f4d8c-9b3a-4e7d-8f1c-6b5a4d2e9c8b",
    title: "F1 Monza 2024",
    image: "/photos/F1 Monza 2024/DSC07306.jpg",
    baseFolder: "/photos/F1 Monza 2024",
    order: 8,
  },
  {
    id: "5a9c7b4e-3d2f-4e8b-9c7a-1b5e3d2f9c8a",
    title: "F1 Spa 2024",
    image: "/photos/F1 Spa 2024/DSC06072.jpg",
    baseFolder: "/photos/F1 Spa 2024",
    order: 9,
  },
  {
    id: "1d9e7c4b-5f3a-4d8e-2b7c-9f5e3d2a1b8c",
    title: "Rally Sudamericano Jesus Maria 2025",
    image: "/photos/Rally Sudamericano Jesus Maria 2025/DSC04952.jpg",
    baseFolder: "/photos/Rally Sudamericano Jesus Maria 2025",
    order: 10,
  },
  {
    id: "7c3e9a1b-4d8f-4b2e-8a5c-6d1f3e9b7c4a",
    title: "TN Cordoba 2026",
    image: "/photos/TN Cordoba 2016/tn-2026-109.jpg",
    baseFolder: "/photos/TN Cordoba 2016",
    order: 4,
  },
  {
    id: "a2b4c6d8-e1f3-4a5b-9c7d-8e2f4a6b1c3d",
    title: "F1 Pits Silverstone 2025",
    image: "/photos/F1 Pits Silvertone 2025/DSC03614.jpg",
    baseFolder: "/photos/F1 Pits Silvertone 2025",
    order: 5,
  },
  {
    id: "b3c5d7e9-f2a4-4b6c-8d1e-9f3a5b7c2d4e",
    title: "F1 Silverstone 2025",
    image: "/photos/F1 Silverstone 2025/DSC08053.jpg",
    baseFolder: "/photos/F1 Silverstone 2025",
    order: 1,
  },
  {
    id: "c4d6e8f1-a3b5-4c7d-9e2f-1a4b6c8d3e5f",
    title: "F2 Silverstone 2025",
    image: "/photos/F2 Silverstone 2025/DSC09648.jpg",
    baseFolder: "/photos/F2 Silverstone 2025",
    order: 6,
  },
  {
    id: "d5e7f9a2-b4c6-4d8e-1f3a-2b5c7d9e4f6a",
    title: "Old School F1",
    image: "/photos/Old School F1/DSC09671.jpg",
    baseFolder: "/photos/Old School F1",
    order: 3,
  },
  {
    id: "e6f8a1b3-c5d7-4e9f-2a4b-3c6d8e1f5a7b",
    title: "TC Cordoba 2025",
    image: "/photos/TC Cordoba 2025/DSC07899.jpg",
    baseFolder: "/photos/TC Cordoba 2025",
    order: 7,
  },
  {
    id: "f7a9b2c4-d6e8-4f1a-3b5c-7d9e2f4a6b8c",
    title: "Rally Sudamericano Mina Clavero 2026",
    image: "/photos/Rally Sudamericano Mina Clavero 2026/rally-sudamericano-2026-35.jpg",
    baseFolder: "/photos/Rally Sudamericano Mina Clavero 2026",
    order: 2,
  },
];
