import { TSvgProps } from "@/types/components/icons";

function EditContent({ svgProps }: TSvgProps) {
  return (
    <>
      <svg width="16" height="16" viewBox="0 0 16 16" {...svgProps}>
        <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
      </svg>
    </>
  );
}

export default EditContent;
