import React from 'react'
import { projectData } from '@/data/projects';
import { Metadata } from 'next';
import ProjectTag from '../_components/ProjectTag';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import Navigaion from './Navigaion';
interface PageProps {
  params: {
    slug: string;
  };
}

interface Project {
  id: string;
  title: string;
  background: string;
  desc: string;
  tech: string[];
  images: string[];
  detail: string;
  link?: string;
  git?: string;
}

// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const { slug } = params;
//   const project = projectData.find((proj) => proj.id === slug);

//   if (!project) {
//     return {
//       title: 'Page Not Found',
//     };
//   }

//   return {
//     title: project.title,
//   };
// }
const CustomMarkdownRenderer = ({ children, className }: { children: any, className?: any }) => (
  <ReactMarkdown
    className={className}
    remarkPlugins={[remarkGfm]}
    // rehypePlugins={[rehypeRaw]}
    components={{
      h1: ({ node, ...props }) => <h1 className="text-xl font-bold uppercase text-center" {...props} />,
      h2: ({ node, ...props }) => <h2 className="text-xl font-semibold" {...props} />,
      h3: ({ node, ...props }) => <h3 className="text-lg font-medium" {...props} />,
      p: ({ node, ...props }) => <p className="mt-1 mb-2 indent-2 text-md lg:text-lg" {...props} />,
      a: ({ node, ...props }) => <a className="text-blue-500 underline" {...props} />,
      ul: ({ node, ...props }) => <ul className="list-disc pl-5" {...props} />,
      ol: ({ node, ...props }) => <ol className="list-decimal pl-5" {...props} />,
      li: ({ node, ...props }) => <li className="my-2" {...props} />,
      code: ({ node, ...props }) => <code className="bg-gray-100 p-1 rounded" {...props} />,
      pre: ({ node, ...props }) => <pre className="bg-gray-100 p-2 rounded my-4" {...props} />,
    }}
  >
    {children}
  </ReactMarkdown>
);

export default function Page({ params }: { params: { slug: string } }) {

  const projectIndex = projectData.findIndex((proj) => proj.id === params.slug);
  const project = projectData[projectIndex];

  const getNavData = (index: number) => {
    if (index === 0) {
      return {
        prev: projectData[projectData.length - 1].id,
        next: projectData[index + 1].id,
      };
    }
    if (index === projectData.length - 1) {
      return {
        prev: projectData[index - 1].id,
        next: projectData[0].id,
      };
    }
    return {
      prev: projectData[index - 1].id,
      next: projectData[index + 1].id,
    };
  }

  if (!project) {
    return (
      <div>
        Project not found
      </div>
    )
  }

  return (
    <div className='flex flex-col justify-center text-white items-center gap-2 '>
      <h1 className='text-2xl mt-4'>{project.title}</h1>
      <h2>{project.desc}</h2>
      <div className='m-4 p-2 bg-neutral-600 rounded lg:w-1/2 lg:px-8'>
        <CustomMarkdownRenderer>{project.detail}</CustomMarkdownRenderer>
        <div className='flex flex-row gap-2 p-1 items-center'>
          <p>Tech: </p>
          <ProjectTag tech={project.tech} />
        </div>
      </div>
      <div className='flex flex-row gap-3 text-lg'>
        {project.link && <Link href={project.link} target='_blank' className='flex flex-row items-center gap-2  border-b-2 border-blue-400'>Visit Site<FaExternalLinkAlt /></Link>}
        {project.git && <Link href={project.git} target='_blank' className='flex flex-row items-center gap-2  border-b-2 border-purple-400'>GitHub<FaGithub /></Link>}
      </div>
      <div className='flex flex-col lg:max-w-2/3 items-center'>
        {project.images.map((img, i) => <Image key={i} src={img} alt={project.title} className='w-11/12  my-4' />)}
      </div>
      <Navigaion navData={getNavData(projectIndex)} />
    </div>
  )

}
