import FrontList from "../front/components/FrontList";
import vsn from "../icons/vision.png";
import wbd from "../icons/web-design.png";
import logo from "../icons/image-editing.png";
import brg from "../icons/burger.png";

export default function Articles() {
    const ARTICLES = [
        {
            id: 'a1',
            name: 'Modern C++ Programming and a Burger Restuarant',
            icon: brg,
            linkTo: 'https://medium.com/@aakash281/modern-c-programming-and-a-burger-restaurant-9ebb7514e164'
        },
        {
            id: 'a3',
            name: 'My Vision for India: 2047',
            icon: vsn,
            linkTo: 'https://www.dropbox.com/s/mlnx69ge3wtcj2z/My%20Vision%20for%20India%202047.pdf?dl=0'
        },
        {
            id: 'a5',
            name: 'My Submission for MATES Logo Design Competition',
            icon: logo,
            linkTo: 'https://www.dropbox.com/s/ikf9211jqujxy7e/MAIT-LOGO.png?dl=0'
        },
        {
            id: 'a6',
            name: 'Report on Internet and Web Development',
            icon: wbd,
            linkTo: 'https://www.dropbox.com/s/bgps903rbazui58/Report%20on%20Web%20Developement%20%20-%20Introduction.pdf?dl=0'
        },

    ];

    return (<FrontList cards={ARTICLES} />);
}