export const AboutTeam: AboutTeamType = {
  Stuff: [
    {
      id: 1,
      name: "Əli Nəsrullayev",
      position: "Product Owner (Məhsul Sahibi)",
      image:
        "https://firebasestorage.googleapis.com/v0/b/image-36a5a.appspot.com/o/1.jpg?alt=media&token=5caddf72-c8c1-47b1-a1c6-3430b8dbbe93&_gl=1*ezawq1*_ga*MTIwMTQwNTUzNS4xNjk1OTA5MTg2*_ga_CW55HF8NVT*MTY5NTkzMTE2Ni40LjEuMTY5NTkzMTk1OC42MC4wLjA.",
      linkedIn: "https://www.linkedin.com/in/ali-nasrullayev-b9a05b250/",
    },
    {
      id: 2,
      name: "Fəridə Qaracayeva",
      position: "Data Analyst (Data Analisti)",
      image:
        "https://firebasestorage.googleapis.com/v0/b/image-36a5a.appspot.com/o/2.jpg?alt=media&token=5caddf72-c8c1-47b1-a1c6-3430b8dbbe93&_gl=1*ezawq1*_ga*MTIwMTQwNTUzNS4xNjk1OTA5MTg2*_ga_CW55HF8NVT*MTY5NTkzMTE2Ni40LjEuMTY5NTkzMTk1OC42MC4wLjA.",
      linkedIn: "https://www.linkedin.com/in/farida-garajayeva-08a1001b1/",
    },
    {
      id: 3,
      name: "Çinarə İmanquliyeva",
      position: "Junior Project Specialist (Layihələr üzrə kiçik mütəxəssis)",
      image:
        "https://firebasestorage.googleapis.com/v0/b/image-36a5a.appspot.com/o/3.jpg?alt=media&token=5caddf72-c8c1-47b1-a1c6-3430b8dbbe93&_gl=1*ezawq1*_ga*MTIwMTQwNTUzNS4xNjk1OTA5MTg2*_ga_CW55HF8NVT*MTY5NTkzMTE2Ni40LjEuMTY5NTkzMTk1OC42MC4wLjA.",
      linkedIn: "https://www.linkedin.com/in/chinara-imanguliyeva-a59055252/",
    },
    {
      id: 4,
      name: "Arzu Şıxıyeva",
      position: "Junior Project Specialist (Layihələr üzrə kiçik mütəxəssis)",
      image:
        "https://firebasestorage.googleapis.com/v0/b/image-36a5a.appspot.com/o/4.jpg?alt=media&token=5caddf72-c8c1-47b1-a1c6-3430b8dbbe93&_gl=1*ezawq1*_ga*MTIwMTQwNTUzNS4xNjk1OTA5MTg2*_ga_CW55HF8NVT*MTY5NTkzMTE2Ni40LjEuMTY5NTkzMTk1OC42MC4wLjA.",
      linkedIn: "https://www.linkedin.com/in/arzu-shikhieva-67133917b/",
    },
    {
      id: 5,
      name: "Tapdıq Əliyev",
      position: "UX/UI Designer (UX/UI Dizayner)",
      image:
        "https://firebasestorage.googleapis.com/v0/b/image-36a5a.appspot.com/o/5.jpg?alt=media&token=5caddf72-c8c1-47b1-a1c6-3430b8dbbe93&_gl=1*ezawq1*_ga*MTIwMTQwNTUzNS4xNjk1OTA5MTg2*_ga_CW55HF8NVT*MTY5NTkzMTE2Ni40LjEuMTY5NTkzMTk1OC42MC4wLjA.",
      linkedIn: "https://www.linkedin.com/in/tapdig-aliev/",
    },
  ],
  Students: [
    {
      id: 6,
      name: "İlham Babayev",
      position: "Developer (Proqramçı)",
      image:
        "https://media.licdn.com/dms/image/D4E03AQGyy1Ot_URiyA/profile-displayphoto-shrink_800_800/0/1695921264583?e=1701302400&v=beta&t=OFRNR0BFgisU7UtVEP45QmJTfJMq_u6yH757HtCjk0o",
      linkedIn: "https://www.linkedin.com/in/ilham-babayev-6a4a65205/",
    },
    {
      id: 7,
      name: "Amil Qasımov",
      position: "Developer (Proqramçı)",
      image:
        "https://firebasestorage.googleapis.com/v0/b/image-36a5a.appspot.com/o/650b658032584b6f8e72628e.jpeg?alt=media&token=2f7c16fd-dc5b-4406-8c9e-4e0dfabb4ff6&_gl=1*1ikjx54*_ga*MTIwMTQwNTUzNS4xNjk1OTA5MTg2*_ga_CW55HF8NVT*MTY5NTkzMTE2Ni40LjEuMTY5NTkzMjE0MC42MC4wLjA.",
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
