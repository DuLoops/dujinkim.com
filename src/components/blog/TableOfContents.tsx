"use client"
import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProgressRing } from "../ui/ProgressRing"
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle, DrawerDescription } from "../ui/drawer"
import { cn } from "utils/cn"
interface TOCItem {
    id: string
    text: string
    level: number
}
interface TableOfContentsProps {
    contentSelector?: string
}
export function TableOfContents({ contentSelector = "article" }: TableOfContentsProps) {
    const [headings, setHeadings] = useState<TOCItem[]>([])
    const [activeId, setActiveId] = useState<string>("")
    const [readingProgress, setReadingProgress] = useState(0)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    // 1. Parse Headings & Setup Progress Tracker
    useEffect(() => {
        const updateHeadings = () => {
            const contentElement = document.querySelector(contentSelector)
            if (!contentElement) return
            // Get all h1, h2, h3
            const elements = Array.from(contentElement.querySelectorAll("h1, h2, h3"))
            const items: TOCItem[] = elements.map((elem, index) => {
                // Ensure id exists
                if (!elem.id) {
                    const text = elem.textContent || ""
                    const slug = text
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)+/g, "")
                    elem.id = slug || `heading-${index}`
                }

                return {
                    id: elem.id,
                    text: elem.textContent || "",
                    level: Number(elem.tagName.charAt(1)),
                }
            })

            setHeadings(items)
            // Set initial active
            if (items.length > 0) setActiveId(items[0].id)
        }
        // Run initially and after a small delay to ensure content is rendered
        updateHeadings()
        const timer = setTimeout(updateHeadings, 100)

        return () => clearTimeout(timer)
    }, [contentSelector])
    // 2. Scroll Spy & Progress
    useEffect(() => {
        const handleScroll = () => {
            // Progress Logic
            const totalScroll = document.documentElement.scrollTop
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

            // Prevent division by zero and NaN
            const progress = windowHeight > 0 ? totalScroll / windowHeight : 0
            setReadingProgress(Math.min(Math.max(progress * 100, 0), 100))

            // Active Section Logic
            // Use getBoundingClientRect for absolute viewport position accuracy
            // This avoids issues with relative parent containers
            const activeThreshold = 150 // Pixel offset from top to trigger "active"

            // Find the last heading that is above the threshold
            let newActiveId = ""
            for (let i = headings.length - 1; i >= 0; i--) {
                const heading = headings[i]
                const elem = document.getElementById(heading.id)
                if (!elem) continue

                const rect = elem.getBoundingClientRect()
                // rect.top is the distance from the viewport top.
                // If it is less than threshold, it has passed our "read line".
                if (rect.top <= activeThreshold) {
                    newActiveId = heading.id
                    break
                }
            }

            if (newActiveId) {
                setActiveId(newActiveId)
            }
        }
        window.addEventListener("scroll", handleScroll)

        // Initial call to set progress
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [headings])

    const scrollToHeading = (id: string) => {
        const elem = document.getElementById(id)
        if (elem) {
            const topOffset = 80 // Adjust for header height
            const elementPosition = elem.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.scrollY - topOffset

            if (isMobileOpen) {
                setIsMobileOpen(false)
                // Wait for drawer to close fully (Vaul animation ~350ms)
                setTimeout(() => {
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    })
                }, 500)
            } else {

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                })
            }

            setActiveId(id)
        }
    }
    if (headings.length === 0) return null
    return (
        <>
            {/* --- Desktop Sidebar --- */}
            <nav className="hidden xl:block fixed left-8 top-1/4 w-64 p-4 max-h-[70vh] overflow-y-auto z-40">
                <div className="border-l border-neutral-800 pl-4 space-y-3">
                    <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4 block">
                        On this page
                    </span>
                    {headings.map((heading) => (
                        <button
                            key={heading.id}
                            onClick={() => scrollToHeading(heading.id)}
                            className={cn(
                                "group flex items-center w-full text-left text-sm transition-all duration-200 ease-in-out border-l-2 -ml-[17px] pl-4 py-1",
                                activeId === heading.id
                                    ? "text-orange-500 border-orange-500 font-medium"
                                    : "text-neutral-500 border-transparent hover:text-neutral-300 hover:border-neutral-700"
                            )}
                            style={{
                                marginLeft: heading.level > 2 ? `${(heading.level - 2) * 12}px` : undefined
                            }}
                        >
                            {heading.text}
                        </button>
                    ))}
                </div>
            </nav>
            {/* --- Mobile Progress Ring Trigger --- */}
            <div className="xl:hidden fixed top-20 left-4 z-50">
                <Drawer open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                    <DrawerTrigger asChild>
                        <button
                            className="rounded-full hover:scale-105 transition-transform p-1"
                            aria-label="Table of Contents"
                        >
                            <ProgressRing
                                progress={readingProgress}
                                size={44}
                                strokeWidth={3}
                                trackColor="text-neutral-700/50"
                                indicatorColor="text-orange-500"
                            />
                        </button>
                    </DrawerTrigger>
                    <DrawerContent className="h-[70vh] bg-neutral-900 border-neutral-800">
                        {/* Accessibility: Use VisuallyHidden if title is not needed visually, but Vaul/Radix often requires it inside Content */}
                        <div className="sr-only">
                            <DrawerTitle>Table of Contents</DrawerTitle>
                            <DrawerDescription>Navigate to sections in this article</DrawerDescription>
                        </div>
                        <div className="p-6 h-full overflow-y-auto">
                            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-6 block">
                                Table of Contents
                            </span>
                            <div className="space-y-4">
                                {headings.map((heading) => (
                                    <button
                                        key={heading.id}
                                        onClick={() => scrollToHeading(heading.id)}
                                        className={cn(
                                            "block w-full text-left text-base transition-colors py-1",
                                            activeId === heading.id
                                                ? "text-orange-500 font-medium"
                                                : "text-neutral-400"
                                        )}
                                        style={{
                                            paddingLeft: heading.level > 1 ? `${(heading.level - 1) * 16}px` : undefined
                                        }}
                                    >
                                        {heading.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>
        </>
    )
}