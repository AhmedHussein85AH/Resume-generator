import React, { useState, useContext } from 'react';
import * as _  from 'lodash';

import AppContext from '../../context/AppContext';
import TabBar from '../../shared/TabBar';
import ProfileTab from './tabs/Profile';
import AddressTab from './tabs/Address';
import ContactsTab from './tabs/Contacts';
import ObjectiveTab from './tabs/Objective';
import WorkTab from './tabs/Work';
import EducationTab from './tabs/Education';
import AwardsTab from './tabs/Awards';
import ExtrasTab from './tabs/Extras';
import LanguagesTab from './tabs/Languages';
import ReferencesTab from './tabs/References';
import MembershipsTab from './tabs/Memberships';

const LeftSidebar = () => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { data } = state;

  const tabs = [
    { key: 'profile', name: _.get(data, "profile.heading", "Profile") },
    { key: 'address', name: _.get(data, "address.headin", "Address") },
    { key: 'contacts', name: _.get(data, "contacts.heading", "Contacts") },
    { key: 'objective', name: _.get(data, "objective.heading", "Objective") },
    { key: 'work', name: _.get(data, "work.heading", "Work") },
    { key: 'education', name: _.get(data, "education.heading", "Education") },
    { key: 'awards', name: _.get(data, "awards.heading", "Awards")  },
    { key: 'memberships', name: _.get(data, "memberships.heading", "Memberships") },
    { key: 'languages', name: _.get(data, "languages.heading", "Languages") },
    { key: 'references', name: _.get(data, "references.heading", "References") },
    { key: 'extras', name: _.get(data, "extras.heading", "Extras") },
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
      case 'memberships':
        return <MembershipsTab data={data} onChange={onChange} />;
      case 'languages':
        return <LanguagesTab data={data} onChange={onChange} />;
      case 'references':
        return <ReferencesTab data={data} onChange={onChange} />;
      case 'extras':
        return <ExtrasTab data={data} onChange={onChange} />;
      default:
        return null;
    }
  };

  return (
    <div
      id="leftSidebar"
      className="animated slideInLeft z-10 h-screen bg-gradient-to-b from-white to-gray-50 col-span-1 shadow-xl overflow-y-scroll border-r border-gray-200"
    >
      {/* Professional Header */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Resume Builder</h1>
            <p className="text-sm text-gray-500">Professional Profile</p>
          </div>
        </div>
      </div>

      <TabBar tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="px-6 pb-8">{renderTabs()}</div>
    </div>
  );
};

export default LeftSidebar;
