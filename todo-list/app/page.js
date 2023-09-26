"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(desc);
    setTitle("");
    setDesc("");
    
  };
  let renderTask = <h2>No Tasks Available</h2>
  return (
    <>
      <div className="bg-black">
        <h1 className="font-bold text-white p-5 text-5xl flex justify-center">
          My Todo List
        </h1>
      </div>
      <div className="flex justify-center">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="border-4 border-black m-5 text-4xl p-4 rounded-3xl"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="border-4 border-black m-5 text-4xl p-4 rounded-3xl"
          placeholder="Description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-black text-white text-3xl p-5 rounded-3xl m-5">
          Add Task
        </button>
      </form>
      </div>
      
  
      <div className="p-8 bg-slate-200">
        {renderTask}
      </div>
    </>
  );
};

export default page;
