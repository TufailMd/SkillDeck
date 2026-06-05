import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <div
        aria-hidden="true"
        className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary-container/20 blur-[120px] z-[-1] pointer-events-none "
      />

      <div
        aria-hidden="true"
        className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary-container/10 blur-[100px] z-[-1] pointer-events-none "
      />
      <main
        className="flex-1 md:ml-[4.5rem] p-grid-margin-mobile 
          md:p-grid-margin-desktop pb-24 md:pb-grid-margin-desktop 
          lg:max-w-[90rem] mx-auto w-full"
      >
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
