import request from "./axios";
// import { loginURL } from "@/utils/url";
function loginApi(datas) {
  return request.post(datas);
}

export { loginApi };
