import {BlogType, BlogPostType} from '@/types/BlogPostType'
import { Timestamp } from 'firebase/firestore'

export const homeBlogPosts:BlogPostType[] = [
    {id: 'steve',
        title: 'Steve Jobs',
        description: 'Steven Paul Jobs was born on February 24, 1955, in San Francisco, California, to Joanne Schieble and Abdulfattah Jandali.',
        tags: [BlogType.Design],
        link: 'steve_jobs',
        date: '1715598775',
        card: {
            image: ['/images/dev/steve_jobs.jpg']
        }
    },
    {id: 'photogallery',
        title: 'Photography Gallery',
        description: 'A collection of my favorite photos',
        tags: [BlogType.Photography],
        link: 'photography_gallery',
        date: new Date().toISOString(),
        card: {
            image: ['/images/dev/photography_gallery.jpg']
        }
    },
    {id: 'wimhoftimer', 
        title: 'Wim Hof Timer',
        description: 'A simple'
        + ' timer to help you practice the Wim Hof breathing method',
        tags: [BlogType.Software],
        link: 'wim_hof_timer',
        date: new Date().toISOString(),
        card: {
            image: ['/images/dev/wim_hof_timer.jpg']
        }
    }
]

export const blogPosts = [
    ...homeBlogPosts, 
    {}
]