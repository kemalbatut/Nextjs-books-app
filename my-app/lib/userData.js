import { getToken } from "./authenticate";

async function request(url, method = "GET") {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites/${url}`, {
    method: method,
    headers: {
      "content-type": "application/json",
      "Authorization": `JWT ${getToken()}`
    },
  });

  if (res.status === 200) {
    return await res.json();
  } else {
    return [];
  }
}

export async function addToFavourites(id) {
  return await request(id, "PUT");
}

export async function removeFromFavourites(id) {
  return await request(id, "DELETE");
}

export async function getFavourites() {
  // Pass an empty string because the route is just .../favourites
  return await request(""); 
}