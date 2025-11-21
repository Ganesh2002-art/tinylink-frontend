const API = process.env.REACT_APP_API_URL;

export async function fetchLinks() {
  const res = await fetch(`${API}/api/links`);
  return res.json();
}

export async function createLink(payload) {
  const res = await fetch(`${API}/api/links`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function getLink(code) {
  const res = await fetch(`${API}/api/links/${code}`);
  return res.json();
}

export async function deleteLinkApi(code) {
  const res = await fetch(`${API}/api/links/${code}`, { method: "DELETE" });
  return res.status === 204;
}
