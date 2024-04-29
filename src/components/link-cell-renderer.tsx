import Link from 'next/link';

import { CustomCellRendererProps } from 'ag-grid-react';

interface Props extends CustomCellRendererProps {
  getLink: (value: string) => string;
}

export const LinkCellRenderer = (props: Props) => {
  const { value, valueFormatted, getLink } = props;

  const link = getLink(value);

  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer"
      className="link-hover link text-[#2a7fc9]"
    >
      {valueFormatted}
    </Link>
  );
};
