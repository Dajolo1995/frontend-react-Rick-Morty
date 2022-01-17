import React from "react";
import { Input, DatePicker, Select } from "antd";
import styled from "@emotion/styled";

const { Option } = Select;

const Inputss = styled(Input)`
  margin-bottom: 10px;
`;

const DatePickers = styled(DatePicker)`
  margin-right: 10px;
`;

function Inputs({
  data,
  newEpisode,
  onChangeEpisode,
  onChangeDatePicker,
  setNewEpisode,
}) {
  const { nameChapter, nameEpisode, location } = newEpisode;

  function onChange(value) {

    let pos = data.locations.results.findIndex((el) => el.id == value);
    let locations = data.locations.results[pos];

    setNewEpisode({
      ...newEpisode,
      location: [locations],
    });
  }

  function onSearch(val) {
 
  }
  return (
    <>
      <Inputss
        name="nameChapter"
        value={nameChapter}
        onChange={onChangeEpisode}
        placeholder="name of chapter"
      />
      <Inputss
        name="nameEpisode"
        value={nameEpisode}
        onChange={onChangeEpisode}
        placeholder="Episode"
      />
      <DatePickers onChange={onChangeDatePicker} />
      {!data ? (
        <>
          <span></span>
        </>
      ) : (
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {data.locations.results.map((item) => (
            <>
              <Option value={item.id}>
                {item.name} - {item.dimension}
              </Option>
            </>
          ))}
        </Select>
      )}
    </>
  );
}

export default Inputs;
