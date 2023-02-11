import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const ModalWrapper = styled.div<{ visible: boolean }>`
  z-index: 999;
  width: 100vw;
  display: ${(props) => (props.visible ? "flex" : "none")};
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
const SecondModal = ({ visible, setVisible }: any) => {
  const el: any = useRef(null);
  const handleCloseModal = (event: any): void => {
    if (visible === true && (!el.current || !el.current.contains(event.target)))
      setVisible(false);
  };
  useEffect(() => {
    window.addEventListener("click", handleCloseModal);
    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, [handleCloseModal]);
  return (
    <>
      {visible ? (
        <ModalWrapper visible={visible}>
          <ModalLayout ref={el}>
            <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>
            <button className="close" onClick={() => setVisible(false)}>
              X
            </button>
          </ModalLayout>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default SecondModal;
