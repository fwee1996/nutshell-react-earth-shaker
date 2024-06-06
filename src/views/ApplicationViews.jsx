

import { Outlet, Route, Routes, Navigate } from 'react-router-dom';
import { NavBar } from '../components/nav/NavBar.jsx';
import { EventList } from '../components/events/EventList.jsx';
import { EventDetails } from '../components/events/EventDetails.jsx';
import { AllNews } from '../components/AllNews.jsx';
import { EventForm } from '../components/forms/EventForm.jsx';
import { EventEditForm } from '../components/forms/EventEditForm.jsx';

export const ApplicationViews = () => {
  return (
    <>
      <NavBar />
      <Routes>
        {/* /login is default page for when app is first opened */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="events" element={<EventList />} />
        <Route path="events/new" element={<EventForm />} />
        <Route path="events/:eventId" element={<EventDetails />} />
        <Route path="news" element={<AllNews />} />
        <Route path="events/edit/:eventId" element={<EventEditForm/>} />
      </Routes>
      <Outlet />
    </>
  );
};
