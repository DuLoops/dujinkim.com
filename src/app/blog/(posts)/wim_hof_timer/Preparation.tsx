import React from 'react'
import InfoDialog from './_components/InfoDialog'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Prepartion() {
    return (
        <div className='text-center mt-4'>
            <h2>Wim Hof</h2>
            <h1>Breating Timer</h1>
            <div className='flex flex-col justify-center gap-2'>
                <div className='flex flex-row justify-center gap-2 mt-2 '>
                    <InfoDialog />
                    <Button>
                        <Link href="https://www.youtube.com/watch?v=IFSL_Qk9qKw&ab_channel=WimHof"
                            target={"_blank"}>Safety Video</Link></Button>
                </div>
            </div>
        </div>
    )
}
