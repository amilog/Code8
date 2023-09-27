export const AboutTeam: AboutTeamType = {
  Stuff: [
    {
      id: 1,
      name: "Əli Nəsrullayev",
      position: "Product Owner (Məhsul Sahibi)",
      image: "https://drive.google.com/uc?id=1W1KgAJiMZp1bjFUwS36mWpc87rFz0CkW",
      linkedIn: "https://www.linkedin.com/in/ali-nasrullayev-b9a05b250/",
    },
    {
      id: 2,
      name: "Fəridə Qaracayeva",
      position: "Product Manager (Məhsul Meneceri)",
      image: "https://drive.google.com/uc?id=1CRfivNNPGPK0DTXerWWEhAiP7ME9NSip",
      linkedIn: "https://www.linkedin.com/in/farida-garajayeva-08a1001b1/",
    },
    {
      id: 3,
      name: "Çinarə İmanquliyeva",
      position: "Agile Facilitator (Agile Fasilitatoru)",
      image: "https://drive.google.com/uc?id=1GsAZABgwnaf7-1peWSwd62mqgM9NadgA",
      linkedIn: "https://www.linkedin.com/in/chinara-imanguliyeva-a59055252/",
    },
    {
      id: 4,
      name: "Arzu Şıxıyeva",
      position: "Business Analyst (Biznes Analitik)",
      image: "https://drive.google.com/uc?id=1FG9dTabLP0j-Lz_y3s5tqtwKMiZrFuXx",
      linkedIn: "https://www.linkedin.com/in/arzu-shikhieva-67133917b/",
    },
    {
      id: 5,
      name: "Tapdıq Əliyev",
      position: "UX/UI Designer (UX/UI Dizayner)",
      image: "https://drive.google.com/uc?id=1DbSKvlJj6rZUgcFJqDWEy_u0yacnGF2r",
      linkedIn: "https://www.linkedin.com/in/tapdig-aliev/",
    },
  ],
  Students: [
    {
      id: 6,
      name: "İlham Babayev",
      position: "Developer (Proqramçı)",
      image: "https://avatars.githubusercontent.com/u/44080404?v=4",
      linkedIn: "https://www.linkedin.com/in/ilham-babayev-6a4a65205/",
    },
    {
      id: 7,
      name: "Amil Qasımov",
      position: "Developer (Proqramçı)",
      image: "https://drive.google.com/uc?id=13smTk5695d9aYvJRYMS5-CaFMyxvNvPE",
      linkedIn: "https://www.linkedin.com/in/amil-gasimov-18a3b4243/",
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
  linkedIn: string;
}
