import getEnvValue from "./getEnvValue";

export function authenticate() {
  // Redirect user to Trello login page
  const url = new URL("https://trello.com/1/authorize");

  url.searchParams.set("expiration", "never");
  url.searchParams.set("name", "FocusQueue");
  url.searchParams.set("scope", "read,write");
  url.searchParams.set("response_type", "token");
  url.searchParams.set("callback_method", "fragment");
  url.searchParams.set("return_url", getEnvValue("VITE_TRELLO_RETURN_URL"));
  url.searchParams.set("key", getEnvValue("VITE_TRELLO_API_KEY"));

  window.location.href = url.toString();
}
