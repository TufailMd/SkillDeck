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
        className="flex-1 transition-all duration-220 ease-in-out ml-0 md:ml-[clamp(4.5rem,4vw,4.5rem)] xl:ml-[clamp(4.5rem,6vw,7.5rem)] 2xl:ml-[clamp(7.5rem,8vw,11rem)] p-grid-margin-mobile 
          md:p-grid-margin-desktop pb-24 md:pb-grid-margin-desktop 
          lg:max-w-[90rem] mx-auto w-full justify-center"
      >
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
