import * as React from "react";
import { SVGProps } from "react";

const Filecoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    x={0}
    y={0}
    enableBackground="new 0 0 40 40"
    viewBox="0 0 40 40"
    {...props}
  >
    <style>{".st1{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}"}</style>
    <defs>
      <filter
        id="Adobe_OpacityMaskFilter"
        width={40}
        height={40}
        x={0}
        y={0}
        filterUnits="userSpaceOnUse"
      >
        <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
      </filter>
    </defs>
    <mask
      id="b-logo_1_1_"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <path id="a-logo_1_1_" d="M0 0h40v40H0V0z" className="st1" />
    </mask>
    <path
      fill="#0090ff"
      fillRule="evenodd"
      d="M20 40C9 40 0 31 0 19.9.1 8.9 9-.1 20.1 0 31.1.1 40 9 40 20.2 39.9 31.1 31 40 20 40"
      clipRule="evenodd"
    />
    <path
      d="m21.9 17.6-.6 3.2 5.7.8-.4 1.5-5.6-.8c-.4 1.3-.6 2.7-1.1 3.9-.5 1.4-1 2.8-1.6 4.1-.8 1.7-2.2 2.9-4.1 3.2-1.1.2-2.3.1-3.2-.6-.3-.2-.6-.6-.6-.9 0-.4.2-.9.5-1.1.2-.1.7 0 1 .1.3.3.6.7.8 1.1.6.8 1.4.9 2.2.3.9-.8 1.4-1.9 1.7-3 .6-2.4 1.2-4.7 1.7-7.1v-.4l-5.3-.8.2-1.5 5.5.8.7-3.1-5.7-.9.2-1.6 5.9.8c.2-.6.3-1.1.5-1.6.5-1.8 1-3.6 2.2-5.2s2.6-2.6 4.7-2.5c.9 0 1.8.3 2.4 1 .1.1.3.3.3.5 0 .4 0 .9-.3 1.2-.4.3-.9.2-1.3-.2-.3-.3-.5-.6-.8-.9-.6-.8-1.5-.9-2.2-.2-.5.5-1 1.2-1.3 1.9-.7 2.1-1.2 4.3-1.9 6.5l5.5.8-.4 1.5-5.3-.8"
      className="st1"
    />
  </svg>
);

export default Filecoin;
