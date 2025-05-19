import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  const animationClass = vertical ? "animate-marquee-vertical" : "animate-marquee";

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-100% - var(--gap)));
            }
          }

          @keyframes marquee-vertical {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(calc(-100% - var(--gap)));
            }
          }

          .animate-marquee {
            animation: marquee var(--duration) linear infinite;
          }

          .animate-marquee-vertical {
            animation: marquee-vertical var(--duration) linear infinite;
          }

          .marquee-pause:hover .marquee-child {
            animation-play-state: paused;
          }
        `}
      </style>

      <div
        {...props}
        className={cn(
          "flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
          {
            "flex-row": !vertical,
            "flex-col": vertical,
            "marquee-pause": pauseOnHover,
          },
          className
        )}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn(
                "flex shrink-0 justify-around [gap:var(--gap)] marquee-child",
                animationClass,
                {
                  "flex-row": !vertical,
                  "flex-col": vertical,
                  "[animation-direction:reverse]": reverse,
                }
              )}
            >
              {children}
            </div>
          ))}
      </div>
    </>
  );
}

Marquee.propTypes = {
  className: PropTypes.string,
  reverse: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  children: PropTypes.node,
  vertical: PropTypes.bool,
  repeat: PropTypes.number,
};