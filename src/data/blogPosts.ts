// import {BlogType, BlogPostType} from '@/types/BlogPostType'
import { Timestamp } from 'firebase/firestore'
export enum BlogType {
    Software,
    Design,
    Art,
    Study
  }

  export const BlogTypeNames = {
    [BlogType.Software]: 'Software',
    // [BlogType.Design]: 'Design',
    [BlogType.Art]: 'Art',
    // [BlogType.Study]: 'Study'
    }

  export const BlogTypeColors = {
    [BlogType.Software]: 'teal',
    [BlogType.Design]: 'rose',
    [BlogType.Art]: 'yellow',
    [BlogType.Study]: 'sky'
  }

  export const borderColorVariants = {
    [BlogType.Software] : 'border-orange-400 hover:border-orange-500 hover:shadow-md hover:shadow-orange-600 text-orange-200',
    [BlogType.Design]: 'border-teal-400 hover:border-teal-400 hover:shadow-md hover:shadow-teal-600 text-teal-200',
    [BlogType.Art]: 'border-yellow-400 hover:border-yellow-400 hover:shadow-md hover:shadow-yellow-600 text-yellow-200',
    [BlogType.Study]: 'border-sky-400  hover:border-sky-400 hover:shadow-md hover:shadow-sky-600 text-sky-200'
  }


  export const tagColors = {
    [BlogType.Software]: 'bg-orange-200',
    [BlogType.Design]: 'bg-teal-200',
    [BlogType.Art]: 'bg-yellow-200',
    [BlogType.Study]: 'bg-sky-200'
  } 


export const getBlogTypeColor = (type: BlogType) => BlogTypeColors[type]

  
  export  interface BlogPostType {
      card: {
        image: string[];
      };
      id: string;
      title: string;
      description?: string;
      tags: BlogType[];
      link: string;
      date: string; // Timestampp
      external?: string
    }

export const homeBlogPosts:BlogPostType[] = [
    // {id: 'steve',
    //     title: "Steve Jobs and his designs",
    //     description: 'Study on his life, work, and design philosophy.',
    //     tags: [BlogType.Study, BlogType.Design],
    //     link: 'steve_jobs',
    //     date: new Date(1715598775),
    //     card: {
    //         image: ['/images/dev/wht.png']
    //     }
    //     // variant:
    // },
    {id: 'wimhoftimer', 
        title: 'Wim Hof Breathing Saved Me',
        description: 'Learn Wim Hof Breathing Techinque with my custom timer app',
        tags: [BlogType.Software],
        link: 'Wim_Hof_breathing_timer',
        // external: 'https://wim-hof-timer.vercel.app/',
        date: '2025-03-06',
        card: {
            image: ['/images/dev/wht.png']
        }
    },
    {id: 'photogallery',
        title: 'Photography Gallery',
        tags: [BlogType.Art],
        link: 'gallery',
        date: '2024-09-01',
        card: {
            image: ['/images/dev/photogallery.png']
        }
    },
  
]

export const blogPosts = [
    ...homeBlogPosts, 
    {}
]