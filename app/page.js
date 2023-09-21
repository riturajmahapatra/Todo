import React from "react";

const page = () => {
  return (
    <>
      <h1 className="p-10 border bg-black uppercase text-white font-bold text-center text-5xl  ">
        {" "}
        MY ToDo App
      </h1>
      <form>
        <input
          type="text"
          className="p-5 border-zinc-700 border-2 m-10"
          placeholder="What's on your mind today"
        />
      </form>
    </>
  );
};

export default page;
