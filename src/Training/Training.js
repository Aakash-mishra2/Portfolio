import FrontList from "../front/components/FrontList";
import cpp from "../icons/c-.png";
import algo from "../icons/neural.png";
import dsa from "../icons/algorithm.png";
import apd from "../icons/app-development.png";

export default function Trainings() {
    const COURSES = [
        {
            id: 'programming_C++',
            name: 'Programming in Modern C++, Prof. Partha Pratim Das, IIT Kharagpur',
            description: 'Prof. Partha Pratim Das',
            linkTo: 'https://www.dropbox.com/s/bhusc0ql2jb6g04/Programming%20in%20Modern%20C%2B%2B.jpg?dl=0',
            icon: cpp
        },
        {
            id: 'comp_programming',
            name: 'Competitive Programming Introduction, Prof. Neeldhara Mishra, IIT Gandhinagar',
            description: 'Prof. Neeldhara Mishra',
            linkTo: 'https://www.dropbox.com/s/k7gz3iao2zspuz5/Getting%20Started%20with%20Competitive%20Programming.jpg?dl=0',
            icon: algo
        },
        {
            id: 'mern-stack',
            name: 'Full (MERN) Stack Web Development, Dr. Angela Yu, Udemy',
            description: 'Dr. Angela Yu',
            linkTo: 'https://www.dropbox.com/s/29dpbx39pq7ohaq/UdemyWebC.jpg?dl=0',
            icon: apd
        },
        {
            id: 'dsa',
            name: 'Mastering Data Structures and Algorithms, Dr. Abdul Bari, Udemy',
            description: 'Dr. Abdul Bari',
            icon: dsa,
            linkTo: 'https://www.dropbox.com/s/jen2w0grhzzxzu9/UdemyAlgoC.jpg?dl=0'
        },

    ];

    return (<FrontList cards={COURSES} />);
}