import React from 'react';

export default function GetQuoteFrom() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold">Quote request</h2>
      <form>
        <input
          type="text"
          placeholder="name"
          className="w-full p-3 bg-"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
