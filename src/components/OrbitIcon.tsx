"use client";

export default function OrbitIcon() {
  return (
    <div className="relative ml-1 mt-2 h-10 w-10 shrink-0">
      {/* Orbit Ring */}
      <div className="absolute inset-0 rounded-full border border-stone-400" />

      {/* Center Planet */}
      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-600" />

      {/* Orbiting Satellite */}
      <div className="absolute inset-0 animate-orbit">
        <div className="absolute left-1/2 -top-[2px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-stone-700" />
      </div>
    </div>
  );
}