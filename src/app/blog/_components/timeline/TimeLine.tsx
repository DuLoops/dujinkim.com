import React from 'react';
import { TimepointData } from '@/types/TimepointData';
const TimeLine = ({ children }: { children: React.ReactNode }) => {
    return (
        <nav className="absolute top-2">
            {children}
        </nav>
    );
};

export default TimeLine;
