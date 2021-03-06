import React from "react";

function AboutCard(props) {

    return (
        <div className='work-card-container'>
            <div className='work-card-tree'>                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"/>
                </svg>

                <div className='work-card-branch'/>
            </div>

            <div className='work-card-content'>
                <div className='work-card-header'>
                    <div className='work-header-info'>
                        <h1>{props.company}</h1>
                        <h2>{props.location}</h2>
                    </div>
                    <div className='work-header-info'>
                        <h3>{props.position}</h3>
                        <h3>{props.date}</h3>
                    </div>  
                </div>

                <div className='work-card-info'>
                    <ul>
                        <li>{props.info1}</li>
                        <li>{props.info2}</li>
                        <li>{props.info3}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutCard;