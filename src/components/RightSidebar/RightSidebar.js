import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import AppContext from '../../context/AppContext';
import TabBar from '../../shared/TabBar';
import TemplatesTab from './tabs/Templates';
import ColorsTab from './tabs/Colors';
import FontsTab from './tabs/Fonts';
import ActionsTab from './tabs/Actions';
import AboutTab from './tabs/About';
import SettingsTab from './tabs/Settings';

const RightSidebar = () => {
  const { t } = useTranslation('rightSidebar');

  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { data, theme, settings } = state;

  const tabs = [
    {
      key: 'templates',
      name: t('templates.title'),
    },
    {
      key: 'colors',
      name: t('colors.title'),
    },
    {
      key: 'fonts',
      name: t('fonts.title'),
    },
    {
      key: 'actions',
      name: t('actions.title'),
    },
    {
      key: 'settings',
      name: t('settings.title'),
    },
    {
      key: 'about',
      name: t('about.title'),
    },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0].key);

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

  const renderTabs = () => {
    switch (currentTab) {
      case tabs[0].key:
        return <TemplatesTab theme={theme} onChange={onChange} />;
      case tabs[1].key:
        return <ColorsTab theme={theme} onChange={onChange} />;
      case tabs[2].key:
        return <FontsTab theme={theme} onChange={onChange} />;
      case tabs[3].key:
        return <ActionsTab data={data} theme={theme} dispatch={dispatch} />;
      case tabs[4].key:
        return <SettingsTab settings={settings} onChange={onChange} />;
      case tabs[5].key:
        return <AboutTab />;
      default:
        return null;
    }
  };

  return (
    <div
      id="rightSidebar"
      className="animated slideInRight z-10 h-screen bg-gradient-to-b from-white to-gray-50 col-span-1 shadow-xl overflow-y-scroll border-l border-gray-200"
    >
      {/* Professional Header */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Design Studio</h1>
            <p className="text-sm text-gray-500">Templates & Styling</p>
          </div>
        </div>
      </div>

      <TabBar tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="px-6 pb-8">{renderTabs()}</div>
    </div>
  );
};

export default RightSidebar;
