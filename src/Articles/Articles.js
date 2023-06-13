import FrontList from "../front/components/FrontList";
import vsn from "../icons/vision.png";
import wbd from "../icons/web-design.png";

export default function Articles() {
    const ARTICLES = [
        {
            id: 'a1',
            name: 'My Vision for India: 2047',
            icon: vsn,
            linkTo: 'https://www.dropbox.com/s/mlnx69ge3wtcj2z/My%20Vision%20for%20India%202047.pdf?dl=0'
        },
        {
            id: 'a2',
            name: 'Internet and Web Development report',
            icon: wbd,
            linkTo: 'https://www.dropbox.com/s/bgps903rbazui58/Report%20on%20Web%20Developement%20%20-%20Introduction.pdf?dl=0'
        }
    ];

    return (<FrontList cards={ARTICLES} />);
}