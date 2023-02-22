import getEnvValue from "@lib/getEnvValue";

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

export async function getCards(
  token: string,
  boardIds: string[]
): Promise<
  {
    id: string;
    name: string;
  }[]
> {
  const sets = boardIds.map(async (id) => {
    const url = new URL(`https://api.trello.com/1/board/${id}/cards`);

    url.searchParams.set("fields", "id,name");
    url.searchParams.set("token", token);
    url.searchParams.set("key", getEnvValue("VITE_TRELLO_API_KEY"));

    const res = await fetch(url.toString());
    const json = await res.json();

    console.log({ res, cards: json });

    return json;
  });

  const cards = await Promise.all(sets);

  return cards.flat();
}

export async function getBoards(
  token: string
): Promise<{ id: string; name: string }[]> {
  const url = new URL("https://api.trello.com/1/members/me/boards");

  url.searchParams.set("fields", "id,name");
  url.searchParams.set("token", token);
  url.searchParams.set("key", getEnvValue("VITE_TRELLO_API_KEY"));

  const res = await fetch(url.toString());
  const json = await res.json();

  return json;
}
