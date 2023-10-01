import { useState } from "react";
import WorkItem from "./WorkItem";

const Work = ()=>{

    const [workList]=useState([
        {
        id:1,
        title:"Frontend Web Developer",
        position:"Internship",
        place:"Hooli Software",
        time:"July - Aug 2022"},
        {
        id:2,
        title:"IT Support Technician",
        position:"Internship",
        place:"La Consolacion University Philippines",
        time:"Jan - Feb 2019"      
        }
    ])

    return (
        <>
            <section id="sectionWork" className="section-work">
                <div className="section-work-title">
                    <h3>Work Experience</h3>
                </div>
                <div className="section-work-box">
                    {workList.map((index =>
                        <WorkItem
                            key={index.id}
                            item={index}
                        ></WorkItem>
                    ))}
                </div>
            </section>
        </>
    )
}


export default Work;