'use client';
import React, { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';

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

export default function GetQuoteForm() {
  // 선택된 서비스 상태 관리
  const [selectedService, setSelectedService] = useState<OptionType | null>(
    null
  );

  // 에러 상태 관리
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // 폼 데이터 상태 관리
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });

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

  // 입력필드 렌더링 함수
  const renderField = (field: FieldType) => {
    switch (field.type) {
      case 'text':
      case 'tel':
        return (
          <div>
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              value={formData[field.name as keyof typeof formData]}
              onChange={(e) =>
                setFormData({ ...formData, [field.name]: e.target.value })
              }
              className={`w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:outline-none ${
                errors[field.name]
                  ? 'focus:ring-red-500 bg-red-50'
                  : 'focus:ring-blue-500'
              }`}
            />
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
            )}
          </div>
        );
      case 'textarea':
        return (
          <textarea
            id={field.name}
            name={field.name}
            className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            rows={2}
          />
        );
      case 'select':
        return (
          <Listbox value={selectedService} onChange={setSelectedService}>
            <div className="relative">
              {/* 선택 버튼 */}
              <Listbox.Button className="relative w-full p-3 bg-gray-100 rounded border-0 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                <span className="block truncate">
                  {selectedService
                    ? selectedService.text
                    : 'Select a service...'}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              {/* 옵션 목록 */}
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded border border-gray-200 py-1 text-base overflow-auto focus:outline-none">
                {field.options?.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    value={option}
                    className={({ active, selected }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                      } ${selected ? 'bg-blue-50' : ''}`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {option.text}
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        );
    }
  };

  // 폼 검증 함수
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // 이름 검증
    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // 에러가 없으면 true
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('폼 제출 성공!', formData);
      // 여기서 실제 제출 로직
    } else {
      console.log('검증 실패');
    }
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Selected service:', selectedService);
    // 여기서 폼 데이터를 처리합니다
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">Quote request</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field.id} className="space-y-2">
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-gray-700"
            >
              {field.label}
            </label>
            {renderField(field)}
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
