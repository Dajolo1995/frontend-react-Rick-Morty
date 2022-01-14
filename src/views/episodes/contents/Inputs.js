import React from "react";
import { Input, DatePicker, Select } from "antd";


const { Option } = Select;
function Inputs() {

    let datos = [
        {
          id: 1,
          name: "Earth (C-137)",
          type: "Planet",
          dimension: "Dimension C-137",
        },
        {
          id: 2,
          name: "Abadango",
          type: "Cluster",
          dimension: "unknown",
        },
        {
          id: 3,
          name: "Citadel of Ricks",
          type: "Space station",
          dimension: "unknown",
        },
        {
          id: 4,
          name: "Worldender's lair",
          type: "Planet",
          dimension: "unknown",
        },
      ];
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onSearch(val) {
    console.log("search:", val);
  }
  return (
    <>
      <Input placeholder="name of chapter" />
      <Input placeholder="Episode" />
      <DatePicker />
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
          {datos.map((item) => (
              <>
               <Option value={item.name}>{item.name} - {item.dimension}</Option>
              </>
          ))}
      </Select>
    </>
  );
}

export default Inputs;
