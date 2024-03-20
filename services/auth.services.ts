import api from "@/services/axios";
import { ILogin, UserOut } from "@/types/User";

export async function loginUser(data: ILogin): Promise<UserOut> {
  try {
    const response = await api.post<UserOut>("/login", data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function verifToken(): Promise<UserOut> {
  try {
    const response = await api.get<UserOut>("/verifyToken");
    return response.data;
  } catch (error) {
    throw error;
  }
}
