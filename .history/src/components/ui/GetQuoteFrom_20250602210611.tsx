import React from 'react';

export default function GetQuoteFrom() {
  // 필드 데이터 배열
  const fields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'phone', label: 'Phone Number', type: 'tel' },
    { name: 'address', label: 'Address', type: 'textarea' },
    {
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
  <div></div>
)