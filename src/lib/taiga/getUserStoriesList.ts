import axios from "axios";

export default async function getUserStoriesList(
  token: string
): Promise<unknown> {
  const response = await axios.get("https://api.taiga.io/api/v1/userstories", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!(response.status === 200)) {
    throw new Error("Failure to get userstories list");
  }

  return response.data as unknown;
}
