'use client';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';

interface FieldType {
  id: number;
  name: string;
  label: string;
  type: 'text' | 'tel' | 'textarea' | 'select';
  options?: OptionType[];
  validation?: {
    required?: string;
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
}

interface OptionType {
  value: string;
  text: string;
}

interface FormData {
  name: string;
  phone: string;
  address: string;
  service: OptionType | null;
}

export default function GetQuoteForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  // react-hook-form 설정
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  // 필드 데이터 배열 (validation 규칙 포함)
  const fields: FieldType[] = [
    {
      id: 1,
      name: 'name',
      label: 'Name',
      type: 'text',
      validation: { required: 'Please enter your name' },
    },
    {
      id: 2,
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      validation: {
        required: 'Please enter your phone number',
        pattern: {
          value: /^[0-9\-\+\s\(\)]+$/,
          message: 'Please enter a valid phone number',
        },
      },
    },
    {
      id: 3,
      name: 'address',
      label: 'Address',
      type: 'textarea',
      validation: { required: 'Please enter your address' },
    },
    {
      id: 4,
      name: 'service',
      label: 'Service',
      type: 'select',
      validation: { required: 'Please select a service' },
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
              {...register(field.name as keyof FormData, field.validation)}
              id={field.name}
              type={field.type}
              className={`w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:outline-none ${
                errors[field.name as keyof FormData]
                  ? 'focus:ring-red-500 bg-red-50'
                  : 'focus:ring-blue-500'
              }`}
            />
            {errors[field.name as keyof FormData] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[field.name as keyof FormData]?.message}
              </p>
            )}
          </div>
        );

      case 'textarea':
        return (
          <div>
            <textarea
              {...register(field.name as keyof FormData, field.validation)}
              id={field.name}
              className={`w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:outline-none resize-none ${
                errors[field.name as keyof FormData]
                  ? 'focus:ring-red-500 bg-red-50'
                  : 'focus:ring-blue-500'
              }`}
              rows={2}
            />
            {errors[field.name as keyof FormData] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[field.name as keyof FormData]?.message}
              </p>
            )}
          </div>
        );

      case 'select':
        return (
          <Controller
            name="service"
            control={control}
            rules={field.validation}
            render={({ field: controllerField }) => (
              <div>
                <Listbox
                  value={controllerField.value || ''}
                  onChange={controllerField.onChange}
                >
                  <div className="relative">
                    <Listbox.Button
                      className={`relative w-full p-3 bg-gray-100 rounded border-0 text-left focus:outline-none focus:ring-2 cursor-pointer ${
                        errors.service
                          ? 'focus:ring-red-500 bg-red-50'
                          : 'focus:ring-blue-500'
                      }`}
                    >
                      <span className="block truncate">
                        {controllerField.value
                          ? controllerField.value.text
                          : 'Select a service...'}
                      </span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
                      </span>
                    </Listbox.Button>

                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded border border-gray-200 py-1 text-base overflow-auto focus:outline-none">
                      {field.options?.map((option) => (
                        <Listbox.Option
                          key={option.value}
                          value={option}
                          className={({ active, selected }) =>
                            `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                              active
                                ? 'bg-blue-100 text-blue-900'
                                : 'text-gray-900'
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
                                  <CheckIcon className="h-5 w-5" />
                                </span>
                              )}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.service.message}
                  </p>
                )}
              </div>
            )}
          />
        );
    }
  };

  // 폼 제출 핸들러
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          address: data.address,
          service: data.service?.text, // 중요: .text로 서비스명 전송
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert('✅ Quote request submitted successfully!\n\nThank you for your inquiry. We will contact you within 24 hours with your free quote.\n\nPlease check your phone and email for our response.');
        reset(); // 폼 리셋
      } else {
        alert(`❌ Error: ${result.error}`);
      }
    } catch (error) {
      alert('❌ Network error occurred. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Quote request</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
}
