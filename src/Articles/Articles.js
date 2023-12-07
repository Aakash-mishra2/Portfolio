import FrontList from "../front/components/FrontList";
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
            id: 'a6',
            name: 'Report on Internet and Web Development',
            icon: wbd,
            linkTo: 'https://www.dropbox.com/s/bgps903rbazui58/Report%20on%20Web%20Developement%20%20-%20Introduction.pdf?dl=0'
        },

    ];

    return (<FrontList cards={ARTICLES} />);
}