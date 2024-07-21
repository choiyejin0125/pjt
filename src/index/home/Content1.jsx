import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";







const Li = (props) => {

    const scrollUpHandler = () =>{
        window.scrollTo(0, 0);
    }

    return(
            <li className="box">
                <Link to ={`/games/${props.propstxt}`} onClick={scrollUpHandler}>
                <div className="thum">
                    <img src={props.src} alt={props.alt} />
                    <h3 className="info">{props.txt}</h3>
                </div>
                </Link>
            
            </li>

    );

}

const Shelf1 = () =>{
    return(
        <ul className="gameshelf1">
            <Li 
            src="./imgs/320x400_thum1.png"
            alt="Game Thumbnail"
            txt="Blade:Re.Action"
            propstxt="game1"
            />
            <Li 
            src="./imgs/320x400_thum2.png"
            alt="Game Thumbnail"
            txt="BLADE"
            propstxt="game2"
            />
            <Li 
            src="./imgs/320x400_thum3.png"
            alt="Game Thumbnail"
            txt="Blades of Three Kingdoms"
            propstxt="game3"
            />
        </ul>
    );
}
const Shelf2 = () =>{
    return(
        <ul className="gameshelf2">
            <Li 
            src="./imgs/320x400_thum4.png"
            alt="Game Thumbnail"
            txt="BLADE 2"
            propstxt="game4"
            />
            <Li 
            src="./imgs/320x400_thum5.png"
            alt="Game Thumbnail"
            txt="ANVIL"
            propstxt="game5"
            />
            <Li 
            src="./imgs/320x400_thum6.png"
            alt="Game Thumbnail"
            txt="DUNGEON STALKERS"
            propstxt="game6"
            />
        </ul>
    );
}
const Shelf3 = () =>{
    return(
        <ul className="gameshelf3">
            <Li 
            src="./imgs/320x400_thum1.png"
            alt="Game Thumbnail"
            txt="Blade:Re.Action"
            propstxt="game7"
            />
            <Li 
            src="./imgs/320x400_thum2.png"
            alt="Game Thumbnail"
            txt="BLADE"
            propstxt="game8"
            />
            <Li 
            src="./imgs/320x400_thum3.png"
            alt="Game Thumbnail"
            txt="Blades of Three Kingdoms"
            propstxt="game9"
            />
        </ul>
    );
}
const Shelf4 = () =>{
    return(
        <ul className="gameshelf4">
            <Li 
            src="./imgs/320x400_thum4.png"
            alt="Game Thumbnail"
            txt="BLADE 2"
            propstxt="game10"
            />
            <Li 
            src="./imgs/320x400_thum5.png"
            alt="Game Thumbnail"
            txt="ANVIL"
            propstxt="game11"
            />
            <Li 
            src="./imgs/320x400_thum6.png"
            alt="Game Thumbnail"
            txt="DUNGEON STALKERS"
            propstxt="game12"
            />
        </ul>
    );
}
const Shelf5 = () =>{
    return(
        <ul className="gameshelf5">
            <Li 
            src="./imgs/320x400_thum1.png"
            alt="Game Thumbnail"
            txt="Blade:Re.Action"
            propstxt="game13"
            />
            <Li 
            src="./imgs/320x400_thum2.png"
            alt="Game Thumbnail"
            txt="BLADE"
            propstxt="game14"
            />
            <Li 
            src="./imgs/320x400_thum3.png"
            alt="Game Thumbnail"
            txt="Blades of Three Kingdoms"
            propstxt="game15"
            />
        </ul>
    );
}
const Shelf6 = () =>{
    return(
        <ul className="gameshelf6">
            <Li 
            src="./imgs/320x400_thum4.png"
            alt="Game Thumbnail"
            txt="BLADE 2"
            propstxt="game16"
            />
            <Li 
            src="./imgs/320x400_thum5.png"
            alt="Game Thumbnail"
            txt="ANVIL"
            propstxt="game17"
            />
            <Li 
            src="./imgs/320x400_thum6.png"
            alt="Game Thumbnail"
            txt="DUNGEON STALKERS"
            propstxt="game18"
            />
        </ul>
    );
}
const Shelf7 = () =>{
    return(
        <ul className="gameshelf7">
            <Li 
            src="./imgs/320x400_thum4.png"
            alt="Game Thumbnail"
            txt="BLADE 2"
            propstxt="game19"
            />
            <Li 
            src="./imgs/320x400_thum5.png"
            alt="Game Thumbnail"
            txt="ANVIL"
            propstxt="game20"
            />
        </ul>
    );
}

const Gameshelf = ({number}) =>{

    const Shelves = {
        1: Shelf1 ,
        2: Shelf2 ,
        3: Shelf3 ,
        4: Shelf4 ,
        5: Shelf5 ,
        6: Shelf6 ,
        7: Shelf7 ,
    }

    const CurrentShelf = Shelves[number];

    return(
        <CurrentShelf />
    );
}

const Ul = () => {
    const [shelfopen, setshelfopen] = useState(1);

    const shelvestotal = 7;

    const prevShelf = () =>{
        setshelfopen(prev => prev > 1 ? prev - 1 : shelvestotal);
    }
    const nextShelf = () =>{
        setshelfopen(prev => prev < shelvestotal ? prev + 1 : 1);
    }
    return(
        <>
        <div className="arrows">
        <img src="./imgs/left_arrow.png" alt="leftarrow" onClick={prevShelf} className="left-arrow"/>
        <img src="./imgs/right_arrow.png" alt="rightarrow"  onClick={nextShelf} className="right-arrow"/>
        </div>
        <Gameshelf number={shelfopen}/>
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