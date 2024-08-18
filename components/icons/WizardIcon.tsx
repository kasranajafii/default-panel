import React from "react";

const WizardIcon = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <rect width="32" height="32" rx="16" fill="#6366F1" />
        <mask
          id="mask0_0_25891"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" rx="16" fill="white" />
        </mask>
        <g mask="url(#mask0_0_25891)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.8288 -5.45917L-0.300879 41.0762L16.2487 49.0204L47.2133 32.2218L20.8288 -5.45917Z"
            fill="#4F46E5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.82882 -5.45917L-19.3009 41.0762L-2.75129 49.0204L28.2133 32.2218L1.82882 -5.45917Z"
            fill="url(#paint0_linear_0_25891)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38 3L-6 29L3 45L38 49V3Z"
            fill="url(#paint1_linear_0_25891)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_0_25891"
            x1="-6.88779"
            y1="16.4476"
            x2="10.6859"
            y2="41.5454"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A5B4FC" stop-opacity="0.01" />
            <stop offset="1" stop-color="#A5B4FC" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_25891"
            x1="25.169"
            y1="4.6272"
            x2="3.33124"
            y2="19.0636"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#38BDF8" stop-opacity="0.01" />
            <stop offset="1" stop-color="#38BDF8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default WizardIcon;
