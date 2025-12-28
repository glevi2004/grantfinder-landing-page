"use client"

import { GoogleAnalytics } from "@next/third-parties/google"

// GA4 Measurement ID - this is public and safe to expose in client-side code
const GA_MEASUREMENT_ID = "G-FF5EQZN43T"

export function GoogleAnalyticsComponent() {
  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
}

// Utility function to track custom events
export function trackEvent(
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters)
  }
}

// Declare gtag on window for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, string | number | boolean>
    ) => void
  }
}

