// import {BlogType, BlogPostType} from '@/types/BlogPostType'
import { Timestamp } from 'firebase/firestore'

export enum BlogType {
    Software,
    Design,
    Art,
    Study
  }

  export const BlogTypeColors = {
    [BlogType.Software]: 'bg-teal-200',
    [BlogType.Design]: 'bg-green-200',
    [BlogType.Art]: 'bg-red-500',
    [BlogType.Study]: 'bg-indigo-500'
  }
  
  export  interface BlogPostType {
      card: {
        image: string[];
      };
      id: string;
      title: string;
      description?: string;
      tags: BlogType[];
      link: string;
      date: Date; // Timestampp
    }

export const homeBlogPosts:BlogPostType[] = [
    {id: 'steve',
        title: 'Steve Jobs',
        description: 'His life, design, and philosophy',
        tags: [BlogType.Design, BlogType.Study],
        link: 'steve_jobs',
        date: new Date(1715598775),
        card: {
            image: ['/images/dev/wht.png']
        }
        // variant:
    },
    {id: 'photogallery',
        title: 'Photography Gallery',
        tags: [BlogType.Art],
        link: 'photography_gallery',
        date: new Date(),
        card: {
            image: ['/images/dev/photogallery.png']
        }
    },
    {id: 'wimhoftimer', 
        title: 'Wim Hof Timer',
        description: 'Intuitive timer to help you practice the Wim Hof breathing method.',
        tags: [BlogType.Software],
        link: 'wim_hof_timer',
        date: new Date(),
        card: {
            image: ['/images/dev/wht.png']
        }
    }
]

export const blogPosts = [
    ...homeBlogPosts, 
    {}
]