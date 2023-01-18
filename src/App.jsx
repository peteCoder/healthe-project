import GeneralHome from './GeneralHome'
import DoctorsMain from './pages/doctors/DoctorsMain'
import NurseMain from './pages/nurse/NurseMain'
import ReceptionistMain from './pages/receptionist/ReceptionistMain'
import PharmacyMain from './pages/pharmacy/PharmacyMain'
import {Routes, Route} from 'react-router-dom'

// Doctor
import { 
  Appointments,
  Consultation,
  DashboardData,
  PatientsHistory
} from './pages/doctors';

// Pharmacy
// import {PharmacyMain} from './pages/pharmacy';

// Nurse
import {
  TakeVitals,
  VitalsHistory
} from './pages/nurse'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/doctor' element={<DashboardData />} />
        <Route path='/doctor/appointments' element={<Appointments />} />
        <Route path='/doctor/patient-history' element={<Consultation />} />
      </Routes>
    </div>
  )
}

export default App
