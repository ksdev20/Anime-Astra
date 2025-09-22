const backendUrl = import.meta.env.PUBLIC_BACKEND_URL;

const ep1 = backendUrl + "/api/getComments/";
const ep2 = backendUrl + "/api/addComment";

export async function getComments(slug) {
  return fetch(ep1 + slug, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.warn("Error : ", e.message);
      return false;
    });
}

export async function addComment(obj) {
  return fetch(ep2, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) return true;
    })
    .catch((e) => {
      console.warn("Error : ", e.message);
      return false;
    });
}
