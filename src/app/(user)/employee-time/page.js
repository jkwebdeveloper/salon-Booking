import React from "react";

const TimeDate = () => {
  return (
    <div className="container w-full ">
      <div className="flex flex-col min-h-[55dvh] gap-4 md:flex-row md:mb-10 bg-[#F8F8FA] mx-auto w-2/3 mt-10">
        <div className="h-fit min-h-[350px] md:w-[40%] p-5 lg:w-[25%] w-[90%] mx-auto space-y-5 z-2 ">
          <p>Employee & Time</p>
        </div>
        <div className="md:w-4/5 w-[90%] mx-auto space-y-5  h-fit min-h-[350px] z-2">
          <p>My basket</p>
        </div>
      </div>
    </div>
  );
};

export default TimeDate;
