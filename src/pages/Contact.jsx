
import React from "react";
import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Switch } from "@/components/ui/switch";

export default function Contact() {
  const [mode, setMode] = useState("mail");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${mode} form submitted`);
  };

  const handleToggle = (checked) => {
    setMode(checked ? "message" : "mail");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Get in Touch
          </h1>
          <p className="text-muted-foreground mb-6">
            Choose your preferred contact method
          </p>

          <div className="flex items-center gap-4 mb-8">
            <span
              className={`text-sm font-medium ${
                mode === "mail" ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Mail
            </span>
            <Switch
              checked={mode === "message"}
              onCheckedChange={handleToggle}
              aria-label="Toggle between Mail and Message"
            />
            <span
              className={`text-sm font-medium ${
                mode === "message" ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Message
            </span>
          </div>

          {mode === "mail" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <textarea
                  placeholder="Hi there!"
                  rows={5}
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Email
              </Button>
            </form>
          )}

          {mode === "message" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <textarea
                  placeholder="Hi there!"
                  rows={5}
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
