import { AxiosInstance, AxiosResponse } from 'axios';

export class ApiService {
  apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  async logout() {
    try {
      const response: AxiosResponse = await this.apiClient.post(
        '/accounts/logout/',
        {},
        { maxRedirects: 0 },
      );
      if (response.status === 200) {
        window.location.href = response.data.location;
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  async getUserProfile() {
    try {
      const response: AxiosResponse = await this.apiClient.get(
        '/api/v1/profile/',
        { withCredentials: true },
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (error: any) {
      console.log(error);
    }
  }
}
