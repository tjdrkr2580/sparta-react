import { useNavigate, To } from "react-router-dom";

export function useMovePage() {
  const navigate = useNavigate();

  const setPage = (url: To) => {
    return navigate(url);
  };

  return setPage;
}

export default useMovePage;
