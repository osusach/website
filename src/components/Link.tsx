type Props = {
  url: string;
  title: string;
};

export default function Link({ url, title }: Props) {
  return (
    <a
      href={url}
      className="text-blue-700 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
}
