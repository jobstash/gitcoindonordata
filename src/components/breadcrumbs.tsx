import Link from 'next/link';

interface Props {
  links: {
    text: React.ReactNode;
    href: string;
  }[];
}

export const Breadcrumbs = ({ links }: Props) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {[BASE_LINK, ...links].map(({ text, href }) => (
          <li key={href}>
            <Link href={href}>{text}</Link>
          </li>
        ))}
        {links.length === 0 && (
          <li>
            <span className="loading loading-spinner loading-xs text-neutral-400" />
          </li>
        )}
      </ul>
    </div>
  );
};

const BASE_LINK = { text: 'Home', href: '/' };
