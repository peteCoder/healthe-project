import React from 'react'
import { DefaultNavbar } from "../../components/DefaultNavbar";
import NurseSidebar from './NurseSidebar';
import TakeVitals from './TakeVitals';
import VitalsHistory from './VitalsHistory';

function NurseMain() {
  return (
    <>
      {/* main content */}
      <TakeVitals />
      <VitalsHistory />
    </>
  );
}

export default NurseMain