import React from "react";
import { Checkbox, Row, Col } from "antd";
import styled from "@emotion/styled";
import Paginations from "../../../components/button/Paginations";

const Images = styled.img`
  width: 150px;
  cursor: pointer;
`;

const ColPagination = styled(Col)`
margin-top; 10px;
  display: flex;
  justify-content: center
`;

function ViewCheckbox({
  character,
  newEpisode,
  setNewEpisode,
  pagination,
  setPagination,
}) {
  console.log(character.info);
  function onChange(checkedValues) {
    setNewEpisode({
      ...newEpisode,
      namePerson: [...checkedValues],
    });
  }

  return (
    <>
      <Checkbox.Group onChange={onChange}>
        {character.results.map((item) => (
          <>
            <Checkbox value={item}>
              <div style={{ display: "grid" }}>
                <Images src={item.image} />
                {item.name}
              </div>
            </Checkbox>
          </>
        ))}
      </Checkbox.Group>

      <Row>
        <ColPagination span={24}>
          <Paginations
            dataSource={character}
            pagination={pagination}
            setPagination={setPagination}
          />
        </ColPagination>
      </Row>
    </>
  );
}

export default ViewCheckbox;
