import React, {useState} from "react";
import Card from "../../shared/UIElements/Card";
import Button from "../../shared/FormComponents/Button";
import '../styles/ProjectItem.css';
import Modal from "../../shared/UIElements/Modal";

export default function CaseItem(props) {
    const [isDescBox, setIsBox] = useState(false);
    const openDescBox = () => { setIsBox(true); }
    const closeDescBox = () => { setIsBox(false); }

    return (
        <div>
        <Modal
                show={isDescBox}
                closeBox={closeDescBox}
                header= "About This Project"
                footer={
                    <span>
                        <Button onClick={closeDescBox} danger>CLOSE</Button>
                        <Button href={props.deploy} target="_blank" onClick={closeDescBox}> View Deployed </Button>
                    </span>
                }
                contentClass="case-item__modal-content"
                footerClass="case-item__modal-actions"
            >
                <h4><b>Description : </b><em>{props.description}</em></h4>
                <p><b> TechStack : </b><em>{props.techStack}</em></p>

            </Modal>
            <React.Fragment>
                <div className="project-item hover:scale-110 active:scale-110 transform duration-1000 ">
                    <Card className="project-item__content ">
                        <div className="project-item__image ">
                            <img src={props.image} alt={props.title} />
                        </div>
                        <div className="project-item__info md:text-2xl text-xl font-semiBold mb-0">
                            <h2>{props.title}</h2>
                        </div>
                        <div className="project-item__actions md:text-lg text-base">
                            
                            <Button onClick={openDescBox}>VIEW</Button>
                            <Button href={props.github} target="_blank"> Github Repository </Button>
                         </div>
                    </Card>
                </div>
            </React.Fragment>
        </div>
    );
}