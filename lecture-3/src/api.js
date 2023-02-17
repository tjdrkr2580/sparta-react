import axios from "axios";

// axios를 구성하는 환경설정 관련 코드가 입력값으로 들어간다.
//configuration

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

instance.interceptors.request.use(
  //요청을 보내기 전
  (config) => {
    console.log("인터셉트 성공!");
    return config;
  },
  //오류 요청을 보내기 전 수행
  (error) => {
    console.log("인터셉트 요청 오류!");
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  // 서버로부터 정상 응답을 받은 경우
  (res) => {
    console.log("인터셉트 정상 응답 수신");
    return res;
  },
  //서버로부터 오류 응답을 받은 경우
  (error) => {
    console.log("인터셉트 오류 응답 수신!");
    return Promise.reject(error);
  }
);

export default instance;
