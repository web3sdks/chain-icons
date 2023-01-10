import * as React from "react";
import { SVGProps } from "react";

const Sushiswap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <path id="a" d="M0 0h24v24H0z" />
    </defs>
    <clipPath id="b">
      <use xlinkHref="#a" overflow="visible" />
    </clipPath>
    <g clipPath="url(#b)">
      <linearGradient
        id="c"
        x1={20.644}
        x2={24.333}
        y1={1011.506}
        y2={998.84}
        gradientTransform="matrix(1 0 0 -1 -12 1012)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#03b8ff" />
        <stop offset={1} stopColor="#fa52a0" />
      </linearGradient>
      <path fill="url(#c)" d="M5 2.3 23.6 15 19 21.8.4 9 5 2.3z" />
      <linearGradient
        id="d"
        x1={23.682}
        x2={27.37}
        y1={1012.39}
        y2={999.724}
        gradientTransform="matrix(1 0 0 -1 -12 1012)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#03b8ff" />
        <stop offset={1} stopColor="#fa52a0" />
      </linearGradient>
      <path
        fill="url(#d)"
        d="M23.6 15c-1.6 2.3-7 1.4-12.1-2.2C6.3 9.3 3.5 4.6 5 2.3 6.6 0 12 .9 17.1 4.5c5.2 3.4 8 8.2 6.5 10.5z"
      />
      <linearGradient
        id="e"
        x1={17.616}
        x2={21.305}
        y1={1010.624}
        y2={997.958}
        gradientTransform="matrix(1 0 0 -1 -12 1012)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#03b8ff" />
        <stop offset={1} stopColor="#fa52a0" />
      </linearGradient>
      <path
        fill="url(#e)"
        d="M19 21.7c-1.6 2.3-7 1.4-12.1-2.2s-8-8.2-6.4-10.6c1.6-2.3 7-1.4 12.1 2.2s7.9 8.3 6.4 10.6z"
      />
      <path
        fill="#0e0f23"
        d="M23.6 15 19 21.8c-1.6 2.3-7 1.3-12.1-2.2-1-.7-1.9-1.4-2.8-2.2.7-.1 1.6-.5 2.5-1.5 1.6-1.7 2.4-2.1 3.1-2 .7 0 1.5.7 2.8 2.4 1.3 1.7 3.1 2.2 4.2 1.3.1-.1.2-.1.3-.2.9-.7 1.2-1 2.9-4.2.4-.8 1.8-2.1 3.7-1.5.5 1.3.5 2.4 0 3.3z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M22.9 14.6c-1.4 2-6.3 1-11-2.3C7.1 9 4.3 4.8 5.7 2.8s6.3-1 11 2.3 7.5 7.5 6.2 9.5zm-4.4-3c-.7 1-3.1.5-5.5-1.1-2.3-1.6-3.7-3.7-3-4.7.7-1 3.1-.5 5.5 1.1 2.3 1.6 3.7 3.7 3 4.7z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        d="M4.6 4.6c0-.1-.1-.2-.2-.1s-.2.1-.2.2c.1.3.2.5.2.7 0 .1.1.2.2.1.1 0 .2-.1.1-.2 0-.2 0-.4-.1-.7zm.5 1.6c0-.1-.1-.2-.2-.1s-.1.1-.1.2c1.1 2.5 3.4 5.2 6.4 7.2.1.1.2 0 .3 0 .1-.1 0-.2 0-.3-3.1-2-5.3-4.6-6.4-7zM17.2 16c-.1 0-.2 0-.2.1s0 .2.1.2c.3.1.7.2 1 .3.1 0 .2 0 .2-.1s0-.2-.1-.2c-.3-.1-.7-.2-1-.3zm1.8.4c-.1 0-.2.1-.2.2s.1.2.2.2c.8.1 1.7.2 2.4.1.1 0 .2-.1.2-.2s-.1-.2-.2-.2c-.8.1-1.6 0-2.4-.1z"
      />
    </g>
  </svg>
);

export default Sushiswap;
