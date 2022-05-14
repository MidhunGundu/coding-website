import React from 'react';
import {
  FaGoogle,
  FaFacebook,
  FaLinkedin,
  FaHackerrank,
  FaGithub,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: 'profile',
    text: 'Profile',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: 'https://www.google.com/intl/en_in/drive/',
    text: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: 'https://www.google.com/calendar/about/',
    text: 'calendar',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: 'https://www.google.com/docs/about/',
    text: 'documents',
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.hackerrank.com/',
    icon: <FaHackerrank />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/home',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://accounts.google.com/',
    icon: <FaGoogle />,
  },
  {
    id: 5,
    url: 'https://github.com/',
    icon: <FaGithub />,
  },
];
