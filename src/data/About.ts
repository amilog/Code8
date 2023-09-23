export const AboutTeam: AboutTeamType = {
  Stuff: [
    {
      id: 1,
      name: "Əli Nəsrullayev",
      position: "Product Owner (Məhsul Sahibi)",
      image: "https://drive.google.com/uc?id=1W1KgAJiMZp1bjFUwS36mWpc87rFz0CkW",
    },
    {
      id: 2,
      name: "Fəridə Qaracayeva",
      position: "Product Manager (Məhsul Meneceri)",
      image: "https://drive.google.com/uc?id=1CRfivNNPGPK0DTXerWWEhAiP7ME9NSip",
    },
    {
      id: 3,
      name: "Çinarə İmanquliyeva",
      position: "Agile Facilitator (Agile Fasilitatoru)",
      image: "https://drive.google.com/uc?id=1GsAZABgwnaf7-1peWSwd62mqgM9NadgA",
    },
    {
      id: 4,
      name: "Arzu Şıxıyeva",
      position: "Business Analyst (Biznes Analitik)",
      image: "https://drive.google.com/uc?id=1FG9dTabLP0j-Lz_y3s5tqtwKMiZrFuXx",
    },
    {
      id: 5,
      name: "Tapdıq Əliyev",
      position: "UX/UI Designer (UX/UI Dizayner)",
      image: "https://drive.google.com/uc?id=1DbSKvlJj6rZUgcFJqDWEy_u0yacnGF2r",
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
      image: "https://drive.google.com/uc?id=13smTk5695d9aYvJRYMS5-CaFMyxvNvPE",
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
