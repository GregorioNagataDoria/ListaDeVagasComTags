import React, { useState } from "react";

import JobList from "./JobList.js";
import "./Main.css";

export default function Main() {
  return (
    <div className="background">
      <div className="background-helper" />
      <JobList />
    </div>
  );
}
