import React from 'react';

export default function GetQuoteFrom() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold ">Quote request</h2>
      <form>
        {/* name 입력 */}
        <div>
          <input
            type="text"
            placeholder="name"
            className="w-full p-3 bg-gray rounded mb-4"
          />
        </div>
        {/* phone number 입력 */}
        <input
          type="tel"
          placeholder="phone number"
          className="w-full p-3 bg-gray rounded mb-4"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
