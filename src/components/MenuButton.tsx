import Link from "next/link";

type Props = {
  name: string;
  endpoint: string;
};

export default function MenuButton(props: Props) {
  let { name, endpoint } = props;

  return (
    <li className="list-none">
      <Link
        href={endpoint}
        className="text-dark-color hover:text-primary-color transition-colors"
      >
        {name}
      </Link>
    </li>
  );
}
