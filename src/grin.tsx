import * as React from "react";
import { SVGProps } from "react";

const Grin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 191 191" {...props}>
    <circle cx={95.5} cy={95.5} r={95.5} />
    <circle cx={95.3} cy={95.5} r={85.3} fill="#fef102" />
    <path d="M135.7 63.5c-2-4.6-3.9-13.6-9.1-15.6-6.7-2.6-10.9 14.3-11.9 18.6h-1c-1.7-7.3-4-17.7-12-20-3.7 15.6 3.9 32.5 11 46 7.6-3.6 11.3-15 12-23h1l8 24c6.4-1.8 8.7-8.2 11-14 5-12.4 9.2-27.7 6-41-9.6 2.7-12.5 16.5-15 25m-96 32c8.6-4.1 12.7-17.1 14-26h1c1 4.3 3.7 15.4 9.1 16.1 6.8.9 10.4-14.3 10.9-19.1h1c2.2 7.5 4.5 17.3 12 21 2.8-11.7-.5-24.1-4.8-35-1.1-2.8-3.3-10.4-7.2-10.4-6.3 0-9.9 16.7-11 21.4h-1l-8-24c-14.1 6.7-21.7 42.5-16 56m-15 12c10.4 45.6 58.6 71.4 102 52.1 15.8-7 28.3-19.5 35.5-35.1 1.9-4 5.5-11.4 3.4-16.7-2.1-5.3-22.8 3.4-27.9 5.6-.7.3-1.2 1-1.4 1.8-.3 2.2 1.2 4.3 3.4 4.6h.3l8.7.7c-15.7 30.4-58.1 43.8-88 19.5C54 134.6 48 128.2 44 120.5c-1.9-3.7-3.7-8.4-7-11-3.2-2.4-8-3.2-12.3-2z" />
  </svg>
);

export default Grin;
