import React from "react";


const Li = (props) => {
    return(
            <li className="box">
                <div className="thum">
                    <img src={props.src} alt={props.alt} />
                    <h3 className="info">{props.txt}</h3>
                </div>
            
            </li>

    );

}

const Ul = () => {
    return(
        <>
            <ul>
                <Li 
                src="./imgs/320x400_thum1.png"
                alt="Game Thumbnail"
                txt="Blade:Re.Action"
                />
                <Li 
                src="./imgs/320x400_thum2.png"
                alt="Game Thumbnail"
                txt="BLADE"
                />
                <Li 
                src="./imgs/320x400_thum3.png"
                alt="Game Thumbnail"
                txt="Blades of Three Kingdoms"
                />
            </ul>
            <ul>
                <Li 
                src="./imgs/320x400_thum4.png"
                alt="Game Thumbnail"
                txt="BLADE 2"
                />
                <Li 
                src="./imgs/320x400_thum5.png"
                alt="Game Thumbnail"
                txt="ANVIL"
                />
                <Li 
                src="./imgs/320x400_thum6.png"
                alt="Game Thumbnail"
                txt="DUNGEON STALKERS"
                />
            </ul>

            </>
    );
}

const Content1 = () => {
    return(
        <>
        <div className="content_1">
            <h2>OUR GAMES</h2>
            <Ul />
        </div>
        
        </>
    );
}

export default Content1;