type Props = {
  text: string;
};

export default function Button(props: Props) {
  const { text } = props;

  return (
    <button
      className="px-8 py-2 rounded-md bg-primary-color text-white
                 shadow-md shadow-primary-color-1 hover:shadow-primary-color-2 transition"
    >
      {text}
    </button>
  );
}
