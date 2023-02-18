import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AnimatedComponents from "../components/AnimatedComponents";
import Button from "../components/Button";
import Comment from "../components/Comment";
import Input from "../components/Input";
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
  const [value, setValue] = useState("");
  const { id } = useParams();
  const [update, setUpdate] = useState(false);
  const fetchToDetail = async () => {
    const res = await cuxios.get(`/diarys/${id}`);
    setValue(res.data.content);
    return res.data;
  };
  const { isLoading, data } = useQuery("detailData", fetchToDetail);

  const onUpdate = async (id: number) => {
    await cuxios.patch(`/diarys/${id}`, {
      id: data.id,
      user: data.user,
      title: data.title,
      content: value,
    });
    window.location.reload();
  };
  return (
    <AnimatedComponents>
      {isLoading === false ? (
        <DetailWrapper>
          <span>작성자 : {data.user}</span>
          <h1>{data.title}</h1>
          {update !== true ? (
            <p>{data.content}</p>
          ) : (
            <>
              <Input
                wh="l"
                value={value}
                placeholder="수정..."
                onChange={(e) => setValue(e.target.value)}
              />
              <Button onClick={() => onUpdate(data.id)}>수정</Button>
            </>
          )}
          <Button onClick={() => setUpdate(!update)}>
            {update === true ? "취소" : "수정"}
          </Button>
        </DetailWrapper>
      ) : null}
      <Comment id={id} />
    </AnimatedComponents>
  );
};

export default Detail;
