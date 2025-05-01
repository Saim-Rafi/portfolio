
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Powered- Neura",
    description: "Created an AI-enhanced Notion clone allowing multiple users to collaboratively edit and manage documents effortlessly.",
    image: "/imgs/p4.png",
    tags: ["NextJs", "Cloudfare", "Firebase", "LiveBlocks", "Clerk", "Yjs"],
    links: {
      github: "https://github.com/Saim-Rafi/Neura",
      live: "",
    },
  },
  {
    id: 2,
    title: "The Chattr Box",
    description: "A sleek, real-time chat application built with the MERN stack and powered by Socket.io. Chat instantly, securely, and in style",
    image: "/imgs/p1.png",
    tags: ["Socket.io", "ReactJs", "ExpressJs", "MongoDB", "JSON Web Tokens", "BcryptJS"],
    links: {
      github: "https://github.com/Saim-Rafi/MernChat",
      live: "https://chattr-box.vercel.app",
    },
  },
  {
    id: 3,
    title: "SpendWise",
    description: "SpendWise is a web-based application designed to help users track and manage their daily expenses. Offers a scalable, responsive, and user-friendly experience ",
    image: "/imgs/p2.png",
    tags: ["React", "Redux", "ExpressJs", "MongoDB", "Material Icons","tsparticles"],
    links: {
      github: "https://github.com/Saim-Rafi/SpendWise",
      live: "https://spend-wise-ao1m.vercel.app/"
    },
  },
  {
    id: 4,
    title: "SyntaxInk",
    description: "A powerful, user-friendly online code IDE built for modern developers. It provides an intuitive environment to write, edit, and debug code directly in the browser",
    image: "/imgs/p3.png",
    tags: ["React", "ExpressJs", "Monaco Editor", "JSON Web Tokens", "BcryptJS"],
    links: {
      github: "https://github.com/Saim-Rafi/SyntaxInk",
      live: "",
    },
  },
];
