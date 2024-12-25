import { useState } from "react";

const Greet = () => {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/greet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    });
    const data = await res.json();
    setResponse(data.msg);
  };
  return (
    <div>
      Hey
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName((prev) => e.target.value)}
        />
        <button type="submit">greet</button>
      </form>
      <div>
        Response from server :<div>{response}</div>
      </div>
    </div>
  );
};

export default Greet;
