import React from "react";

const Div = (props) => {
    return(
        <div className="event">
        <a href={props.href}> <img src={props.src} alt={props.alt} /> </a>
        </div>

        
    );
}

const Event = () => {
    return(
            <>
                <Div
                href="#none"
                src="./imgs/640x150_event2.png"
                alt="Event Image"
                 />
                 
                <Div
                href="#none"
                src="./imgs/640x150_event1.png"
                alt="Event Image"
                />
            </>
    );
}

const Content2 = () => {
    return(
        <div className="content_2">
            <Event />
        </div>
    );
}
export default Content2;