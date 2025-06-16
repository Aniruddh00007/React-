import { useState } from 'react';

function App() {
  const [rang, setRang] = useState("olive"); 

  return (
    <div
      className="w-full h-screen duration-200"

      style={{backgroundColor: rang }} 
      
    >
      console.log(rang);
      <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl">

        
          <button
            onClick={() => setRang("blue")}
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setRang("green")}
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setRang("pink")}
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setRang("red")}
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setRang("yellow")}
            className="px-4 py-1 text-black rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
