import React, { Suspense } from "react";
const Dashboard = React.lazy(() => import('./dashboard'));
const Testimonials = React.lazy(() => import('./testimonials'));
const Features = React.lazy(() => import('./features'));
const Newsletter = React.lazy(() => import('./newsLetter'));



export default function MainLandpage(){
    return(
      <div style={{paddingTop:'10px'}}>
        <Suspense fallback={<div>Loading....</div>}>
        <Dashboard />
        <Testimonials />
        <Features />
        <Newsletter />
        </Suspense>
      </div>
    
    );
}