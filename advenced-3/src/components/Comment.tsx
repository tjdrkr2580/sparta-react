import React, { FormEvent, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { flexCenter } from "../style/mixin";
import { commentProps } from "../types/type";
import { cuxios } from "../utils/cuxios";
import Button from "./Button";
import Input from "./Input";

const CommentWrapper = styled.section`
  display: flex;
  ${flexCenter}
  width: 100vw;
  margin-top: 1rem;
  flex-direction: column;
`;

const CommentForm = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const CommentLists = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
`;

const CommentList = styled.ul`
  height: 5rem;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 1.4rem;
    gap: 1rem;
    width: 7rem;
  }
  border: 0.025rem solid ${(props) => props.theme.primary};
  border-radius: 1rem;
  padding: 0 1rem;
`;

const Comment = ({ id }: commentProps) => {
  const [datas, setDatas] = useState<any>(undefined);
  const [value, setValue] = useState({
    id: Date.now(),
    postId: String(id),
    user: "",
    comment: "",
  });
  const commentPatch = async () => {
    const res = await cuxios.get("/comments");
    setDatas(res.data);
    return res.data;
  };
  const onDelete = async (id: number) => {
    await cuxios.delete(`/comments/${id}`);
    window.location.reload();
  };
  const { isLoading } = useQuery("comments", commentPatch);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.user !== "" && value.comment !== "") {
      await cuxios.post("/comments", value);
      alert("작성 완료!");
      setValue({
        id: Date.now(),
        postId: String(id),
        user: "",
        comment: "",
      });
      commentPatch();
    } else alert("공백 없이 입력해주세요!");
  };
  return (
    <CommentWrapper>
      <CommentForm onSubmit={onSubmit}>
        <Input
          wh="s"
          placeholder="당신은?"
          value={value.user}
          onChange={(e) => setValue({ ...value, user: e.target.value })}
        />
        <Input
          placeholder="댓글을 입력하세요."
          value={value.comment}
          onChange={(e) => setValue({ ...value, comment: e.target.value })}
        />
        <Button size="s">입력!</Button>
      </CommentForm>
      <CommentLists>
        {datas?.map((data: any) =>
          data.postId == id ? (
            <CommentList key={data.id}>
              <h1>{data.user}</h1>
              <p>{data.comment}</p>
              <Button size="s" onClick={() => onDelete(data.id)}>
                삭제
              </Button>
            </CommentList>
          ) : null
        )}
      </CommentLists>
    </CommentWrapper>
  );
};

export default Comment;
