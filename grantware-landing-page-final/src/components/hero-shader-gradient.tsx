"use client"

import { useEffect, useState } from "react"
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react"

// ShaderGradient types are incomplete - these props work at runtime
const gradientProps = {
  axesHelper: "off",
  bgColor1: "#000000",
  bgColor2: "#000000",
  brightness: 1.2,
  cAzimuthAngle: 180,
  cDistance: 2.09,
  cPolarAngle: 88,
  cameraZoom: 1,
  color1: "#0000be",
  color2: "#0000e5",
  color3: "#0000e7",
  envPreset: "city",
  grain: "on",
  lightType: "3d",
  positionX: 0,
  positionY: -2.1,
  positionZ: 0,
  reflection: 0.1,
  rotationX: 0,
  rotationY: 0,
  rotationZ: 225,
  shader: "defaults",
  type: "waterPlane",
  uAmplitude: 0,
  uDensity: 1.8,
  uFrequency: 5.5,
  uSpeed: 0.2,
  uStrength: 3,
  uTime: 0.2,
  wireframe: false,
  zoomOut: false,
} as const

export function HeroShaderGradient() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return (
    <div
      className="fixed inset-0 z-0"
      style={{ pointerEvents: "none" }}
    >
      <ShaderGradientCanvas
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
        }}
        pixelDensity={1}
        fov={45}
      >
        <ShaderGradient
          animate={prefersReducedMotion ? "off" : "on"}
          {...(gradientProps as Record<string, unknown>)}
        />
      </ShaderGradientCanvas>
    </div>
  )
}

