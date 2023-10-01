const WorkItem = ({item}) =>{
    return (
        <>
            <section id="sectionWorkItem" className="section-workitem">
                <div className="section-workitem-box">
                    <div className="section-workitem-content"> 
                        <div>
                            <h3 className="section-workitem-title" >{item.title}</h3>
                        </div>
                        <div className="section-workitem-details">
                            <h4 className="section-workitem-position" >{item.position}</h4>
                            <h5 className="section-workitem-location" >{item.place}</h5>
                            <h5 className="section-workitem-year">{item.time}</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkItem;