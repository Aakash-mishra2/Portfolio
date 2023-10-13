import FrontList from "../front/components/FrontList";
import wbd from "../icons/web-design.png";
import logo from "../icons/image-editing.png";
import brg from "../icons/burger.png";
import ai from "../icons/ai.png";
export default function Articles() {
    const ARTICLES = [
        {
            id: 'a1',
            name: 'Modern C++ Programming and a Burger Restuarant',
            icon: brg,
            linkTo: 'https://medium.com/@aakash281/modern-c-programming-and-a-burger-restaurant-9ebb7514e164'
        },
        {
            id: 'a2',
            name: '"Can ChatGPT choose not to answer?"',
            icon: ai,
            linkTo: 'https://medium.com/@aakash281/can-chatgpt-choose-not-to-answer-ceeba2e2da31'
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