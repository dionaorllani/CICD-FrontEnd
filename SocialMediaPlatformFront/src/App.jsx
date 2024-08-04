import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/homepage/Homepage";
import Profile from "./pages/profile/Profile";
import Events from "./pages/homepage/Events";
import Groups from "./pages/homepage/Groups";
import Notifications from "./pages/homepage/Notifications";
import Settings from "./pages/homepage/Settings";
import Friends from "./pages/profile/Friends";
import About from "./pages/profile/About";
import Photos from "./pages/profile/Photos";
import Posts from "./pages/profile/Posts";
import Videos from "./pages/profile/Videos";
import ProfileEvents from "./pages/profile/ProfileEvents";
import ProfileGroups from "./pages/profile/ProfileGroups";
import Followers from "./pages/profile/Followers";
import Following from "./pages/profile/Following";
import SingleEvent from "./pages/homepage/SingleEvent";
import SingleGroup from "./pages/homepage/SingleGroup";
import Messages from "./pages/chat/Messages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="home" element={<Homepage />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<Posts />} />
            <Route path="friends" element={<Friends />} />
            <Route path="followers" element={<Followers />} />
            <Route path="following" element={<Following />} />
            <Route path="about" element={<About />} />
            <Route path="photos" element={<Photos />} />
            <Route path="videos" element={<Videos />} />
            <Route path="events" element={<ProfileEvents />} />
            <Route path="groups" element={<ProfileGroups />} />
          </Route>
          <Route path="events" element={<Events />} />
          <Route path="events/:id" element={<SingleEvent />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="groups" element={<Groups />} />
          <Route path="groups/:id" element={<SingleGroup />} />
          <Route path="messages" element={<Messages />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route index element={<Navigate replace to="login" />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
