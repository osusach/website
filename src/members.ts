
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
];