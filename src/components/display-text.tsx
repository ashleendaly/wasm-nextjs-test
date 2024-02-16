"use client";

import { useState } from "react";
import init, { greet } from "../../public/rust-lib/rust_lib.js";
import wasmUrl from "../../config";

const DisplayText = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleGreet = async () => {
    await init(wasmUrl).then(() => {
      const greetingText = greet(name);
      setGreeting(greetingText);
    });
  };

  return (
    <div className="flex-col text-center">
      <div className="flex ">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button onClick={handleGreet}>Greet</button>
      </div>
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default DisplayText;
