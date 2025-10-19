import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as _ from 'lodash';

import AppContext from '../../context/AppContext';
import TabBar from '../../shared/TabBar';

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

const UnifiedSidebar = () => {
  const { t } = useTranslation('rightSidebar');
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { data, theme, settings } = state;

  // Organized sections for professional layout
  const sections = [
    {
      id: 'content',
      name: 'Content',
      icon: 'edit',
      color: 'blue',
      tabs: [
        { key: 'profile', name: _.get(data, "profile.heading", "Profile") },
        { key: 'address', name: _.get(data, "address.heading", "Address") },
        { key: 'contacts', name: _.get(data, "contacts.heading", "Contacts") },
        { key: 'objective', name: _.get(data, "objective.heading", "Objective") },
        { key: 'work', name: _.get(data, "work.heading", "Work") },
        { key: 'education', name: _.get(data, "education.heading", "Education") },
        { key: 'awards', name: _.get(data, "awards.heading", "Awards") },
        { key: 'languages', name: _.get(data, "languages.heading", "Languages") },
        { key: 'references', name: _.get(data, "references.heading", "References") },
        { key: 'extras', name: _.get(data, "extras.heading", "Extras") },
      ]
    },
    {
      id: 'design',
      name: 'Design',
      icon: 'palette',
      color: 'purple',
      tabs: [
        { key: 'templates', name: t('templates.title') },
        { key: 'colors', name: t('colors.title') },
        { key: 'fonts', name: t('fonts.title') },
      ]
    },
    {
      id: 'tools',
      name: 'Tools',
      icon: 'settings',
      color: 'green',
      tabs: [
        { key: 'actions', name: t('actions.title') },
        { key: 'settings', name: t('settings.title') },
        { key: 'about', name: t('about.title') },
      ]
    }
  ];

  // Flatten all tabs for TabBar
  const allTabs = sections.flatMap(section => 
    section.tabs.map(tab => ({
      ...tab,
      section: section.id,
      sectionName: section.name,
      sectionIcon: section.icon,
      sectionColor: section.color
    }))
  );

  const [currentTab, setCurrentTab] = useState(allTabs[0].key);
  const [currentSection, setCurrentSection] = useState(sections[0].id);

  const onChange = (key, value) => {
    dispatch({
      type: 'on_input',
      payload: {
        key,
        value,
      },
    });

    dispatch({ type: 'save_data' });
  };

  const handleTabChange = (tabKey) => {
    setCurrentTab(tabKey);
    const tab = allTabs.find(t => t.key === tabKey);
    if (tab) {
      setCurrentSection(tab.section);
    }
  };

  const renderTabs = () => {
    switch (currentTab) {
      // Content tabs
      case 'profile':
        return <ProfileTab data={data} onChange={onChange} />;
      case 'address':
        return <AddressTab data={data} onChange={onChange} />;
      case 'contacts':
        return <ContactsTab data={data} onChange={onChange} />;
      case 'objective':
        return <ObjectiveTab data={data} onChange={onChange} />;
      case 'work':
        return <WorkTab data={data} onChange={onChange} />;
      case 'education':
        return <EducationTab data={data} onChange={onChange} />;
      case 'awards':
        return <AwardsTab data={data} onChange={onChange} />;
      case 'languages':
        return <LanguagesTab data={data} onChange={onChange} />;
      case 'references':
        return <ReferencesTab data={data} onChange={onChange} />;
      case 'extras':
        return <ExtrasTab data={data} onChange={onChange} />;
      
      // Design tabs
      case 'templates':
        return <TemplatesTab theme={theme} onChange={onChange} />;
      case 'colors':
        return <ColorsTab theme={theme} onChange={onChange} />;
      case 'fonts':
        return <FontsTab theme={theme} onChange={onChange} />;
      
      // Tools tabs
      case 'actions':
        return <ActionsTab data={data} theme={theme} dispatch={dispatch} />;
      case 'settings':
        return <SettingsTab settings={settings} onChange={onChange} />;
      case 'about':
        return <AboutTab />;
      
      default:
        return null;
    }
  };

  const getSectionIcon = (sectionId) => {
    const section = sections.find(s => s.id === sectionId);
    return section ? section.icon : 'folder';
  };

  const getSectionColor = (sectionId) => {
    const section = sections.find(s => s.id === sectionId);
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600'
    };
    return colors[section?.color] || 'from-gray-500 to-gray-600';
  };

  return (
    <div
      id="unifiedSidebar"
      className="animated slideInLeft z-10 h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 col-span-1 shadow-2xl overflow-y-scroll border-r border-blue-200/50 backdrop-blur-sm"
      style={{ minWidth: '450px', maxWidth: '500px' }}
    >
      {/* Professional Header */}
      <div className="sticky top-0 z-20 bg-gradient-to-r from-white/95 via-blue-50/80 to-purple-50/60 backdrop-blur-md border-b border-blue-200/30 px-8 py-5">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 bg-gradient-to-br ${getSectionColor(currentSection)} rounded-xl flex items-center justify-center shadow-lg`}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Resume Builder</h1>
            <p className="text-sm text-gray-500">
              {sections.find(s => s.id === currentSection)?.name || 'Professional Tools'}
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Section Navigation */}
      <div className="px-8 py-5 border-b border-gray-100">
        <div className="grid grid-cols-3 gap-2">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => {
                const firstTab = section.tabs[0];
                setCurrentTab(firstTab.key);
                setCurrentSection(section.id);
              }}
              className={`flex flex-col items-center space-y-2 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                currentSection === section.id
                  ? `bg-gradient-to-br from-${section.color}-100 to-${section.color}-200 text-${section.color}-700 border border-${section.color}-300 shadow-lg shadow-${section.color}-500/20`
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-200 hover:shadow-md'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                  section.icon === 'edit' ? "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" :
                  section.icon === 'palette' ? "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" :
                  "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                } />
              </svg>
              <span className="text-xs">{section.name}</span>
              <div className={`w-2 h-2 rounded-full ${
                currentSection === section.id ? `bg-${section.color}-500` : 'bg-gray-300'
              }`}></div>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Stats Panel */}
      <div className="px-8 py-5 border-b border-gray-100">
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-2xl p-5 border border-blue-200/30 shadow-lg">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Resume Progress</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">
                {data ? Object.keys(data).filter(key => data[key] && Object.keys(data[key]).length > 0).length : 0}
              </div>
              <div className="text-xs text-gray-500">Sections</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">
                {theme && theme.layout ? 1 : 0}
              </div>
              <div className="text-xs text-gray-500">Template</div>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Completion</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '75%'}}></div>
            </div>
          </div>
        </div>
      </div>

      <TabBar tabs={allTabs} currentTab={currentTab} setCurrentTab={handleTabChange} />
      <div className="px-8 pb-8">{renderTabs()}</div>
    </div>
  );
};

export default UnifiedSidebar;
