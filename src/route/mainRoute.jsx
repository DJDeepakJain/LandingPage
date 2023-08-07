import React from 'react';
const MainLandpage = React.lazy(()=>import('../screens/mainLandpage'));
const TermsService = React.lazy(()=>import('../screens/pages/termsService'));
const PrivacyPolicy = React.lazy(()=>import('../screens/pages/privecyPolicy'));
const CookiePolicy = React.lazy(()=>import('../screens/pages/cookies'));
const ApiAgreement = React.lazy(()=>import('../screens/pages/apiPolicy'));
const UserAgreement = React.lazy(()=>import('../screens/pages/userAgreement'));

const Pagesroute = [
  { path: '/', element: <MainLandpage /> },
  { path: '/termsService', element: <TermsService /> },
  { path: '/privecyPolicy', element: <PrivacyPolicy /> },
  { path: '/cookies', element: <CookiePolicy /> },
  { path: '/apiPolicy', element: <ApiAgreement /> },
  { path: '/userAgreement', element: <UserAgreement /> }
  
];

export default Pagesroute;