import React from 'react';

export default function GetQuoteFrom() {
  // 필드 데이터 배열
  const fields = [
    { id:1, name: 'name', label: 'Name', type: 'text' },
    { id:2,name: 'phone', label: 'Phone Number', type: 'tel' },
    { id:3,name: 'address', label: 'Address', type: 'textarea' },
    {id:4,
      name: 'service',
      label: 'Service',
      type: 'select',
      option: [
        { value: 'home', label: 'Home Cleaning' },
        { value: 'office', label: 'Office Cleaning' },
        { value: 'window', label: 'Window Cleaning' },
        { value: 'strata', label: 'Strata Cleaning' },
        { value: 'deep', label: 'Deep Cleaning' },
        { value: 'regular', label: 'Regular Cleaning' },
      ],
    },
  ];

  // 입력필드 랜더링 함수

const renderfield = (field) => {
  return (
    <input 
      type={field.type}
      name={field.name}
      className="w-full p-3 bg-gray-100 rounded border-0"
    />
  );
};

return(
  <div className='bg-white p-6 rounded-lg shadow-lg'>
    <h2>Quote request</h2>
    <form className='space-y-4'>
      {fields.map((field) => (
        <div key={field.id}>
          <label>
            {field.label}
          </label>
          {renderfield(field)}

        </div>
      
        
      ))}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors"
      >
        Summit
      </button>
    </form>

  </div>
)