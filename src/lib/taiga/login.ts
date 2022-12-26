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

  const d: unknown = response.data;

  if (
    typeof d !== "object" ||
    d === null ||
    !("auth_token" in d) ||
    typeof d.auth_token !== "string"
  ) {
    throw new Error("Failure to login");
  }

  return d.auth_token;
}
