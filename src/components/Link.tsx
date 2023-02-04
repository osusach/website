type Props = {
  url: string;
  title: string;
};

export default function Link({ url, title }: Props) {
  return (
    <a
      href={url}
      className="underline text-blue-700"
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
}
