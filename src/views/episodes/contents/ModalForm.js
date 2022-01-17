import React, { useState, useContext, useEffect } from "react";
import { Modal, Button } from "antd";
import styled from "@emotion/styled";
import Wizard from "../../../components/tools/Wizard";
// import Characters from "./Characters";
import ViewCheckbox from "./ViewCheckbox";
import Inputs from "./Inputs";
import ApiContext from "../../../context/api/apiContext";
import credentials from "../../../services/index";

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

const Modals = styled(Modal)`
  width: 100% !important;
`;

function ModalForm({ data, createEpisode }) {
  let sser_idUser = credentials.getUser();
  const apiContext = useContext(ApiContext);
  const { character, getCharacter } = apiContext;
  const [newEpisode, setNewEpisode] = useState({
    User_idUser: sser_idUser.idUser,
    nameChapter: "",
    nameEpisode: "",
    date: "",
    location: [],
    namePerson: [],
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pagination, setPagination] = useState(1);
  const { User_idUser, nameChapter, nameEpisode, date, location, namePerson } =
    newEpisode;

  const onChangeEpisode = (e) => {
    setNewEpisode({
      ...newEpisode,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeDatePicker = (date, dateString) => {
    setNewEpisode({
      ...newEpisode,
      date: dateString,
    });
  };

  useEffect(() => {
    getCharacter(pagination);
  }, [pagination]);

  useEffect(() => {}, [character, data]);

  const showModal = () => {
    setIsModalVisible(true);
  };



  const handleOk = () => {
    if (nameChapter.trim() === "" || nameEpisode.trim() === "") {
      alert("Field Required!");
    } else {
      createEpisode({
        User_idUser,
        nameChapter,
        nameEpisode,
        date,
        location,
        namePerson,
      });
 
      setIsModalVisible(true);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <ButtonModal type="primary" onClick={showModal}>
        Open Modal
      </ButtonModal>
      <Modals
        title="New Chapter"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          <Wizard>
            <Inputs
              onChangeEpisode={onChangeEpisode}
              onChangeDatePicker={onChangeDatePicker}
              newEpisode={newEpisode}
              setNewEpisode={setNewEpisode}
              data={data}
            />
            <ViewCheckbox
              character={character}
              newEpisode={newEpisode}
              setNewEpisode={setNewEpisode}
              pagination={pagination}
              setPagination={setPagination}
            />
          </Wizard>
        </form>
      </Modals>
    </>
  );
}

export default ModalForm;
