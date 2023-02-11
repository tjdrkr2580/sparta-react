import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  z-index: 999;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalLayout = styled.section`
  width: 50rem;
  flex-direction: column;
  height: 30rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  p {
    padding: 2rem;
    font-size: 1.6rem;
  }
`;

const ButtonWrapper = styled.section`
  display: flex;
  align-self: flex-end;
  gap: 1rem;
  margin: 0 1rem 1rem 0;
  button {
    border: none;
    cursor: pointer;
    border-radius: 0.8rem;
    height: 4rem;
    width: 10rem;
    font-size: 1.3rem;
  }
  .close {
    background-color: rgb(250, 177, 160);
    color: rgb(214, 48, 49);
  }
  .submit {
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
  }
`;

const FirstModal = ({ setVisible }: any) => {
  return (
    <ModalWrapper>
      <ModalLayout>
        <p>
          닫기와 확인 버튼 2개가 있고 외부 영역을 눌러도 모달이 닫히지 않아요.
        </p>
        <ButtonWrapper>
          <button className="close" onClick={() => setVisible(false)}>
            닫기
          </button>
          <button className="submit">확인</button>
        </ButtonWrapper>
      </ModalLayout>
    </ModalWrapper>
  );
};

export default FirstModal;
