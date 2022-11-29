import add from "../assets/int.png";
import remove from "../assets/remove.png";
import update from "../assets/update.png";
import Modal from "./Modal";
import { useState } from "react";
import "./module.icons.css";

function Icons() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="crudWrapper">
      <Modal isOpen={setIsOpen} open={isOpen} />
      <img onClick={openModal} className="icon" src={add}></img>
      <img onClick={openModal} className="icon" src={update}></img>
      <img className="icon" src={remove}></img>
    </div>
  );
}

export default Icons;
