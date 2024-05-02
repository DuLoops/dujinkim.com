import React from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { useMediaQuery } from 'react-responsive'

export default function InfoDialog() {
    const isDesktop = useMediaQuery({query:"(min-width: 768px)"})
    
    if (isDesktop) {
        return (
            <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Info</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Wim Hof Breathing Method</DialogTitle>
                    <DialogDescription>
                        The Wim Hof Brething Method is a specific technique to help you unlock your full potential.
                    </DialogDescription>
                </DialogHeader>
               <Content />
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
return (
    <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline">Info</Button>
            </DrawerTrigger>
            <DrawerContent className='h-3/4'>
                <DrawerHeader>
                    <DrawerTitle>Wim Hof Breathing Method</DrawerTitle>
                    <DrawerDescription>
                        The Wim Hof Brething Method is a specific technique to help you unlock your full potential.
                    </DrawerDescription>
                </DrawerHeader>
                    <Content/>
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button variant="secondary">Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

const Content = () => 
    (<div className='flex flex-col gap-2 p-4'>
    <h1 className='text-lg'>How to?</h1>
    <div className='flex flex-row justify-center gap-2'>
        <HowToCollapsible />
        <Button>
            <Link href="https://www.youtube.com/watch?v=tybOi4hjZFQ&ab_channel=WimHof" target={"_blank"}>Video Guide</Link>
        </Button>
    </div>
    <div>
        <h2 className='text-lg'>Precautions</h2>
        <ul className='list-disc text-sm'>
            <li>
                Watch the safety video first.
                <Link
                    href="https://www.youtube.com/watch?v=IFSL_Qk9qKw&ab_channel=WimHof"
                    target={"_blank"}
                    className='underline ml-1'
                >
                    Video Link
                </Link>
            </li>
            <li>
                Hyperventilation is not safe for everyone, and people with a
                history of fainting should consult a healthcare professional
                before trying this method.
            </li>
            <li>
                Wim Hof Breathing can affect motor control and, in rare
                cases, lead to loss of consciousness. Practice it in a safe
                environment.
            </li>
            <li>
                WHB is about learning to find comfort in discomfort, rather
                than setting records or fighting through pain. Listen to
                your body, not your ego.
            </li>
        </ul>
    </div>
</div>)


const HowToCollapsible = () => {
    return (
        <Collapsible>
            <CollapsibleTrigger>
                <Button>Read</Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <ol className='list-decimal'>
                    <li>Take in a strong inhalation.</li>
                    <li>Let out a relaxed exhalation through the mouth.</li>
                    <li>
                        Repeat for 20~40 breaths (recommendation: 30 breaths).
                    </li>
                    <li>
                        On the last breath, exhale to 90 percent and hold for as
                        long as you can.
                    </li>
                    <li>
                        When you feel your body really needs to take a breath,
                        inhale fully and hold for 15 seconds before releasing.
                    </li>
                    <li>Repeat 3 to 5 sets</li>
                </ol>
            </CollapsibleContent>
        </Collapsible>
    )
}
