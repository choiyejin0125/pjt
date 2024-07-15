const Imglink = {
    img1: '#none',
    img2: '#none',
    img3: '#none',
    img4: '#none',
    img5: '#none',
    img6: '#none',
}

import "../../../public/imgs/gameimgs"

const selectimgLOB = () =>{
    Imglink.img1 = "../../../public/imgs/gameimgs/Game1/dungeon_tiles.png";
    Imglink.img2 = "../../../public/imgs/gameimgs/Game2/gfx/NPC_test.png";
    Imglink.img3 = "../../../public/imgs/gameimgs/Game3/parallax_mountain_pack/layers/parallax-mountain-bg.png";
    Imglink.img4 = "../../../public/imgs/gameimgs/Game4/parallax-industrial-pack/layers/skill-desc_0003_bg.png";
    Imglink.img5 = "../../../public/imgs/gameimgs/Game2/gfx/Inner.png";
    Imglink.img6 = "../../../public/imgs/gameimgs/Game2/gfx/objects.png";

    return Imglink;

}
const selectimgNW = () =>{
    Imglink.img1 = "../../../public/imgs/gameimgs/Game1/dungeon_tiles.png";
    Imglink.img2 = "../../../public/imgs/gameimgs/Game2/gfx/NPC_test.png";
    Imglink.img3 = "../../../public/imgs/gameimgs/Game3/parallax_mountain_pack/layers/parallax-mountain-bg.png";
    Imglink.img4 = "../../../public/imgs/gameimgs/Game4/parallax-industrial-pack/layers/skill-desc_0003_bg.png";
    Imglink.img5 = "../../../public/imgs/gameimgs/Game2/gfx/Inner.png";
    Imglink.img6 = "../../../public/imgs/gameimgs/Game2/gfx/objects.png";

    return Imglink;
}
const selectimgRL = () =>{
    Imglink.img1 = "../../../public/imgs/gameimgs/Game1/dungeon_tiles.png";
    Imglink.img2 = "../../../public/imgs/gameimgs/Game2/gfx/NPC_test.png";
    Imglink.img3 = "../../../public/imgs/gameimgs/Game3/parallax_mountain_pack/layers/parallax-mountain-bg.png";
    Imglink.img4 = "../../../public/imgs/gameimgs/Game4/parallax-industrial-pack/layers/skill-desc_0003_bg.png";
    Imglink.img5 = "../../../public/imgs/gameimgs/Game2/gfx/Inner.png";
    Imglink.img6 = "../../../public/imgs/gameimgs/Game2/gfx/objects.png";

    return Imglink;
}
const selectimgFant = () =>{
    Imglink.img1 = "../../../public/imgs/gameimgs/Game1/dungeon_tiles.png";
    Imglink.img2 = "../../../public/imgs/gameimgs/Game2/gfx/NPC_test.png";
    Imglink.img3 = "../../../public/imgs/gameimgs/Game3/parallax_mountain_pack/layers/parallax-mountain-bg.png";
    Imglink.img4 = "../../../public/imgs/gameimgs/Game4/parallax-industrial-pack/layers/skill-desc_0003_bg.png";
    Imglink.img5 = "../../../public/imgs/gameimgs/Game2/gfx/Inner.png";
    Imglink.img6 = "../../../public/imgs/gameimgs/Game2/gfx/objects.png";

    return Imglink;
}
const selectimgTW = () =>{
    Imglink.img1 = "../../../public/imgs/gameimgs/Game1/dungeon_tiles.png";
    Imglink.img2 = "../../../public/imgs/gameimgs/Game2/gfx/NPC_test.png";
    Imglink.img3 = "../../../public/imgs/gameimgs/Game3/parallax_mountain_pack/layers/parallax-mountain-bg.png";
    Imglink.img4 = "../../../public/imgs/gameimgs/Game4/parallax-industrial-pack/layers/skill-desc_0003_bg.png";
    Imglink.img5 = "../../../public/imgs/gameimgs/Game2/gfx/Inner.png";
    Imglink.img6 = "../../../public/imgs/gameimgs/Game2/gfx/objects.png";

    return Imglink;
}



export const selectGameInfo = (g_name) =>{
    let imgs = '';
    switch(g_name){
        case "The_Legend_of_Braveman":
            imgs = selectimgLOB();
            return imgs;
        case "Nein_World":
            imgs = selectimgNW();
            return imgs;
        case "Rumia's_Library":
            imgs = selectimgRL();
            return imgs;
        case "Fantorio":
            imgs = selectimgFant();
            return imgs;
        case "Timworld":
            imgs = selectimgTW();
            return imgs;
        default:
            console.log('undefined game is identified');
            throw new Error('undefined game');

    }
}
