"use client";
import React, { useEffect } from "react";
import texture1 from "/public/CursorBg.png";

export const HeroCursor = () => {
  useEffect(() => {
    let LegendaryCursor;

    // Dynamically import the library on the client
    import("legendary-cursor").then((module) => {
      LegendaryCursor = module.default || module;

      if (LegendaryCursor.init) {
        LegendaryCursor.init({
          lineSize: 0.08,
          opacityDecrement: 0.99,
          speedExpFactor: 0.8,
          lineExpFactor: 0.6,
          sparklesCount: 65,
          maxOpacity: 0.99,
          texture1: texture1,
        });
      }
    });

    return () => {
      if (LegendaryCursor && LegendaryCursor.destroy) {
        LegendaryCursor.destroy();
      }
    };
  }, []);

  return <div></div>;
};
