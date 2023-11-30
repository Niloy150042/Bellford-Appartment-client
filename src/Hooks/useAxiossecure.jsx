import axios from "axios";

const axiossecure = axios.create({
  baseURL: "https://bellfrod-server-side.vercel.app",
});
const useAxiossecure = () => {
  return axiossecure;
};

export default useAxiossecure;
