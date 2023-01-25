import GeneralHome from './GeneralHome'
import DoctorsMain from './pages/doctors/DoctorsMain'
import NurseMain from './pages/nurse/NurseMain'
import ReceptionistMain from './pages/receptionist/ReceptionistMain'
import PharmacyMain from './pages/pharmacy/PharmacyMain'
import {Routes, Route} from 'react-router-dom'

import { ProtectedRoute, UnProtectedRoute } from './context/Routes'

import {UserContextProvider } from './context/UserContext';

// Doctor
import { 
  Appointments,
  Consultation,
  DashboardData,
  PatientsHistory
} from './pages/doctors';



// Nurse
import {
  TakeVitals,
  VitalsHistory
} from './pages/nurse'

import ParentNavigation from './navigation/parentNavigation'
import Login from './pages/Login'
import SignIn from './pages/SignIn'
import { useState } from 'react'

function App() {
  const[user, setUser] = useState(false);


  return (
    <UserContextProvider>

      <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <ParentNavigation>
                <GeneralHome />
              </ParentNavigation>
            </ProtectedRoute>
          } />

          <Route path='/login' element={
            <UnProtectedRoute>
              <Login />
            </UnProtectedRoute>
          } />

          <Route path='/signin' element={
            <UnProtectedRoute>
              <SignIn />
            </UnProtectedRoute>
          } />

          <Route path='/dashboard' element={
            <ProtectedRoute>
              <ParentNavigation>
                <DashboardData />
              </ParentNavigation>
              
            </ProtectedRoute>
          } />

          <Route path='/doctor' element={
            <ProtectedRoute>
              <ParentNavigation>
                <DoctorsMain />
              </ParentNavigation>
            </ProtectedRoute>
          } />

          <Route path='/reception' element={
            <ProtectedRoute>
              <ParentNavigation>
                <ReceptionistMain />
              </ParentNavigation>
            </ProtectedRoute>
          } />
          <Route path='/nurse' element={
            <ProtectedRoute>
              <ParentNavigation>
                <NurseMain />
              </ParentNavigation>
            </ProtectedRoute>
          } />
      </Routes>
      
    </UserContextProvider>
  )
}

export default App
