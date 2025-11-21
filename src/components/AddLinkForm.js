import { useState } from "react";
import { createLink } from "../utils/api";

export default function AddLinkForm({ onCreated }) {
  const [target_url, setUrl] = useState("");
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");

  async function submit(e) {
    e.preventDefault();
    const response = await createLink({ target_url, code });

    if (response.error) setMsg(response.error);
    else {
      setMsg("Created!");
      setUrl("");
      setCode("");
      onCreated();
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <input
        value={target_url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        required
      />

      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Custom code (optional)"
      />

      <button type="submit">Create</button>

      {msg && <p className="msg">{msg}</p>}
    </form>
  );
}
