import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { TodoTypes } from "../types/redux";
import { RootState } from "../utils/redux/modules/todo";

const DetailLayout = styled.section`
  width: 30rem;
  height: 20rem;
  background-color: yellow;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .top {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
  }
`;

const DetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const Detail = () => {
  const { id } = useParams();
  const detailData = useSelector((state: RootState) => {
    return state.find((element) => element.id == parseInt(id as string));
  });
  const navigate = useNavigate();
  return (
    <DetailLayout>
      {detailData ? (
        <DetailWrapper>
          <section className="top">
            <span>NO. {detailData.id}</span>
            <button onClick={() => navigate("/")}>목록으로</button>
          </section>
          <h1>{detailData.title}</h1>
          <p>{detailData.description}</p>
        </DetailWrapper>
      ) : null}
    </DetailLayout>
  );
};

export default Detail;
