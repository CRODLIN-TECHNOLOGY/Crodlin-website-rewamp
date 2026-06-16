"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import type React from "react"

interface LayeredTextProps {
  lines?: Array<{ top: string; bottom: string }>
  fontSize?: string
  lineHeight?: number
  className?: string
}

export function LayeredText({
  lines = [
    { top: " ",        bottom: "BUILD"    },
    { top: "BUILD",    bottom: "SHIP"     },
    { top: "SHIP",     bottom: "SCALE"    },
    { top: "SCALE",    bottom: "INNOVATE" },
    { top: "INNOVATE", bottom: "GROW"     },
    { top: "GROW",     bottom: "REPEAT"   },
    { top: "REPEAT",   bottom: " "        },
  ],
  fontSize = "52px",
  lineHeight = 48,
  className = "",
}: LayeredTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef  = useRef<gsap.core.Timeline>()

  const calculateTranslateX = (index: number) => {
    const centerIndex = Math.floor(lines.length / 2)
    return (index - centerIndex) * 28
  }

  useEffect(() => {
    if (!containerRef.current) return
    const container  = containerRef.current
    const paragraphs = container.querySelectorAll("p")

    timelineRef.current = gsap.timeline({ paused: true })
    timelineRef.current.to(paragraphs, {
      y: -lineHeight,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.06,
    })

    const play    = () => timelineRef.current?.play()
    const reverse = () => timelineRef.current?.reverse()

    container.addEventListener("mouseenter", play)
    container.addEventListener("mouseleave", reverse)
    return () => {
      container.removeEventListener("mouseenter", play)
      container.removeEventListener("mouseleave", reverse)
      timelineRef.current?.kill()
    }
  }, [lines, lineHeight])

  return (
    <div
      ref={containerRef}
      className={`font-black tracking-[-2px] uppercase text-white antialiased cursor-pointer select-none ${className}`}
      style={{ fontSize }}
    >
      <ul className="list-none p-0 m-0 flex flex-col items-start">
        {lines.map((line, index) => {
          const tx = calculateTranslateX(index)
          return (
            <li
              key={index}
              className="overflow-hidden relative"
              style={{
                height: `${lineHeight}px`,
                transform: `translateX(${tx}px) skew(${index % 2 === 0 ? "60deg,-30deg" : "0deg,-30deg"}) scaleY(${index % 2 === 0 ? 0.66667 : 1.33333})`,
              }}
            >
              <p className="px-2 whitespace-nowrap m-0" style={{ height: `${lineHeight}px`, lineHeight: `${lineHeight - 4}px` }}>
                {line.top}
              </p>
              <p className="px-2 whitespace-nowrap m-0" style={{ height: `${lineHeight}px`, lineHeight: `${lineHeight - 4}px` }}>
                {line.bottom}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
