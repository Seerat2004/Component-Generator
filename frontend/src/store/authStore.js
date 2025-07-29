import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authAPI } from '../utils/api';

const useAuthStore = create(
  persist(
    (set, get) => ({
      // State
      user: null,
      token: null,
      isAuthenticated: false,
      loading: false,
      error: null,

      // Actions
      login: async (email, password) => {
        set({ loading: true, error: null });
        try {
          const response = await authAPI.login({ email, password });
          const { data } = response.data;
          
          set({
            user: data,
            token: data.token,
            isAuthenticated: true,
            loading: false,
            error: null,
          });

          // Store token in localStorage
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data));

          return { success: true };
        } catch (error) {
          const errorMessage = error.response?.data?.message || 'Login failed';
          set({
            loading: false,
            error: errorMessage,
          });
          return { success: false, error: errorMessage };
        }
      },

      signup: async (name, email, password) => {
        set({ loading: true, error: null });
        try {
          const response = await authAPI.signup({ name, email, password });
          const { data } = response.data;
          
          set({
            user: data,
            token: data.token,
            isAuthenticated: true,
            loading: false,
            error: null,
          });

          // Store token in localStorage
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data));

          return { success: true };
        } catch (error) {
          const errorMessage = error.response?.data?.message || 'Signup failed';
          set({
            loading: false,
            error: errorMessage,
          });
          return { success: false, error: errorMessage };
        }
      },

      logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          loading: false,
          error: null,
        });
      },

      checkAuth: async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          set({ isAuthenticated: false });
          return false;
        }

        try {
          const response = await authAPI.getMe();
          const user = response.data.data;
          
          set({
            user,
            token,
            isAuthenticated: true,
            loading: false,
            error: null,
          });
          return true;
        } catch (error) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          set({
            user: null,
            token: null,
            isAuthenticated: false,
            loading: false,
            error: null,
          });
          return false;
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export default useAuthStore; 