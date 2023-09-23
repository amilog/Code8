export const AssignmentData = [
  {
    id: 1,
    name: "UX/UI üzrə tapşırıq",
    description: "This is the first assignment",
  },
  {
    id: 2,
    name: "Front-end üzrə tapşırıq",
    description: "This is the second assignment",
  },
  {
    id: 3,
    name: "Back-end üzrə tapşırıq",
    description: "This is the third assignment",
  },
  {
    id: 4,
    name: "Mobile development üzrə tapşırıq",
    description: "This is the fourth assignment",
  },
  {
    id: 5,
    name: "Data Science üzrə tapşırıq",
    description: "This is the fifth assignment",
  },
  {
    id: 6,
    name: "Cyber Security üzrə tapşırıq",
    description: "This is the sixth assignment",
  },
];

export interface Assignment {
  id: number;
  name: string;
  description: string;
  link?: string;
}
