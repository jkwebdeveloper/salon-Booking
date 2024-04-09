import Sidebar from "@/components/global/DashboardHeader/Sidebar";
import Button from "@/components/ui/button";
import React from "react";

const Reviews = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Button variant="primary">Stats</Button>
        <Button>Reviews</Button>
      </div>
    </div>
  );
};

export default Reviews;
