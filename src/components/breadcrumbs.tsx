import Link from 'next/link';

interface Props {
  links: {
    text: string;
    href: string;
  }[];
}

export const Breadcrumbs = ({ links }: Props) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {links.map(({ text, href }) => (
          <li key={href}>
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
