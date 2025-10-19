import React, { createContext, useReducer } from 'react';
import get from 'lodash/get';
import set from 'lodash/set';
import remove from 'lodash/remove';

import demoResumeData from '../assets/demo/resumedata.json';
import { move } from '../utils';

const initialState = {
  data: {
    resume:{
      "@context": [
		"https://Resume-generator.github.io/skill/context.json",
		{
			"gender": {
				"@id": "schema:gender",
				"@type": "@vocab"
			},
			"skill:classOfAward": {
				"@id": "skill:classOfAward",
				"@type": "@vocab"
			},
			"skill:securityClearance": {
				"@id": "skill:securityClearance",
				"@type": "@vocab"
			},
			"category": {
				"@id": "schema:category",
				"@type": "@vocab"
			},
			"dayOfWeek": {
				"@id": "schema:dayOfWeek",
				"@type": "@vocab"
			}
		}
      ],
      '@graph': [
        {
          "@type": "skill:Resume",
        },
        {
          "@type": "Person",
          givenName:[{'@language': 'en', '@value':'Ahmed'}, {'@language': 'ar', '@value':'أحمد'}],
          familyName: [{'@language': 'en', '@value':'Hussein'}, {'@language': 'ar', '@value':'حسين'}],
          address: [{
            "@id": "_:address",
            "@type": "PostalAddress",
            "hoursAvailable": {
              "@id": "_:address#hoursAvailable",
              "@type": "OpeningHoursSpecification",
              "validThrough": "2099-01-01"
            },
            "addressCountry": "Egypt",
            "streetAddress": "Alexandria",
            "addressRegion": "Alexandria",
            "addressLocality": "Alexandria",
            "postalCode": "21500",
            "contactType": "",
            "sameAs": "https://www.google.com/maps/place/Alexandria,+Egypt"
          }]
        }
      ]
    },
    profile: {
      heading: 'Profile',
      photo: '/images/1.png',
      firstName: 'Ahmed',
      lastName: 'Hussein',
      subtitle: 'Administrative coordinator',
      address: {
        line1: 'Alexandria, Egypt',
        line2: '',
        line3: '',
      },
      phone: '+1 (888) 888-8888',
      website: 'https://www.linkedin.com/in/ahmed-h-6331a0289',
      email: 'info@Resume-generator.org',
    },
    contacts: {
      "enable": true,
      heading: "Contacts"
    },
    address: {
      "enable": true,
      heading: 'Address'
    },
    objective: {
      enable: true,
      heading: 'Professional Objective',
      body: 'Dedicated administrative coordinator with extensive experience in office management and process optimization. Seeking to leverage strong organizational skills and attention to detail to contribute to a dynamic team environment while continuing to develop expertise in administrative operations and team coordination.',
    },
    work: {
      enable: true,
      heading: 'Work Experience',
      items: [
        {
          id: 'work-1',
          position: 'Administrative Coordinator',
          company: 'Direction X Corporation',
          location: 'Alexandria, Egypt',
          startDate: 'Jan 2018',
          endDate: 'Jan 2026',
          description: 'Managed administrative operations and coordinated office activities',
          achievements: [
            'Improved office efficiency by 25%',
            'Streamlined administrative processes',
            'Coordinated with multiple departments'
          ]
        }
      ],
    },
    education: {
      enable: true,
      heading: 'Education',
      items: [
        {
          id: 'edu-1',
          institution: 'Alexandria High School',
          degree: 'High School Diploma',
          location: 'Alexandria, Egypt',
          startDate: 'Jan 2001',
          endDate: 'Jan 2003',
          description: 'Completed high school education with focus on administrative studies'
        }
      ],
    },
    awards: {
      enable: true,
      heading: 'Honors & Awards',
      items: [
        {
          id: 'award-1',
          title: 'Employee of the Month',
          organization: 'Direction X Corporation',
          date: 'Dec 2023',
          description: 'Recognized for outstanding administrative performance'
        },
        {
          id: 'award-2',
          title: 'Excellence in Office Management',
          organization: 'Direction X Corporation',
          date: 'Jun 2023',
          description: 'Awarded for exceptional office coordination and management skills'
        }
      ],
    },
    certifications: {
      enable: true,
      heading: 'Certifications',
      items: [],
    },
    skills: {
      enable: true,
      heading: 'Skills',
      items: [
        {
          id: 'skill-1',
          name: 'Administrative Procedures',
          level: 'Beginner'
        },
        {
          id: 'skill-2',
          name: 'Office Management',
          level: 'Intermediate'
        },
        {
          id: 'skill-3',
          name: 'Data Entry',
          level: 'Advanced'
        },
        {
          id: 'skill-4',
          name: 'Customer Service',
          level: 'Intermediate'
        }
      ],
    },
    memberships: {
      enable: true,
      heading: 'Memberships',
      items: [],
    },
    languages: {
      enable: true,
      heading: 'Languages',
      items: [
        {
          id: 'lang-1',
          name: 'Arabic',
          level: 'Native'
        },
        {
          id: 'lang-2',
          name: 'English',
          level: 'Fluent'
        }
      ],
    },
    references: {
      enable: true,
      heading: 'References',
      items: [
        {
          id: 'ref-1',
          name: 'John Doe',
          position: 'Manager',
          company: 'Direction X Corporation',
          phone: '+1 (555) 123-4567',
          email: 'john.doe@directionx.com'
        },
        {
          id: 'ref-2',
          name: 'Jack Dee',
          position: 'Supervisor',
          company: 'Direction X Corporation',
          phone: '+1 (555) 987-6543',
          email: 'jack.dee@directionx.com'
        }
      ],
    },
    extras: {
      enable: true,
      heading: 'Personal Information',
      items: [],
    },
  },
  theme: {
    layout: 'Onyx',
    font: {
      family: '',
    },
    colors: {
      background: '#ffffff',
      primary: '#212121',
      accent: '#f44336',
    },
		"layoutblocks": {
			"onyx": [
				[
					"objective",
					"work",
					"education",
					"projects"
				],
				[
					"hobbies",
					"languages",
					"awards",
					"certifications"
				],
				[
					"skills",
					"references"
				]
			],
			"pikachu": [
				[
					"skills",
					"languages",
					"hobbies",
					"awards",
					"certifications"
				],
				[
					"work",
					"education",
					"projects",
					"references"
				]
			],
			"gengar": [
				[
					"objective",
					"skills"
				],
				[
					"awards",
					"certifications",
					"languages",
					"references",
					"hobbies"
				],
				[
					"work",
					"education",
					"projects"
				]
			],
			"castform": [
				[
					"awards",
					"certifications",
					"languages",
					"hobbies"
				],
				[
					"objective",
					"work",
					"education",
					"skills",
					"projects",
					"references"
				]
			],
			"glalie": [
				[
					"awards",
					"certifications",
					"hobbies"
				],
				[
					"objective",
					"work",
					"education",
					"skills",
					"projects",
					"languages",
					"references"
				]
			],
			"celebi": [
				[
					"awards",
					"certifications",
					"languages",
					"hobbies"
				],
				[
					"objective",
					"work",
					"education",
					"skills",
					"projects",
					"references"
				]
			]
		}
  },
  settings: {
    language: 'en',
  },
};

const reducer = (state, { type, payload }) => {
  let items;
  const newState = JSON.parse(JSON.stringify(state));

  switch (type) {
    case 'migrate_section':
      return set({ ...newState }, `data.${payload.key}`, payload.value);
    case 'add_item':
      items = get({ ...newState }, `${payload.key}`, []);
      items.push(payload.value);
      return set({ ...newState }, `${payload.key}`, items);
    case 'delete_item':
      items = get({ ...newState }, `${payload.key}`, []);
      remove(items, x => x.id === payload.value.id);
      return set({ ...newState }, `${payload.key}`, items);
    case 'move_item_up':
      items = get({ ...newState }, `${payload.key}`, []);
      move(items, payload.value, -1);
      return set({ ...newState }, `${payload.key}`, items);
    case 'move_item_down':
      items = get({ ...newState }, `${payload.key}`, []);
      move(items, payload.value, 1);
      return set({ ...newState }, `${payload.key}`, items);
    case 'on_input':
      return set({ ...newState }, payload.key, payload.value);
    case 'save_data':
      localStorage.setItem('state', JSON.stringify(newState));
      return newState;
    case 'import_data':
      if (payload === null) return initialState;

      for (const section of Object.keys(initialState.data)) {
        if (!(section in payload.data)) {
          payload.data[section] = initialState.data[section];
        }
      }

      return {
        ...newState,
        ...payload,
      };
    case 'load_demo_data':
      return {
        ...newState,
        ...demoResumeData,
      };
    case 'reset':
      return initialState;
    default:
      return newState;
  }
};

const AppContext = createContext(initialState);
const { Provider } = AppContext;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const AppProvider = StateProvider;
export const AppConsumer = AppContext.Consumer;

export default AppContext;
