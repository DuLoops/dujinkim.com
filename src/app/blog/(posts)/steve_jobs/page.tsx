import React from 'react'
import {SteveJobsTimeline} from '@/data/Timeline'
import TimeLine from '@/app/blog/_components/timeline/TimeLine'
import TimePoint from '@/app/blog/_components/timeline/TimePoint'
export default function page() {


  return (
    <div>
      <TimeLine>
        {SteveJobsTimeline.map((timepoint, index) => {
          return (<TimePoint key={index} timepoint={timepoint} />)
        })}
      </TimeLine>
    </div>
  )
}
