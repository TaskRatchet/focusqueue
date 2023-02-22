import axios from "axios";

export default async function login(
  username: string,
  password: string
): Promise<string> {
  const response = await axios.post("https://api.taiga.io/api/v1/auth", {
    password: password,
    username: username,
    type: "normal",
  });

  if (!response.data.auth_token) {
    throw new Error("Failure to login");
  }

  return response.data.auth_token;
}
