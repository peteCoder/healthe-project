import React from 'react'
import ReceptionistSidebar from './ReceptionistSidebar'
import { DefaultNavbar } from '../../components/DefaultNavbar';
import SheduleAppointments from './SheduleAppointments'
import PatientsRegistration from './PatientsRegistration';
import PatientData from './PatientData';

function ReceptionistMain() {
return (
    <>
      <PatientsRegistration />
      <SheduleAppointments />
      <PatientData />
    </>
  );
}

export default ReceptionistMain