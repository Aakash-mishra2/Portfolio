import FrontList from "../front/components/FrontList";
import vsn from "../icons/vision.png";
import wbd from "../icons/web-design.png";
import logo from "../icons/image-editing.png";
import ai from "../icons/ai.png";
import brg from "../icons/burger.png";

export default function Articles() {
    const ARTICLES = [
        {
            id: 'a1',
            name: 'Modern C++ Programming and a Burger Restuarant',
            icon: brg,
            linkTo: 'https://www.dropbox.com/s/gtmxvaf6ke4tsg0/Modern%20C%2B%2B%20programming%20and%20a%20Burger%20Restuarant.pdf?dl=0'
        },
        {
            id: 'a2',
            name: '"Can ChatGPT choose not to answer a question."',
            icon: ai,
            linkTo: 'https://www.dropbox.com/s/d39yce4assjjdii/Can%20ChatGPT%20choose%20not%20to%20answer%20a%20question.pdf?dl=0'
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