import { TSvgProps } from "@/types/components/icons";

function AddEvent({ svgProps }: TSvgProps) {
  return (
    <>
      <svg width="16" height="16" viewBox="0 0 16 16" {...svgProps}>
        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
      </svg>
    </>
  );
}

export default AddEvent;
