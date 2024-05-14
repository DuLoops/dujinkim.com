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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

export default function InfoDialog() {
    const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })

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
                <Content />
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
(
    <Tabs defaultValue="Precautions" className="flex flex-col justify-center items-center">
        <TabsList className='w-2/3'>
            <TabsTrigger value="Precautions">Precautions</TabsTrigger>
            <TabsTrigger value="Instructions">Instructions</TabsTrigger>
        </TabsList>
        <TabsContent value="Precautions"><PrecautionsContent /></TabsContent>
        <TabsContent value="Instructions"><InstructionsContent /></TabsContent>
    </Tabs>

)

const PrecautionsContent = () => {
    return (
        <div className='mx-7 flex flex-col items-center'>
            <ul className='list-disc'>
                <li>
                <strong>Hyperventlation rists: </strong> People with a history of fainting should consult a doctor before practicing.
                </li>
                <li>
                    <strong>Safe environment: </strong> Practice in a safe environment as Wim Hof Breathing can affect motor control.
                </li>
                <li>
                    <strong>Comfort over competition: </strong> Listen to your body and take breaks when needed. Find comfort rather than fighting your ego.
                </li>
            </ul>
            <Button className='w-2/3 '>
                <Link href="https://www.youtube.com/watch?v=IFSL_Qk9qKw&ab_channel=WimHof" target={"_blank"}>Safty Video </Link>
            </Button>
        </div>
    )

}

const InstructionsContent = () => (
    <div className='mx-7 flex flex-col items-center'>
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
        <Button className='w-2/3'>
            <Link href="https://www.youtube.com/watch?v=tybOi4hjZFQ&ab_channel=WimHof" target={"_blank"}>Video Guide</Link>
        </Button>
    </div>
)
