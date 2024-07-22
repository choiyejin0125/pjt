import React, { useEffect, useState } from "react";







const Main = () => {
    const [image, setimage] = useState(null);
    const [prevIndex, setPrevIndex] = useState(null)
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const fetchBanner = () => {
            fetch("/jsonstorage/MainBanner.json")
            .then(response => response.json())
            .then(data => {
                let randomindex = Math.floor(Math.random()*data.banner.length);

                while (prevIndex === randomindex){
                    randomindex = Math.floor(Math.random()*data.banner.length);
                }
                setFadeIn(false);
                setTimeout(() => {
                    setimage(data.banner[randomindex]);
                    setFadeIn(true);
                    setPrevIndex(randomindex)
                }, 500)
            });
        }
        fetchBanner();

        const changeTime = setInterval(fetchBanner, 30000);

        return () => clearInterval(changeTime);
    }, []);

    if (!image) {return <div>메인 배너 로딩 중...</div>;}

    return(

        <div className="main">
            <div className="bannerwrap">
                <div className={`banner ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                <img src={image.url} alt={image.name} />
                </div>
            </div>
        </div>
    );
}

export default Main;