const CheckShape = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <defs>
        <path
          id="a"
          d="M22.21 4.297a1.07 1.07 0 0 1 1.48 0c.413.4.413 1.047 0 1.457L8.58 20.364a.746.746 0 0 1-.084.075.934.934 0 0 1-.189.262c-.2.197-.465.299-.743.299-.278 0-.544-.102-.74-.295L.312 14.408a1.002 1.002 0 0 1-.005-1.448 1.058 1.058 0 0 1 1.484-.004l5.735 5.541 14.685-14.2z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#979797" xlinkHref="#a" />
        <g fill="#0870d1" mask="url(#b)">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  );
};

export default CheckShape;
