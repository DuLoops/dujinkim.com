import React from 'react'

interface Props {
    children: React.ReactNode,
    colors: string[]
}

export default function GradientBorder({children, colors}: Props) {
  return (
    <div className='rounded-xl p-px'>
        <div className={`bg-gradient-b from-${colors[0]} to-${colors[1]}`}>
            {children}
        </div>
    </div>
  )
}
