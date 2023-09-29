import React, { useState } from "react";

const Card = () => {
  const [currentColor, setCurrentColor] = useState("bg-slate-900");
  const changeColor = (newColor) => {
    setCurrentColor(newColor);
  };
  return (
    <div className={`flex flex-col items-center justify-end ${currentColor} h-screen w-screen`}>
      <div className="flex items-center justify-center mb-16 bg-white p-2 rounded-full h-15 w-auto">
        <button
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center ml-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => changeColor('bg-red-600')}
        >
          Red
        </button>
        <button
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() => changeColor('bg-green-600')}
        >
          Green
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => changeColor('bg-blue-700')}
        >
          Blue
        </button>
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-full border border-gray-200 bg-olive"
          onClick={() => changeColor('bg-olive')}
        >
          Olive
        </button>
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-full border border-gray-200 bg-gray-500"
          onClick={() => changeColor('bg-gray-500')}
        >
          Gray
        </button>

        <button
          type="button"
          className="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
          onClick={() => changeColor('bg-yellow-400')}
        >
          Yellow
        </button>
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-black focus:outline-none rounded-full border border-gray-200 bg-pink-400"
          onClick={() => changeColor('bg-pink-400')}
        >
          Pink
        </button>

        <button
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={() => changeColor('bg-purple-600')}
        >
          Purple
        </button>
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-black focus:outline-none rounded-full border border-gray-200 bg-gray-300"
          onClick={() => changeColor('bg-gray-300')}
        >
          Lavender
        </button>
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-black focus:outline-none rounded-full border border-gray-200 bg-white"
          onClick={() => changeColor('bg-white')}
        >
          White
        </button>
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-full border border-gray-200 bg-black"
          onClick={() => changeColor('bg-black')}
        >
          Black
        </button>
      </div>
    </div>
  );
};

export default Card;
