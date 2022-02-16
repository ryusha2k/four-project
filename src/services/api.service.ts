import axios, { AxiosResponse } from "axios";
import { SignatureResponse } from "../interfaces/server-responses.interface";

const host = process.env.NODE_ENV === 'development' ? '/api' : '/api';
export default class ApiService {
  static async signFirst(address: string): Promise<SignatureResponse> {
    const params = {
      address
    }
    const response: AxiosResponse<SignatureResponse> = await axios.get(`${host}/hypebears/sign-first`, {
      params
    });
    return response.data;
  }

  static async signSecond(address: string): Promise<SignatureResponse> {
    const params = {
      address
    }
    const response: AxiosResponse<SignatureResponse> = await axios.get(`${host}/hypebears/sign-second`, {
      params
    });
    return response.data;
  }
}
