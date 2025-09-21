// src/Home.tsx
import React from "react";
import { Button } from "@/components/ui/button";


export default function Home() {

  async function handleDownload() {
    const res = await fetch("http://localhost:3000/api/pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Invoice #123",
        content: "This invoice was generated with Puppeteer + Tailwind 🎉",
      }),
    })

    const blob = await res.blob()
    const url = window.URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "Document.pdf"
    a.click()
    window.URL.revokeObjectURL(url)
  }




  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Home page</h1>
      <Button onClick={handleDownload}>Download PDF</Button>
    </div>
  );
}
