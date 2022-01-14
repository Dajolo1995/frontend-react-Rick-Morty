import React from "react";
import { Input } from "antd";
import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";

const SearchInput = styled(Input)`
  width: 80% !important;
  border-radius: 10px;
`;

function Search() {
  return (
    <div>
      <SearchInput
        placeholder="Search"
        allowClear
        suffix={<SearchOutlined />}
      />
    </div>
  );
}

export default Search;
