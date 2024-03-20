import api from "@/store/axios";
import { AuthI, LgoinI } from "@/types/userI";

export async function LoginUser(data: LgoinI): Promise<AuthI> {
  return api
    .post("/login", data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
