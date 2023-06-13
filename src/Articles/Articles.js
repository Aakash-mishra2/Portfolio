import FrontList from "../front/components/FrontList";

export default function Articles() {
    const ARTICLES = [{
        id: 'a1',
        name: 'Introduction to Full Stack Development',
        icon: '',
        linkTo: 'https://www.dropbox.com/s/bgps903rbazui58/Report%20on%20Web%20Developement%20%20-%20Introduction.pdf?dl=0'
    },
    {
        id: 'a2',
        name: 'My Vision for India: 2047',
        icon: '',
        linkTo: 'https://www.dropbox.com/s/mlnx69ge3wtcj2z/My%20Vision%20for%20India%202047.pdf?dl=0'
    }];

    return (<FrontList cards={ARTICLES} />);
}