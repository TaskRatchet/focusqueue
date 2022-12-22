import getEnvValue from "./getEnvValue";

export function authenticate() {
  // Redirect user to Trello login page
  const url = new URL("https://trello.com/1/authorize");
  url.searchParams.set("expiration", "never");
  url.searchParams.set("name", "Trello Clone");
  url.searchParams.set("scope", "read,write");
  url.searchParams.set("response_type", "token");
  url.searchParams.set("key", getEnvValue("VITE_TRELLO_API_KEY"));
}
