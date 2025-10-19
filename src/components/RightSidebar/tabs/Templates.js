import React, { useState } from 'react';

import templates from '../../../templates';

const TemplatesTab = ({ theme, onChange }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateClick = (template) => {
    if (!template.disable) {
      onChange('theme.layout', template.key);
    } else {
      alert("This template is under development");
    }
  };

  const handleViewTemplate = (template, e) => {
    e.stopPropagation(); // Prevent template selection when clicking view button
    setSelectedTemplate(template);
  };

  const closeModal = () => {
    setSelectedTemplate(null);
  };

  return (
    <div className="space-y-6">
      {/* Professional Header */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Choose Template</h3>
        <p className="text-sm text-gray-500">Select a professional design for your resume</p>
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-2 gap-6">
        {templates.map(x => (
          <div 
            key={x.key} 
            className={`relative group cursor-pointer transition-all duration-300 ${
              theme.layout.toLowerCase() === x.key
                ? 'transform scale-105' 
                : 'hover:transform hover:scale-105'
            }`}
            onClick={() => handleTemplateClick(x)}
          >
            {/* Template Preview Card */}
            <div className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
              theme.layout.toLowerCase() === x.key
                ? 'border-blue-500 shadow-xl shadow-blue-500/30'
                : 'border-gray-300 hover:border-blue-400 shadow-lg hover:shadow-xl'
            }`}>
              <img
                className="w-full h-40 object-contain bg-white transition-transform duration-300 group-hover:scale-105"
                src={x.preview}
                alt={x.name}
              />
              
              {/* View Template Button */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => handleViewTemplate(x, e)}
                  className="flex items-center space-x-1 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white hover:shadow-lg transition-all duration-200 text-gray-700 hover:text-gray-900"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-xs font-medium">View</span>
                </button>
              </div>
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                theme.layout.toLowerCase() === x.key ? 'opacity-100' : ''
              }`}>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center justify-center space-x-2">
                    {theme.layout.toLowerCase() === x.key ? (
                      <>
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-white">Selected</span>
                      </>
                    ) : (
                      <>
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-white">Preview</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Template Name */}
            <div className="mt-4 text-center">
              <p className={`text-base font-semibold transition-colors duration-200 ${
                theme.layout.toLowerCase() === x.key
                  ? 'text-blue-600'
                  : 'text-gray-800 group-hover:text-gray-900'
              }`}>
                {x.name}
              </p>
              {x.disable && (
                <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold text-orange-700 bg-orange-100 rounded-full border border-orange-200">
                  Coming Soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Professional Footer */}
      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-400">
          Templates are optimized for A4 format
        </p>
      </div>

      {/* Template Preview Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{selectedTemplate.name}</h3>
                  <p className="text-sm text-gray-500">Template Preview</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="flex justify-center">
                <img
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  src={selectedTemplate.preview}
                  alt={selectedTemplate.name}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
              <div className="text-sm text-gray-500">
                Click outside or press ESC to close
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
                >
                  Close
                </button>
                {!selectedTemplate.disable && (
                  <button
                    onClick={() => {
                      onChange('theme.layout', selectedTemplate.key);
                      closeModal();
                    }}
                    className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    Use This Template
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplatesTab;
