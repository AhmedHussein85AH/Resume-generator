import React from 'react';

const Dropdown = ({ className, label, value, onChange, options, optionItem }) => (
  <div className={"flex flex-col mb-2 "+ className} style={{display:'contents'}}>
    {label && (
      <label className="uppercase tracking-wide text-gray-600 text-xs font-semibold mb-2">
        {label}
      </label>
    )}
    <div className="relative w-full">
      <select
        className="appearance-none w-full bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-xl py-3 px-4 pr-10 text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:bg-gradient-to-r hover:from-blue-50 hover:to-white"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(optionItem)}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>
);

export default Dropdown;
