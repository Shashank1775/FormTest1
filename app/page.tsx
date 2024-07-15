'use client'
import Image from "next/image";
import { useState } from "react";
import axios from 'axios'

export default function Home() {
  const [title, setTitle] = useState("");

  function handleNoteAdd(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const data = { name:title };
    console.log(data);
    axios.post('/api/notes', data)
        .then((response) => {
            console.log(response.data);
        });
}

  return (
    <main className="">
      <div>
        <form onSubmit={handleNoteAdd}>
          <h1 className="">New Book</h1>
          <div className="mb-4">
            <label className="">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="title"
              className=" bg-red-100"
            />
          </div>
          <button
            type="submit"
            className=""
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
