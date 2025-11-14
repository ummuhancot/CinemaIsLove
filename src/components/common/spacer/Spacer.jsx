"use client";

import { useEffect, useState } from "react";

export const Spacer = ({ height = 30 }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div style={{ height: "30px" }}></div>;
  }

  return <div style={{ height: `${height}px` }}></div>;
};
