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
    [BlogType.Design]: 'Design',
    [BlogType.Art]: 'Art',
    [BlogType.Study]: 'Study'
    }

  export const BlogTypeColors = {
    [BlogType.Software]: 'teal',
    [BlogType.Design]: 'rose',
    [BlogType.Art]: 'yellow',
    [BlogType.Study]: 'sky'
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
      date: Date; // Timestampp
    }

export const homeBlogPosts:BlogPostType[] = [
    {id: 'steve',
        title: "Steve Jobs and his designs",
        description: 'Study on his life, work, and design philosophy.',
        tags: [BlogType.Study, BlogType.Design],
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