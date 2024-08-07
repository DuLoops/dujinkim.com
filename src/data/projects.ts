import portfolioImages from '@/../public/images/portfolio'

export const tech = {
    React: { name: "React.js", color: "red", bg: "bg-red-200" },
    graphql: { name: "GraphQL", color: "blue", bg: "bg-blue-200" },
    Strapi: { name: "Strapi", color: "orange" , bg: "bg-orange-200"},
    Next: { name: "Next.js", color: "cyan" , bg: "bg-cyan-200"},
    Vue: { name: "Vue.js", color: "purple" , bg: "bg-purple-200"},
    C: { name: "C", color: "orange" , bg: "bg-orange-200"},
    Cpp: { name: "C++", color: "orange" , bg: "bg-orange-200"},
    CSharp: { name: "C#", color: "orange" , bg: "bg-orange-200"},
    Net: { name: " .NET", color: "teal" , bg: "bg-teal-200"},
    WPF: { name: "WPF", color: "teal" , bg: "bg-teal-200"},
    directX: { name: "DirectX", color: "purple" , bg: "bg-purple-200"}
};


export const projectData = [
    // {
    //   title: "Blog",
    //   background: `-webkit-linear-gradient(45deg, green, #DAF1DE)`,
    //   desc: "DuJin's personal blog",
    //   tech: [tech.Next, tech.Strapi, tech.graphql],
    //   images: [portduloops4, duloops3, duloops, duloops2],
    //   detail: `# About\nDuloops.com is a personal blog developed by Dujin to improve and document his knowledge, skills, and passions. The blog features topics ranging from software development to rock climbing and photography.\n# Development Process\nThe website was originally developed using React and Firebase, but Dujin later migrated it to __Next.js, Headless CMS  (Strapi), and GraphQL__ to practice full-stack development. The project involved setting up a responsive and intuitive user interface, developing the backend for the CMS, and integrating GraphQL for efficient data querying.
    //     `,
    //   link: "https://duloops.com/",
    // },
    {   id: 'PenderHarboutTourism',
        title: "Tourism Website",
        background: `-webkit-linear-gradient(left, purple, #DAF1DE, purple)`,

        desc: "Pender Harbour Tourism Website",
        tech: [tech.Vue],
        images: [portfolioImages.pender, portfolioImages.pender2],
        detail: `# About\nThe Pender Harbour Tourism Website is a responsive and intuitive guide for tourists visiting the Pender Harbour island in the Sunshine Coast. The website provides information on local attractions, accommodations, and events to help visitors plan their trip.\n# Development Process\nThe project was developed in a team of three over with clients from the Pender Harbour Tourism Community. It is developed in Vue.js. The team worked on designing and developing the user interface and backend database, implementing responsive design elements, and integrating Firebase for efficient data storage and retrieval.
        `,
        link: "https://penderharbourdemo.web.app/",
        git: "https://github.com/DuLoops/PenderHarbourSpirit",
    },
    {
        id: 'AudioMorpher',
        title: "Audio & Image Editor",
        background: `-webkit-linear-gradient(#ED4F05 , #EDB25A)`,

        desc: "Audio and Image manipulation software",
        tech: [tech.CSharp, tech.Net, tech.WPF],
        images: [portfolioImages.AudioMorpher],
        detail: `The Audio & Image Editor is a software application that utilizes various digital processing techniques such as Muti Threading, Fourier Transformation, JPEG Compression, and image morphing. The program allows users to manipulate audio and image files to achieve desired effects.\n# Development Process\nThe project was developed in C# using the Windows Presentation Foundation (WPF) framework. I worked on integrating digital processing algorithms, developing the user interface, and implementing file I/O functionality for loading and saving files.`,
        git: "https://github.com/DuLoops/Audio-Image_editor",
    },
    {
        id: 'TankGame',
        title: "Tank Game",
        background: `-webkit-linear-gradient(45deg, #D93128, #EDB25A)`,

        desc: "1 VS 1 Tank Game",
        tech: [tech.Cpp, tech.directX],
        images: [portfolioImages.TankGame],
        detail: `The 1 VS 1 Tank Game is a multiplayer game where two players control tanks and compete against each other in a battle arena.  Players can drive their tank through obstacles and shoot at each other.\n# Development Process\nThe project was developed in a team of eight using C++, C#, WPF, and OpenCL. Each team member had a specific role, and the game was developed iteratively over 3 months.\n### Technologies Used\n- C++: Used to develop the game's core functionality and game engine.\n- C#: Used to develop the game's user interface (UI) and user experience (UX) using WPF.\n- OpenCL: Used to enhance the game's graphic performance by optimizing CPU and GPU usage.\n- WPF: Used to create the game's UI, including menus, buttons, and other graphical elements.\n\n### My role\n- Designed and developed game UI/UX with C#, .NET / WPF.\n- Developed Spatial Audio DLL with C++.`,
        git: "https://github.com/DuLoops/GameEngineUI",
    },
    {
        id: 'WimHofTimer',
        title: "Wim Hof Timer",
        background: `-webkit-linear-gradient(45deg, blue, #DAF1DE)`,
        desc: "Wim Hof Breathing Method Timer",
        tech: [tech.React],
        images: [portfolioImages.WimHofTimer2, portfolioImages.WimHofTimer],
        detail: `The Wim Hof Timer App is a simple and intuitive timer designed for the _Wim Hof Breathing Method_. The app helps users keep track of their breathing and holding time during the exercise and features an audio alarm to indicate the start of each phase.\n# Development Process\nThe app was developed in React. It integrates framer-motion for the visual effects and webpack for sound.`,
        link: "https://duloops.com/timer/wim-hof-timer",
    },
    {
        id: 'OculusPartyViewer',
        title: "Oculus Party Viewer",
        background: `-webkit-linear-gradient(45deg, #DAF1DE, #83A7AF)`,

        desc: "D&D game analytics app",
        tech: [tech.CSharp, tech.Net, tech.WPF],
        images: [portfolioImages.dnd, portfolioImages.dnd2],
        detail: `The Oculus Party Viewer is a D&D game analytics app that allows players to view and record team stats during an Oculus party. The app also features a boss fight mode where the boss's health and abilities are calculated based on the current player's stats\n# Development Process\nThe app was developed using C# and .NET with a Windows Presentation Foundation (WPF) user interface. The team worked on integrating custom data structures for storing and calculating game data, developing the boss fight mode, and designing and developing the user interface.`,
        git: "https://github.com/DuLoops/Oculus-Party-Viewer",
    },
];

