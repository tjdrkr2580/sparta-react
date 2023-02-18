import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AnimatedComponents from "../components/AnimatedComponents";
import Button from "../components/Button";
import { flexCenter } from "../style/mixin";
import { diaryType } from "../types/type";
import { cuxios } from "../utils/cuxios";

const DiaryWrapper = styled(AnimatedComponents)`
  width: 100vw;
  min-height: 100vh;
  ${flexCenter}
`;

const DiaryLayout = styled.section`
  max-width: 80rem;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 2rem;
  margin-top: 10rem;
`;

const DiaryLists = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

const CustomLink = styled(Link)`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.textColor};
`;

const DiaryList = styled.li`
  background-color: white;
  transition: background-color 0.25s;
  &:hover {
    background-color: #c4c1c1;
  }
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 6rem;
  gap: 1.5rem;
  h1 {
    font-size: 1.5rem;
    width: 12rem;
  }
  p {
    font-size: 1.5rem;
  }
  span {
    width: 12rem;
  }
  section {
  }
  align-items: center;
  border-radius: 1rem;
`;

const Diary = () => {
  const diaryPatch = async () => {
    const res = await cuxios.get("/diarys");
    return res.data;
  };
  const { isLoading, data } = useQuery("diarys", diaryPatch);
  return (
    <DiaryWrapper>
      <DiaryLayout>
        <DiaryList>
          <p>당신의 오늘을 한 줄로 표현해주세요.</p>
          <Button size="s">추가하기</Button>
        </DiaryList>
        <DiaryLists>
          {!isLoading &&
            data.map((diary: diaryType) => (
              <CustomLink to={`/diary/${data.id}`} key={data.id}>
                <DiaryList>
                  <h1>{diary.title}</h1>
                  <span>{diary.user}</span>
                  <Button size="s">삭제</Button>
                </DiaryList>
              </CustomLink>
            ))}
        </DiaryLists>
      </DiaryLayout>
    </DiaryWrapper>
  );
};

export default Diary;
