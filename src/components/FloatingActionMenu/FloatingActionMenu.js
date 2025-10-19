import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as _ from 'lodash';

import AppContext from '../../context/AppContext';

// Import all tab components
import ProfileTab from '../LeftSidebar/tabs/Profile';
import AddressTab from '../LeftSidebar/tabs/Address';
import ContactsTab from '../LeftSidebar/tabs/Contacts';
import ObjectiveTab from '../LeftSidebar/tabs/Objective';
import WorkTab from '../LeftSidebar/tabs/Work';
import EducationTab from '../LeftSidebar/tabs/Education';
import AwardsTab from '../LeftSidebar/tabs/Awards';
import ExtrasTab from '../LeftSidebar/tabs/Extras';
import LanguagesTab from '../LeftSidebar/tabs/Languages';
import ReferencesTab from '../LeftSidebar/tabs/References';
import TemplatesTab from '../RightSidebar/tabs/Templates';
import ColorsTab from '../RightSidebar/tabs/Colors';
import FontsTab from '../RightSidebar/tabs/Fonts';
import ActionsTab from '../RightSidebar/tabs/Actions';
import SettingsTab from '../RightSidebar/tabs/Settings';
import AboutTab from '../RightSidebar/tabs/About';
import ResumeAnalytics from './ResumeAnalytics';
import ResumeHistory from './ResumeHistory';

const FloatingActionMenu = () => {
  const { t } = useTranslation('rightSidebar');
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { data, theme, settings } = state;

  const [isOpen, setIsOpen] = useState(true); // Always open by default
  const [isPinned, setIsPinned] = useState(true); // Always pinned by default
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentTab, setCurrentTab] = useState('profile');
  const [saveStatus, setSaveStatus] = useState('saved'); // 'saving', 'saved', 'error'

  // Clean, minimal sections inspired by Enhancv
  const sections = [
    {
      key: 'profile',
      name: 'Profile',
      icon: '👤',
      component: () => <ProfileTab data={data} onChange={onChange} />
    },
    {
      key: 'work',
      name: 'Experience',
      icon: '💼',
      component: () => <WorkTab data={data} onChange={onChange} />
    },
    {
      key: 'education',
      name: 'Education',
      icon: '🎓',
      component: () => <EducationTab data={data} onChange={onChange} />
    },
    {
      key: 'skills',
      name: 'Skills',
      icon: '⚡',
      component: () => <ExtrasTab data={data} onChange={onChange} />
    },
    {
      key: 'templates',
      name: 'Templates',
      icon: '🎨',
      component: () => <TemplatesTab theme={theme} onChange={onChange} />
    },
    {
      key: 'fonts',
      name: 'Fonts',
      icon: '🔤',
      component: () => <FontsTab theme={theme} onChange={onChange} />
    },
    {
      key: 'colors',
      name: 'Colors',
      icon: '🌈',
      component: () => <ColorsTab theme={theme} onChange={onChange} />
    },
    {
      key: 'actions',
      name: 'Actions',
      icon: '⚙️',
      component: () => <ActionsTab data={data} theme={theme} dispatch={dispatch} />
    },
    {
      key: 'analytics',
      name: 'Analytics',
      icon: '📊',
      component: () => <ResumeAnalytics data={data} />
    },
    {
      key: 'history',
      name: 'History',
      icon: '🕒',
      component: () => <ResumeHistory data={data} dispatch={dispatch} />
    }
  ];

  const onChange = (key, value) => {
    setSaveStatus('saving');
    dispatch({
      type: 'on_input',
      payload: {
        key,
        value,
      },
    });

    dispatch({ type: 'save_data' });
    
    // Show saved status briefly
    setTimeout(() => {
      setSaveStatus('saved');
    }, 500);
  };

  const handleTabClick = (tab) => {
    setCurrentTab(tab.key);
  };

  const handlePinToggle = () => {
    setIsPinned(!isPinned);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const currentSection = sections.find(s => s.key === currentTab);

  return (
    <>
      {/* Fixed Side Panel - Left Side */}
      <div className={`fixed top-0 left-0 h-full bg-white shadow-2xl border-r border-gray-200 z-40 overflow-hidden ${isMinimized ? 'w-16' : 'w-96'}`} style={{ maxWidth: isMinimized ? '64px' : '384px', minWidth: isMinimized ? '64px' : '384px' }}>
          <div className="h-full flex flex-col">
            {/* Clean Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              {!isMinimized ? (
                <>
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-semibold text-gray-800">Resume Builder</h3>
                    {/* Auto-save Indicator */}
                    <div className="flex items-center space-x-1">
                      {saveStatus === 'saving' && (
                        <div className="flex items-center space-x-1 text-blue-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                          <span className="text-xs">Saving...</span>
                        </div>
                      )}
                      {saveStatus === 'saved' && (
                        <div className="flex items-center space-x-1 text-green-600">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-xs">Saved</span>
                        </div>
                      )}
                      {saveStatus === 'error' && (
                        <div className="flex items-center space-x-1 text-red-600">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span className="text-xs">Error</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
              {/* Pin/Unpin Button */}
              <button
                onClick={handlePinToggle}
                className={`p-1 rounded transition-colors duration-200 ${
                  isPinned
                    ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                    : 'hover:bg-gray-100 text-gray-500'
                }`}
                title={isPinned ? 'Unpin sidebar' : 'Pin sidebar'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isPinned ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  )}
                </svg>
              </button>

              {/* Minimize Button */}
              <button
                onClick={handleMinimize}
                className="p-1 hover:bg-gray-100 rounded transition-colors duration-200 text-gray-500"
                title="Minimize sidebar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
            </div>
                </>
              ) : (
                <div className="flex flex-col items-center space-y-2">
                  <button
                    onClick={handleMinimize}
                    className="p-1 hover:bg-gray-100 rounded transition-colors duration-200 text-gray-500"
                    title="Expand sidebar"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                  <div className="text-xs text-gray-500 font-medium">RB</div>
                </div>
              )}
            </div>

            {/* Minimal Tab Navigation */}
            {!isMinimized && (
              <div className="p-4 border-b border-gray-100">
                <div className="grid grid-cols-2 gap-2">
                  {sections.map(tab => (
                    <button
                      key={tab.key}
                      onClick={() => handleTabClick(tab)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        currentTab === tab.key
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                      }`}
                    >
                      <span className="text-base">{tab.icon}</span>
                      <span>{tab.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Content Area */}
            {!isMinimized && (
              <div className="flex-1 overflow-y-auto overflow-x-hidden p-4">
                <div className="w-full max-w-full overflow-hidden">
                  {currentSection && currentSection.component()}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && !isPinned && (
        <div 
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingActionMenu;
