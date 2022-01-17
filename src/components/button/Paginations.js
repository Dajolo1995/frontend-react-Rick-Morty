import React from "react";
import { Button } from "antd";
import styled from "@emotion/styled";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";

const ButtonsPagination = styled(Button)`
  margin-top: 10px;
  border: 1px solid #001529;
  color: #001529;
  background: transparent !important;
  :last-child {
    margin-left: 5px;
  }
  :hover {
    color: #f0f2f5 !important;
    background: #001529 !important;
    border: none;
  }
  :focus {
    color: #f0f2f5 !important;
    background: #001529 !important;
    border: none;
  }
`;

function Paginations({ pagination, setPagination, dataSource }) {


  const suma = () => {
    setPagination(pagination + 1);
    Swal.fire({
      icon: "success",
      title: "Wait a moment",
    });
  };

  const resta = () => {
    setPagination(pagination - 1);
    Swal.fire({
        icon: "success",
        title: "Wait a moment",
      });
  };

  return (
    <>
      {pagination !== 1 ? (
        <>
          <ButtonsPagination onClick={resta}>
            <ArrowLeftOutlined />
          </ButtonsPagination>
        </>
      ) : (
        <span></span>
      )}
      {pagination === dataSource.info.pages ? (
        <span></span>
      ) : (
        <>
          <ButtonsPagination>
            <ArrowRightOutlined onClick={suma} />
          </ButtonsPagination>
        </>
      )}
    </>
  );
}

export default Paginations;
