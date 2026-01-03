import React from "react";
import Header from "../components/commom/Header";
import Profile from "../components/settings/Profile";
import DangerZone from "../components/settings/DangerZone";

const SettingsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title="Settings" />
      <main className="py-6 px-4 lg:px-8 max-w-4xl mx-auto">
        <Profile />
        <DangerZone/>
      </main>
    </div>
  );
};

export default SettingsPage;
