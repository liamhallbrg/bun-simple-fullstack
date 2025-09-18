// src/Home.tsx
import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome Home</h1>
      <Button>Click me</Button>
    </div>
  );
}
