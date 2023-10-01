const OthersItem = ({index}) =>{
    return(
        <>
            <section id="sectionOthersItem" className="section-otheritem">
                <div className="section-otheritem-box">
                    <div className="section-otheritem-content"> 
                        <div>
                            <h4 className="section-otheritem-title" >{index.title}</h4>
                        </div>
                        <div className="section-otheritem-details">
                            <h5 className="section-otheritem-used" >{index.used}</h5>
                            <h5 className="section-otheritem-apps" >{index.list}</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OthersItem;