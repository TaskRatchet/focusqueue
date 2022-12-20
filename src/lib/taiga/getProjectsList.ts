import axios from "axios";

type Project = {
  id: number;
  name: string;
};

export default async function getProjectsList(
  token: string
): Promise<Array<Project>> {
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
