import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 14.23V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5.77" />
      <path d="M12 4.39 8.24 8.15c-.9.9-.22 2.5 1.06 2.5h5.4c1.28 0 1.96-1.6 1.06-2.5L12 4.39Z" />
      <path d="M12 10.65v-1.2" />
      <path d="m8.91 10.65 1.2-1.2" />
      <path d="m13.86 9.45 1.2 1.2" />
      <path d="M12 22v-3" />
      <path d="M9 22v-1.5" />
      <path d="M15 22v-1.5" />
    </svg>
  );
}
