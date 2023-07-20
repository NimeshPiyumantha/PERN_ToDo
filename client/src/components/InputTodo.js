import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5 text-4xl font-bold">PERN Todo List</h1>
      <form className="flex mt-5 px-64 py-3" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control px-4 py-2 border rounded-lg w-96"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-green-400 px-4 py-2 text-white rounded-lg ml-2">
          Add
        </button>
      </form>
    </>
  );
};

export default InputTodo;
