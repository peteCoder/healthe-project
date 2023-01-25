import React from 'react'
import { DefaultNavbar } from "../../components/DefaultNavbar";
import DoctorsSidebar from './DoctorsSidebar';
import Appointments from "./Appointments"
import Consultation from "./Consultation"        
import PatientsHistory from "./PatientsHistory"        

function DoctorsMain() {
  return (
    <>
      <Appointments />
      <Consultation />
      <PatientsHistory />
    </>
    
  );
}

export default DoctorsMain