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
    {
        id: 'WimHofTimer',
        title: "Wim Hof Timer",
        background: `-webkit-linear-gradient(45deg, blue, #DAF1DE)`,
        desc: "Wim Hof Breathing Method Timer",
        tech: [tech.React],
        images: ['/images/dev/wht.png'],
        detail: `- Engineered an intuitive and responsive timer application for the [Wim Hof breathing method](https://www.wimhofmethod.com/breathing-exercises).
- Implemented custom animations and transitions using Framer Motion to provide visual feedback.
- Created audio integration with Webpack for timer notifications.`,
        link: "https://wim-hof-timer.vercel.app/",
        wireframe: 'https://www.figma.com/design/WKLSocC7pK5Vpy6dYXSxeL/Wim-Hof-Timer?node-id=0-1&t=IP3RM8jVPqQ9Kn0M-1'
    },
    {   id: 'PenderHarboutTourism',
        title: "Tourism Website",
        background: `-webkit-linear-gradient(left, purple, #DAF1DE, purple)`,

        desc: "Pender Harbour Tourism Website",
        tech: [tech.Vue],
        images: [portfolioImages.pender, portfolioImages.pender2],
        detail: `- Developed a responsive tourism website delivering information on local attractions, accommodations, and events.
- Implemented client-requested features in a team of three, following Agile methodology.
- Created interactive UI components with Vue.js to enhance user engagement and accessibility.
        `,
        link: "https://penderharbourdemo.web.app/",
        git: "https://github.com/DuLoops/PenderHarbourSpirit",
        wireframe: 'https://www.figma.com/design/e1klBLZUS84uwxngQjVMQu/Pender-Harbour-Spirit?node-id=87-3015&t=IuRiOq9j9hgXntcm-1'
    },
    {
        id: 'AudioMorpher',
        title: "Audio & Image Editor",
        background: `-webkit-linear-gradient(#ED4F05 , #EDB25A)`,

        desc: "Audio and Image manipulation software",
        tech: [tech.CSharp, tech.Net, tech.WPF],
        images: [portfolioImages.AudioMorpher],
        detail: `- Built a desktop application implementing advanced digital signal processing techniques.
- Developed multi-threaded architecture to process audio and image transformations efficiently.
- Implemented Fourier Transformation algorithms for audio manipulation and JPEG compression.
- Created an intuitive UI with drag-and-drop functionality for media files.`,
        git: "https://github.com/DuLoops/Audio-Image_editor",
    },
    {
        id: 'TankGame',
        title: "Tank Game",
        background: `-webkit-linear-gradient(45deg, #D93128, #EDB25A)`,

        desc: "1 VS 1 Tank Game",
        tech: [tech.Cpp, tech.directX],
        images: [portfolioImages.TankGame],
        detail: `- Collaborated in an 8-person team to develop a multiplayer tank battle game.
- Led UI/UX development using C# and WPF, creating responsive game interfaces.
- Engineered a Spatial Audio DLL in C++ to enhance immersive gameplay.
- Implemented performance optimizations utilizing OpenCL for CPU/GPU coordination.`,
        git: "https://github.com/DuLoops/GameEngineUI",
    },
    {
        id: 'OculusPartyViewer',
        title: "Oculus Party Viewer",
        background: `-webkit-linear-gradient(45deg, #DAF1DE, #83A7AF)`,

        desc: "D&D game analytics app",
        tech: [tech.CSharp, tech.Net, tech.WPF],
        images: [portfolioImages.dnd, portfolioImages.dnd2],
        detail: `- Designed and implemented an intuitive UI for a D&D board game companion app.
- Created a boss fight calculator that automatically scales difficulty based on party composition.
- Built a user-friendly dashboard interface for game masters to monitor player progression.`,
        git: "https://github.com/DuLoops/Oculus-Party-Viewer",
    },
];

