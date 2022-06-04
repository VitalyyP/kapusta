import { useState } from "react";
import Modal from "../Modal";
import Form from "../Form";

export const ModalForm = (pushTransaction) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button onClick={() => setOpenModal(true)}>+</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Form onChange={() => pushTransaction} />
      </Modal>
    </>
  );
};
