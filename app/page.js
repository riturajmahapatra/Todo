"use client";
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const Page = () => {
  // Capitalize the component name (Page)
  const [title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [Main, setMain] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMain([...Main, { title, Desc }]);
    setDesc("");
    setTitle("");
    console.log(Main);
  };

  const deleteHandler = (index) => {
    // Pass the index as an argument
    let copyTask = [...Main];
    copyTask.splice(index, 1); // Use the index to remove the task
    setMain(copyTask);
    notify(); // Notify when a task is deleted
  };

  let rendertodo = <h1>No Todo is Active</h1>;

  const notify = () => toast.success("Successfully Deleted");

  if (Main.length > 0) {
    rendertodo = Main.map((val, index) => {
      return (
        <div
          key={index}
          className="flex gap-10 w-2/3 p-2 items-center justify-between"
        >
          <h1 className="text-2xl font-semibold uppercase">{val.title}</h1>
          <h2 className="text-lg font-medium capitalize">{val.Desc}</h2>
          <button
            className="justify-end"
            onClick={() => {
              deleteHandler(index); // Pass the index to deleteHandler
            }}
          >
            <MdDeleteOutline />
          </button>
        </div>
      );
    });
  }

  return (
    <>
      <h1 className="p-10 border bg-black uppercase text-white font-bold text-center text-5xl">
        {" "}
        MY ToDo App
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="p-5 border-zinc-700 border-2 m-10"
          placeholder="What's on your mind today"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="p-5 border-zinc-700 border-2 m-10"
          placeholder="Add Description"
          value={Desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="border px-3 py-4 bg-black rounded-lg text-white text-2xl">
          {" "}
          Add Task
        </button>
      </form>
      <div className="p-6 py-3 bg-yellow-100">
        <ol>{rendertodo}</ol>
      </div>
      <Toaster />
    </>
  );
};

export default Page;
