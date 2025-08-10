import React from 'react';

interface FieldType {
  id: number;
  name: string;
  label: string;
  type: 'text' | 'tel' | 'textarea' | 'select';
  options?: OptionType[];
}
interface OptionType {
  value: string;
  text: string;
}

export default function GetQuoteFrom() {
  // 필드 데이터 배열
  const fields: FieldType[] = [
    { id: 1, name: 'name', label: 'Name', type: 'text' },
    { id: 2, name: 'phone', label: 'Phone Number', type: 'tel' },
    { id: 3, name: 'address', label: 'Address', type: 'textarea' },
    {
      id: 4,
      name: 'service',
      label: 'Service',
      type: 'select',
      options: [
        { value: 'home', text: 'Home Cleaning' },
        { value: 'office', text: 'Office Cleaning' },
        { value: 'window', text: 'Window Cleaning' },
        { value: 'strata', text: 'Strata Cleaning' },
        { value: 'deep', text: 'Deep Cleaning' },
        { value: 'regular', text: 'Regular Cleaning' },
      ],
    },
  ];

  // 입력필드 랜더링 함수

  const renderField = (field: FieldType) => {
    switch (field.type) {
      case 'text':
      case 'tel':
        return (
          <input
            type={field.type}
            name={field.name}
            className="w-full p-3 bg-gray-100 rounded border-0"
          />
        );
      case 'textarea':
        return (
          <textarea
            name={field.name}
            className="w-full p-3 bg-gray-100 rounded border-0"
            rows={2}
          />
        );
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2>Quote request</h2>
      <form className="space-y-4">
        {fields.map((field) => (
          <div key={field.id}>
            <label>{field.label}</label>
            {renderField(field)}
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
