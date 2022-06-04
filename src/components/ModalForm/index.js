import { useState } from "react";
import Modal from "../Modal";
import Form from "../Form";
import { Button } from "./styles";

export const ModalForm = (props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>+</Button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Form
          onChange={props.onChange}
          onCloseModalForm={() => setOpenModal(false)}
        />
      </Modal>
    </>
  );
};
