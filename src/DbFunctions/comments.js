const backendUrl = import.meta.env.PUBLIC_BACKEND_URL;

const ep1 = backendUrl + "/api/getComments/";
const ep2 = backendUrl + "/api/addComment";
const ep3 = backendUrl + "/api/toggleLike/";
const ep4 = backendUrl + "/api/addReply/";

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
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) return true;
      return false;
    })
    .catch((e) => {
      console.warn("Error : ", e.message);
      return false;
    });
}

export async function toggleLike(_id, forReply = false, replyId) {
  const obj = !forReply ? { id: _id} : { id: _id, forReply, replyId };
  return fetch(ep3, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.warn("Error : ", e.message);
      return null;
    });
}

export async function addReply(commentId, replyObj) {
  return fetch(ep4, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({commentId, reply: replyObj}),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.warn("Error : ", e.message);
      return null;
    });
}
