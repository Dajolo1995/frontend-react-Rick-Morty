import React, { useState } from "react";
import { Modal, Button} from "antd";
import styled from "@emotion/styled";
import Wizard from "../../../components/tools/Wizard";
// import Characters from "./Characters";
import ViewCheckbox from "./ViewCheckbox";
import Inputs from "./Inputs";

const ButtonModal = styled(Button)`
  background: #001529;
  border: none;
  :hover {
    background: #001529;
    box-shadow: 1px 1px 1px 2px #000;
  }
  :focus {
    background: #001529;
  }
`;

function ModalForm() {
  let datos = [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <ButtonModal type="primary" onClick={showModal}>
        Open Modal
      </ButtonModal>
      <Modal
        title="New Chapter"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          <Wizard>
            <Inputs />
            <ViewCheckbox datos={datos} />
          </Wizard>
        </form>
      </Modal>
    </>
  );
}

export default ModalForm;
