"use client";
import React from "react";

export default function MapLocation() {
  return (
    <section className="w-full h-[400px]">
      <iframe
        title="Evenica Office Location"
        src="https://www.google.com/maps?q=3050+Harvester+Road,+Burlington,+ON&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </section>
  );
}
