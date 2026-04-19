import Image from 'next/image'

interface ImageComponentProps {
  src: string;
  alt?: string;
  caption?: string;
  title?: string;
}

export function ImageComponent({ src, alt = '', caption, title }: ImageComponentProps) {
  const displayCaption = caption || title;

  return (
    <figure className="flex flex-col items-center w-full group">
      <div className="relative w-full md:w-2/3 lg:w-1/2 flex justify-center !mb-0">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-xl object-contain max-h-[450px] w-full border border-white/10 shadow-xl transition-transform duration-300 group-hover:scale-[1.02] !m-0"
        />
      </div>
      {displayCaption && (
        <figcaption className="!mt-1 text-sm text-neutral-400 text-center max-w-[80%] italic">
          {displayCaption}
        </figcaption>
      )}
    </figure>
  )
}
