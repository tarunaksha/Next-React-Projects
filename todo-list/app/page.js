"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };
  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };
  let renderTask = <h2>No Tasks Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, idx) => {
      return (
        <li key={idx} className="flex justify-between items-center mb-8">
          <div className="flex justify-between w-2/3">
            <h4 className="text-2xl font-semibold">{task.title}</h4>
            <h5 className="text-lg font-medium">{task.desc}</h5>
          </div>
          <button
            onClick={() => {
              deleteHandler(idx);
            }}
            className="bg-red-500 text-white font-bold rounded px-5 py-2"
          >
            Delete
          </button>
        </li>
      );
    });
  }
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

      <div className="p-8 bg-slate-200">{renderTask}</div>
    </>
  );
};

export default page;
