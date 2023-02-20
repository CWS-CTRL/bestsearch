import Req from "./request";

const req = new Req({
  baseURL: "http://3.141.23.218:5000/interview/",
  timeout: 10000,
});

export default req;
