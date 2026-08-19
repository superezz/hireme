import axios from 'axios'
import { store } from '../app/store'
import { logout } from '../app/features/authSlice'
import toast from 'react-hot-toast'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      store.dispatch(logout());
      toast.error('Session expired. Please log in again.');
      // Optional: window.location.href = '/login'; if using react-router outside components is tricky
    }
    return Promise.reject(error);
  }
);

export default api;