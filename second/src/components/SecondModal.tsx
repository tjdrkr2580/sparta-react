import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const ModalWrapper = styled.div<{ isOpen: boolean }>`
  z-index: 999;
  width: 100vw;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalLayout = styled.section`
  width: 50rem;
  height: 30rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  p {
    padding: 2rem;
    font-size: 1.6rem;
  }
  button {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin: 1rem;
  }
`;
const SecondModal = ({ isOpen, setOpen }: any) => {
  const el: any = useRef(null);
  const handleCloseModal = (event: any): void => {
    if (isOpen === true && (!el.current || !el.current.contains(event.target)))
      setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("click", handleCloseModal);
    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, [isOpen]);
  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalLayout ref={el}>
        <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>
        <button className="close">X</button>
      </ModalLayout>
    </ModalWrapper>
  );
};

export default SecondModal;
