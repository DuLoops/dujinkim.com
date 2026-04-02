"use client"
import React from "react"
import { cn } from "utils/cn"
interface ProgressRingProps {
    progress: number
    size?: number
    strokeWidth?: number
    className?: string
    trackColor?: string
    indicatorColor?: string
}
export function ProgressRing({
    progress,
    size = 40,
    strokeWidth = 3,
    className,
    trackColor = "text-neutral-200/20",
    indicatorColor = "text-orange-500",
}: ProgressRingProps) {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const offset = circumference - (progress / 100) * circumference
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="transform -rotate-90"
            >
                {/* Track */}
                <circle
                    className={cn("stroke-current transition-colors", trackColor)}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                {/* Indicator */}
                <circle
                    className={cn("stroke-current transition-all duration-300 ease-in-out", indicatorColor)}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: offset,
                    }}
                    strokeLinecap="round"
                />
            </svg>
        </div>
    )
}
