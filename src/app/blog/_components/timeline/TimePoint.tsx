"use client"
import React from 'react'
import { TimepointData } from '@/types/TimepointData'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function TimePoint({timepoint}:{timepoint:TimepointData}) {
  return (
    <Link href={`#${timepoint.id}`}>
      <h1>{timepoint.title}</h1>
    </Link>
  )
}
