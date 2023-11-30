import axios from "axios";

const axiossecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiossecure = () => {
  return axiossecure;
};

export default useAxiossecure;
