type Role = "Development" | "Design" | "Product" | string;

type Member = {
  name: string;
  link: string;
  roles: Array<Role>;
};

export const founders: Member[] = [
  {
    name: "René Cáceres",
    roles: ["Development"],
    link: "https://github.com/panquequelol",
  },
  {
    name: "Ignacio Lara",
    roles: ["Development"],
    link: "https://github.com/kappita",
  },
  {
    name: "Joaquín Saldivia",
    roles: ["Development"],
    link: "https://github.com/Klefur",
  },
  {
    name: "Lucas Mesías",
    roles: ["Full-Stack", "Product"],
    link: "https://github.com/Skyrdow",
  },
];

export const members: Member[] = [
  {
    name: "Nicolás Aguilera",
    roles: ["Front-End", "Design"],
    link: "https://github.com/don-uldaricio",
  },
  {
    name: "Valentina Campos",
    roles: ["Front-End"],
    link: "https://github.com/valenpy22",
  },
  {
    name: "Marcelo Guzmán",
    roles: ["Front-End"],
    link: "https://github.com/mguzm4n",
  },
  {
    name: "Benjamín Canales",
    roles: ["Development"],
    link: "https://github.com/benjaminCanalesC",
  },
];
