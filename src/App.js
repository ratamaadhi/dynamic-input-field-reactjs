import React, { useState } from "react";
import InputField from "./components/InputField";

function App() {
  const [Inputs, setInputs] = useState([{ jenis: "", stok: 0, harga: 0 }]);
  const [deleted, setDeleted] = useState([]);

  const handleChange = (e, index) => {
    const values = [...Inputs];
    values[index][e.target.name] =
      e.target.attributes[2].value === "number"
        ? parseInt(e.target.value)
        : e.target.value;
    setInputs(values);
  };

  const handleSubmit = () => {
    const blankField = Inputs.filter(
      (input) =>
        input.jenis.length === 0 ||
        input.stok.toLocaleString().length === 0 ||
        input.harga.toLocaleString().length === 0 ||
        input.stok === 0 ||
        input.harga === 0 ||
        isNaN(input.stok) ||
        isNaN(input.harga)
    );
    if (blankField.length === 0) {
      console.log("Inputs ->", Inputs);
      console.log("deleted ->", deleted);
    } else {
      alert("masih ada field input yg kosong!", console.log(blankField));
    }
  };

  const handleAdd = () => {
    setInputs([...Inputs, { jenis: "", stok: 0, harga: 0 }]);
  };

  const handleRemove = (index) => {
    if (Inputs.length !== 1) {
      setInputs(Inputs.filter((input, i) => i !== index));
      setDeleted(Inputs.filter((input, i) => i === index));
    }
  };

  return (
    <div className="flex justify-start items-center h-screen w-full pt-4 flex-col bg-gray-900 font-sans">
      <h1 className="font-bold text-4xl uppercase p-4 text-white">
        Dynamic input field
      </h1>
      {Inputs.map((input, index) => (
        <div key={index} className="flex justify-evenly w-9/12">
          <InputField
            label="Jenis"
            name="jenis"
            value={input.jenis}
            onChange={handleChange}
            i={index}
            type="text"
          />
          <InputField
            label="Stok"
            name="stok"
            value={input.stok}
            onChange={handleChange}
            i={index}
            type="number"
          />
          <InputField
            label="Harga"
            name="harga"
            value={input.harga}
            onChange={handleChange}
            i={index}
            type="number"
          />
          <div className="flex flex-row justify-center items-end">
            <button
              className="w-12 h-7 text-white bg-red-400 rounded-md text-sm flex justify-center items-center mr-1"
              onClick={() => handleRemove(index)}
            >
              -
            </button>
            <button
              className="w-12 h-7 text-white bg-blue-400 rounded-md text-sm flex justify-center items-center ml-1"
              onClick={handleAdd}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <button
        className="bg-green-400 text-white rounded-md w-1/6 mt-4 h-7 flex justify-center items-center"
        onClick={handleSubmit}
      >
        submit
      </button>
    </div>
  );
}

export default App;
