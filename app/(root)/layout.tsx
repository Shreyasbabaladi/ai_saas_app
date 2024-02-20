import React from "react";
import SideBar from "@/components/shared/SideBar";
import MobileNav from "@/components/shared/MobileNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <div className="root-container">
        <SideBar />
        <MobileNav />
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
