import {
  pender,
  pender2,
  dnd,
  dnd2,
  WimHofTimer,
  TankGame,
  duloops,
  duloops2,
  duloops3,
  duloops4,
  AudioMorpher,
} from "../resources/images/portfolio";

const tech = {
  React: { name: "React.js", color: "red" },
  graphql: { name: "GraphQL", color: "blue" },
  Strapi: { name: "Strapi", color: "orange" },
  Next: { name: "Next.js", color: "cyan" },
  Vue: { name: "Vue.js", color: "purple" },
  C: { name: "C", color: "orange" },
  Cpp: { name: "C++", color: "orange" },
  CSharp: { name: "C#", color: "orange" },
  Net: { name: " .NET", color: "teal" },
  WPF: { name: "WPF", color: "teal" },
  directX: { name: "DirectX", color: "purple" },
};

const projectData = [
  {
    title: "Blog",
    background: `-webkit-linear-gradient(45deg, green, #DAF1DE)`,
    desc: "DuJin's personal blog",
    tech: [tech.Next, tech.Strapi, tech.graphql],
    image: duloops3,
    images: [duloops4, duloops3, duloops, duloops2],
    detail:
      "DuLoops.com is my blog and photo gallery website. It is developed in React.js and uses Chakra UI for styling.",
    link: "https://duloops.com/",
  },
  {
    title: "Wim Hof Timer",
    background: `-webkit-linear-gradient(45deg, blue, #DAF1DE)`,
    desc: "Wim Hof Breathing Method Timer",
    tech: [tech.React],
    images: [WimHofTimer],
    detail:
      "Wim Hof Timer is a timer app for Wim Hof Breathing Method. It is a simple and intuitive timer app that helps you to keep track of your breathing.",
    link: "https://duloops.com/timer/wim-hof-timer",
  },
  {
    title: "Website Redesign",
    background: `-webkit-linear-gradient(left, purple, #DAF1DE, purple)`,

    desc: "Pender Harbour Tourism Website",
    tech: [tech.Vue],
    image: pender,
    images: [pender, pender2],
    detail:
      "The website provides information and guide for the tourists vising the islands in Sunshine Coast. The newly designed & developed website is responsive and intuitive. ",
    link: "https://penderharbourdemo.web.app/",
    git: "https://github.com/DuLoops/PenderHarbourSpirit",
  },
  {
    title: "Audio & Image Editor",
    background: `-webkit-linear-gradient(#ED4F05 , #EDB25A)`,

    desc: "Audio and Image Editor",
    tech: [tech.CSharp, tech.Net, tech.WPF],
    image: AudioMorpher,
    images: [AudioMorpher],
    detail:
      "Audio and Image editor utilizing various digital processing techniques.",
    link: "Utilize Fourier Transformation, JPEG Compression, and image morphing.",
    git: "https://github.com/DuLoops/Audio-Image_editor",
  },
  {
    title: "Tank Game",
    background: `-webkit-linear-gradient(45deg, #D93128, #EDB25A)`,

    desc: "1 VS 1 Tank Game",
    tech: [tech.Cpp, tech.directX],
    image: TankGame,
    images: [TankGame],
    detail:
      "Tank Game is a 1 VS 1 tank game. The game is developed in C++ and uses OpenGL library for graphics. Developed in a team of 8 people.",
    git: "https://github.com/DuLoops/GameEngineUI",
  },
  {
    title: "Oculus Party Viewer",
    background: `-webkit-linear-gradient(45deg, #DAF1DE, #83A7AF)`,

    desc: "D&D game analytics app",
    tech: [tech.CSharp, tech.Net, tech.WPF],
    image: dnd,
    images: [dnd, dnd2],
    detail:
      "Oculus Party Viewer for Dungeons and Dragons games helps to keep track of the game and generates boss statistics.",
    git: "https://github.com/DuLoops/Oculus-Party-Viewer",
  },
];

export { projectData };

// import {
//   pender,
//   pender2,
//   dnd,
//   dnd2,
//   WimHofTimer,
//   WimHofTimer2,
//   TankGame,
//   duloops,
//   duloops2,
//   duloops3,
//   AudioMorpher,
// } from "../resources/images/portfolio";

// const tech = {
//   React: { name: "React.js", color: "red" },
//   graphql: { name: "GraphQL", color: "blue" },
//   Strapi: { name: "Strapi", color: "orange" },
//   Next: { name: "Next.js", color: "cyan" },
//   Vue: { name: "Vue.js", color: "purple" },
//   C: { name: "C", color: "orange" },
//   Cpp: { name: "C++", color: "orange" },
//   CSharp: { name: "C#", color: "orange" },
//   Net: { name: " .NET", color: "teal" },
//   WPF: { name: "WPF", color: "teal" },
//   directX: { name: "DirectX", color: "purple" },
// };

// const projectData = [
//   {
//     title: "Blog",
//     background: `-webkit-linear-gradient(45deg, green, #DAF1DE)`,
//     desc: "DuJin's personal blog",
//     tech: [tech.Next, tech.Strapi, tech.graphql],
//     images: ["duloops.jpg", "duloops2.jpg", "duloops3.jpg"],
//     detail:
//       "DuLoops.com is my personal blog. It is developed in React.js with Next.js with Headless CMS (Strapi) with GraphQL as backend.",
//     link: "https://duloops.com/",
//   },
//   {
//     title: "Wim Hof Timer",
//     background: `-webkit-linear-gradient(45deg, blue, #DAF1DE)`,
//     desc: "Timer app for Wim Hof Breathing Method",
//     tech: [tech.React],
//     images: ["WimHofTimer.jpg"],
//     detail:
//       "Wim Hof Timer is a timer app for Wim Hof Breathing Method. It is a simple and intuitive timer app that helps you to keep track of your breathing.",
//     link: "https://duloops.com/timer/wim-hof-timer",
//   },
//   {
//     title: "Website Redesign",
//     background: `-webkit-linear-gradient(left, purple, #DAF1DE, purple)`,

//     desc: "Pender Harbour Tourism Website Redesign",
//     tech: [tech.Vue],
//     images: ["pender.png", "pender2.jpg"],
//     detail:
//       "The website provides information and guide for the tourists vising the islands in Sunshine Coast. The newly designed & developed website is responsive and intuitive. ",
//     link: "https://penderharbourdemo.web.app/",
//     git: "https://github.com/DuLoops/PenderHarbourSpirit",
//   },
//   {
//     title: "Audio & Image Editor",
//     background: `-webkit-linear-gradient(#ED4F05 , #EDB25A)`,

//     desc: "Audio and Image editor utilizing various digital processing techniques.",
//     tech: [tech.CSharp, tech.Net, tech.WPF],
//     images: ["AudioMorpher.jpg"],
//     detail:
//       "Audio and Image editor utilizing various digital processing techniques.",
//     link: "Utilize Fourier Transformation, JPEG Compression, and image morphing.",
//     git: "https://github.com/DuLoops/Audio-Image_editor",
//   },
//   {
//     title: "Tank Game",
//     background: `-webkit-linear-gradient(45deg, #D93128, #EDB25A)`,

//     desc: "1 VS 1 Tank Game",
//     tech: [tech.Cpp, tech.directX],
//     images: ["TankGame.png"],
//     detail:
//       "Tank Game is a 1 VS 1 tank game. The game is developed in C++ and uses OpenGL library for graphics. Developed in a team of 8 people.",
//     git: "https://github.com/DuLoops/GameEngineUI",
//   },
//   {
//     title: "Oculus Party Viewer",
//     background: `-webkit-linear-gradient(45deg, #DAF1DE, #83A7AF)`,

//     desc: "D&D game analytics",
//     tech: [tech.CSharp, tech.Net, tech.WPF],
//     image: dnd,
//     images: ["dnd.jpg", "dnd2.jpg"],
//     detail:
//       "Oculus Party Viewer for Dungeons and Dragons games helps to keep track of the game and generates boss statistics.",
//     git: "https://github.com/DuLoops/Oculus-Party-Viewer",
//   },
// ];

// export { projectData };
