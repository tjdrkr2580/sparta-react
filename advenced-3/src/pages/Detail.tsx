import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AnimatedComponents from "../components/AnimatedComponents";
import Comment from "../components/Comment";
import { cuxios } from "../utils/cuxios";

const DetailWrapper = styled.section`
  width: 100vw;
  margin-top: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  span {
    font-size: 1.3rem;
  }
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.45rem;
  }
`;

const Detail = () => {
  const { id } = useParams();
  const fetchToDetail = async () => {
    const res = await cuxios.get(`/diarys/${id}`);
    return res.data;
  };
  const { isLoading, data } = useQuery("detailData", fetchToDetail);
  return (
    <AnimatedComponents>
      {isLoading === false ? (
        <DetailWrapper>
          <span>작성자 : {data.user}</span>
          <h1>{data.title}</h1>
          <p>{data.content}</p>
        </DetailWrapper>
      ) : null}
      <Comment id={id} />
    </AnimatedComponents>
  );
};

export default Detail;
