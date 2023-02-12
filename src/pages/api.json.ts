import { storage } from "../db/firebaseConnection";

export async function get({ params, request }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
  const data = await res.json();
  return {
    body: JSON.stringify(data),
  };
}

// recieve audio file from client
export async function post(ctx) {
  const data = await ctx.request.formData();
  const text = data.get("content");
  const file = data.get("file");
  console.log(text);

  // upload audio file firebase

  //   const d = await request.body();
  //   const res = await fetch(`https://api.wit.ai/dictation?v=20221114`, {
  //     method: "POST",
  //     headers: {
  //       Authorization: "Bearer KXEXGMZRWY56K6NYQMDDN5X4D6OLX7H4",
  //       "Content-Type": "audio/mpeg3",
  //     },
  //     body: file,
  //   });

  //   const data = res.json();

  return {
    body: JSON.stringify(data.get("file")),
  };
}
