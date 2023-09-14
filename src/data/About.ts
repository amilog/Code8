export const AboutTeam: AboutTeamType = {
  Stuff: [
    {
      id: 1,
      name: "Əli Nəsrullayev",
      position: "Product Owner (Məhsul Sahibi)",
      image: "https://avatars.githubusercontent.com/u/44080404?v=4",
    },
    {
      id: 2,
      name: "Fərid Qaracayeva",
      position: "Product Manager (Məhsul Meneceri)",
      image: "https://avatars.githubusercontent.com/u/44080404?v=4",
    },
    {
      id: 3,
      name: "Çinarə İmanquliyeva",
      position: "Agile Facilitator (Agile Fasilitatoru)",
      image: "https://avatars.githubusercontent.com/u/44080404?v=4",
    },
    {
      id: 4,
      name: "Arzu Şıxıyeva",
      position: "Business Analyst (Biznes Analitik)",
      image: "https://avatars.githubusercontent.com/u/44080404?v=4",
    },
    {
      id: 5,
      name: "Tapdıq Əliyev",
      position: "UX/UI Designer (UX/UI Dizayner)",
      image: "https://avatars.githubusercontent.com/u/44080404?v=4",
    },
  ],
  Students: [
    {
      id: 6,
      name: "İlham Babayev",
      position: "Developer (Proqramçı)",
      image: "https://avatars.githubusercontent.com/u/44080404?v=4",
    },
    {
      id: 7,
      name: "Amil Qasımov",
      position: "Developer (Proqramçı)",
      image: "https://avatars.githubusercontent.com/u/44080404?v=4",
    },
  ],
};

export interface AboutTeamType {
  Stuff: MemberType[];
  Students: MemberType[];
}

export interface MemberType {
  id: number;
  name: string;
  position: string;
  image: string;
}
