export const mockAuthConfig = {
  enable: import.meta.env.VITE_MOCK_AUTH === "true",
  username: "admin",
  password: "admin123",
  token: "mock_jwt_token",
};
