import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumAllowed) str += "0123456789";
    if (isCharAllowed) str += "!@#$%^&*(){}[]~`?";

    for (let i = 1; i <= length; i++) {
      let randomNum = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomNum);
    }
    setPassword(pass);
  }, [length, isNumAllowed, isCharAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumAllowed, isCharAllowed, passwordGenerator]);

  return (
    <div className="h-screen w-full bg-slate-900 p-16">
      <div className="h-36 max-w-4xl  mx-auto shadow-md rounded-3xl px-5 text-orange-500 bg-gray-500">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 shrink-0"
            onClick={copyToClipboard}
          >
            copy
          </button>
        </div>
        <div className="flex items-center justify-evenly text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name="ip-range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="ip-range">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="checkbox"
              defaultChecked={isNumAllowed}
              onChange={() => setIsNumAllowed((prev) => !prev)}
            />
            <label htmlFor="checkbox">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="checkbox"
              defaultChecked={isCharAllowed}
              onChange={() => setIsCharAllowed((prev) => !prev)}
            />
            <label htmlFor="checkbox">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
