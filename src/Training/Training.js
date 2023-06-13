import FrontList from "../front/components/FrontList";

export default function Trainings() {
    const COURSES = [{
        id: 'mern-stack',
        name: 'Full (MERN) Stack Web Development, Udemy',
        description: 'Dr. Angela Yu',
        icon: '',
        linkTo: 'https://www.dropbox.com/s/29dpbx39pq7ohaq/UdemyWebC.jpg?dl=0'
    },
    {
        id: 'dsa',
        name: 'Mastering Data Structures and Algorithms, Udemy',
        description: 'Dr. Abdul Bari',
        icon: ''
    },
    {
        id: 'programming_C++',
        name: 'Programming in Modern C++, IIT Kharagpur, NPTEL',
        description: 'Prof. Partha Pratim Das',
        icon: ''
    },
    {
        id: 'comp_programming',
        name: 'Introduction to Competitive Programming, IIT Gandhinagar, NPTEL',
        description: 'Prof. Neeldhara Mishra',
        icon: ''
    }];

    return (<FrontList cards={COURSES} />);
}