type ActiveProject = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  contributors: number;
  releaseDate: string;
};
type DevelopmentProject = {
  href: string;
  title: string;
  description: string;
  techStack: Array<string>;
  lookingForHelp: boolean;
  projectState: string;
};

export const activeProjects: Array<ActiveProject> = [
  {
    title: "Pegas",
    description: "Encuentra tu próxima pega!",
    href: "https://pegas.osusach.com/",
    imageSrc: "/pegas-ss.webp",
    contributors: 4,
    releaseDate: "26-04-2024",
  },
  {
    title: "Calculadora de notas",
    description: "Planifica tu semestre inteligentemente.",
    href: "https://notas.osusach.com/",
    imageSrc: "/notas-ss.webp",
    contributors: 1,
    releaseDate: "26-04-2024",
  },
  {
    title: "Recursos virtuales para el aprendizaje del lenguaje",
    description:
      "Plataforma creada a petición de un académico de la Facultad de Humanidades.",
    href: "https://www.recursosaprendizajecastellano.usach.cl/",
    imageSrc: "/recursos-ss.webp",
    contributors: 5,
    releaseDate: "26-04-2024",
  },
  {
    title: "Congreso Internacional de Fonética y Poética",
    description:
      "Landing page del congreso, hecho para convocar asistentes y presentadores.",
    href: "https://foneticaypoetica.usach.cl/",
    imageSrc: "/fyp-ss.webp",
    contributors: 4,
    releaseDate: "02-07-2024",
  },
  {
    title: "English Pronunciation",
    description: "Aplicación web creada a petición de una académica de la Universidad de Talca para un FONDECYT sobre pronunciación de la lengua inglesa",
    href: "https://englishpronunciation.cl",
    imageSrc: "/englishpronunciation.webp",
    contributors: 5,
    releaseDate: "01-03-2025"
  }
];

export const developmentProjects: Array<DevelopmentProject> = [
  {
    href: "https://github.com/open-source-usach/cursosusach-honojs-api",
    title: "CursosUSACH",
    description:
      "Mira qué opinan otros estudiantes acerca de ramos de la USACH.",
    techStack: [
      "/typescript.svg",
      "/vue.svg",
      "/hono.svg",
      "/cfworkers.svg",
      "/turso.svg",
    ],
    lookingForHelp: true,
    projectState: "50%",
  },
  {
    href: "https://github.com/osusach/apolo-frontend",
    title: "Apolo",
    description:
      "Herramienta para ayudar a profesores a crear pruebas.",
    techStack: [
      "/svelte.svg",
      "/hono.svg",
      "/cfworkers.svg",
      "/turso.svg",
    ],
    lookingForHelp: true,
    projectState: "10%",
  },
];
