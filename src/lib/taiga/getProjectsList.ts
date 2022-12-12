import axios from "axios";

export default async function getProjectsList(token: string) {
  const response = await axios.get("https://api.taiga.io/api/v1/projects", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!(response.status === 200)) {
    throw new Error("Failure to get projects list");
  }

  return response.data;
}
