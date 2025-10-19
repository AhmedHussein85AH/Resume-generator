import React from 'react';

const TabBar = ({ tabs, currentTab, setCurrentTab }) => {

  const changeBy = (x) => {
    const index = tabs.findIndex((tab) => tab.key === currentTab);

    if (x < 0 && index > 0) {
      setCurrentTab(tabs[index - 1].key);
    }

    if (x > 0 && index < tabs.length - 1) {
      setCurrentTab(tabs[index + 1].key);
    }
  };

  const currentTabData = tabs.find(tab => tab.key === currentTab);
  const currentSectionTabs = tabs.filter(tab => tab.section === currentTabData?.section);

  return (
    <div className="mx-8 mb-8">
      {/* Enhanced Professional Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {currentTabData?.sectionName || 'Navigation'}
            </h2>
            <p className="text-xs text-gray-500">
              {currentTabData?.name || 'Select a section'}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
            onClick={() => changeBy(-1)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
            onClick={() => changeBy(1)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Enhanced Multi-Tab Navigation */}
      <div className="mb-6">
        {/* Tab Grid Layout */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {currentSectionTabs.map((tab, index) => (
            <button
              key={tab.key}
              onClick={() => setCurrentTab(tab.key)}
              className={`relative px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 group ${
                currentTab === tab.key
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 transform scale-105'
                  : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 hover:from-gray-200 hover:to-gray-300 hover:text-gray-800 hover:transform hover:scale-105 hover:shadow-md'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  currentTab === tab.key ? 'bg-white' : 'bg-gray-400'
                }`}></div>
                <span className="relative z-10 truncate">{tab.name}</span>
              </div>
              
              {currentTab === tab.key && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl opacity-90"></div>
              )}
              
              {currentTab === tab.key && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              )}
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          ))}
        </div>

        {/* Horizontal Scrollable Tab Bar */}
        <div className="mb-4">
          <div className="flex space-x-1 overflow-x-auto pb-2 scrollbar-hide">
            {currentSectionTabs.map((tab, index) => (
              <button
                key={`scroll-${tab.key}`}
                onClick={() => setCurrentTab(tab.key)}
                className={`flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                  currentTab === tab.key
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/30'
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 hover:from-gray-200 hover:to-gray-300 hover:text-gray-800 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center space-x-1">
                  <span>{tab.name}</span>
                  {currentTab === tab.key && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Progress Indicator */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-bold text-blue-600">
            {currentSectionTabs.findIndex(tab => tab.key === currentTab) + 1} / {currentSectionTabs.length}
          </span>
        </div>
        <div className="relative">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full transition-all duration-500 ease-out"
              style={{ 
                width: `${((currentSectionTabs.findIndex(tab => tab.key === currentTab) + 1) / currentSectionTabs.length) * 100}%` 
              }}
            ></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TabBar;
