import { useState } from "react";
import OthersItem from "./OthersItem";

const Others = ()=>{

    const [otherList]=useState([
        {
        id:1,
        title:"Programming Language",
        used:"Language Known:",
        list:"HTML, CSS, JavaScript and SQL"
        },
        {
        id:2,
        title:"Documentation",
        used:"Software Used:",
        list:"Microsft Applications and Google Documentation Applications",
        },
        {
        id:3,
        title:"Video/Photo Editing",
        used:"Software Used:",
        list:"Adobe Photoshop and Adobe Premiere Pro",
        },
        {
        id:4,
        title:"Projects Created",
        used:"Project Titles: ",
        list:"Youtube Clone Design,Todo React Project and React Online Profile"
        }
    ])




    return (
        <>
            <section id="sectionOthers" className="section-others">
                <div className="section-others-title">
                        <h3>Other Skills</h3>
                </div>
                <div className="section-others-box">
                    {otherList.map((index =>
                        <OthersItem
                            key={index.id}
                            index={index}                            
                        >
                        </OthersItem>
                    ))}
                </div>

            </section>
            
        </>
    )
}

export default Others;