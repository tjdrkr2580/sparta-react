import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import GlobalStyle from "./utils/GlobalStyle";
import { AiOutlineRight, AiTwotoneBell } from "react-icons/ai";
import Input from "./components/Input";
import Selector from "./components/Selector";
import FirstModal from "./components/FirstModal";

const AppWrapper = styled.div`
  h1 {
    margin: 1rem 0;
    font-size: 3rem;
  }
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const FlexWrapper = styled.section`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const InputWrapper = styled.form`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const SelectWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 21rem;
  flex-direction: column;
  .layout {
    display: flex;
  }
`;

const Modal = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
const ModalLayout = styled.section`
  width: 50rem;
  height: 30rem;
  display: flex;
  justify-content: space-between;
  font-size: 3rem;
  padding: 2rem;
  z-index: 10;
  background-color: white;
  button {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
`;

function App() {
  const [info, setInfo] = useState({
    name: "",
    price: 0,
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (info.name !== "" && info.price !== 0) {
      alert(`{name : ${info.name}, price : ${info.price}}`);
    } else alert("이름과 가격 모두 입력해주세요.");
  };
  const [visible1, setVisible1] = useState(false);
  const [open, setOpen] = useState(false);
  const outSection: any = useRef();
  return (
    <>
      <AppWrapper>
        <GlobalStyle />
        {visible1 && <FirstModal setVisible={setVisible1} />}
        {open ? (
          <Modal
            ref={outSection}
            onClick={(e) => {
              if (outSection.current === e.target) {
                setOpen(false);
              }
            }}
          >
            <ModalLayout>
              모달창 내용
              <button onClick={() => setOpen(false)}>X</button>
            </ModalLayout>
          </Modal>
        ) : null}
        <h1>Button</h1>
        <FlexWrapper>
          <Button
            weight="l"
            isType={"true"}
            onClick={() => alert("버튼을 만들어보세요!")}
            label={<AiOutlineRight size={18} />}
          >
            Large Primary Button
          </Button>
          <Button>Meidum</Button>
          <Button weight="s">Small</Button>
        </FlexWrapper>
        <FlexWrapper>
          <Button
            onClick={() => prompt("어렵나요?")}
            weight="l"
            color={"#fab1a0"}
            isType={"true"}
            tc={"#D63031"}
            label={<AiTwotoneBell size={18} />}
          >
            Large Primary Button
          </Button>
          <Button tc={"#D63031"} color={"#fab1a0"}>
            Meidum
          </Button>
          <Button tc={"#D63031"} weight="s" color={"#fab1a0"}>
            Small
          </Button>
        </FlexWrapper>
        <h1>Input</h1>
        <InputWrapper onSubmit={onSubmit}>
          <Input
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
            label={"이름"}
          />
          <Input
            type={"number"}
            value={info.price}
            onChange={(e) => setInfo({ ...info, price: +e.target.value })}
            label={"가격"}
          />
          <Button weight={"s"}>저장</Button>
        </InputWrapper>
        <h1>Modal</h1>
        <FlexWrapper>
          <Button onClick={() => setVisible1(true)}>open modal</Button>
          <Button
            onClick={() => setOpen(true)}
            tc={"#D63031"}
            weight="l"
            color={"#fab1a0"}
            isType={"true"}
          >
            open modal
          </Button>
        </FlexWrapper>
        <SelectWrapper>
          <h1>Select</h1>
          <div className="layout">
            <Selector />
            <Selector type={2} />
          </div>
        </SelectWrapper>
      </AppWrapper>
    </>
  );
}
export default App;
