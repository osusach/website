
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
        "Plataforma creada a petición de un académico de la facultad de humanidades.",
      href: "https://www.recursosaprendizajecastellano.usach.cl/",
      imageSrc: "/recursos-ss.webp",
      contributors: 5,
      releaseDate: "26-04-2024",
    },
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
  ];