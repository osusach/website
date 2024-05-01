type Props = {
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  releaseDate: string;
  contributors: number;
};

export default function ActiveProject({
  href,
  title,
  description,
  imageSrc,
  releaseDate,
  contributors,
}: Props) {
  const defaultImg = "/logo.png";
  // Proyectos activos: (grid)
  // Titulo, link, foto, logo, descripción breve, fecha, cantidad de integrantes en el equipo de desarrollo
  return (
    <a
      className="card overflow-hidden bg-base-300 shadow-[5px_5px_3px_0px_rgba(0,0,0,0.3)] transition ease-in-out hover:translate-x-1 hover:translate-y-1"
      href={href}
    >
      <img
        src={imageSrc ? imageSrc : defaultImg}
        alt="Captura de la página"
        className="mb-2 aspect-video w-full object-cover object-left-top"
      />
      <div className="mx-4 flex justify-between">
        {/* Integrantes */}
        <span className="badge badge-neutral badge-outline">
          <img src="/user.svg" alt="" />
          {contributors}
        </span>
        {/* fecha */}
        <span className="badge badge-neutral badge-outline">{releaseDate}</span>
      </div>
      <span className="p-2 pt-0 text-center text-base-content">
        <h3 className="line-clamp-2 h-14 text-lg font-bold">{title}</h3>
        <p className="line-clamp-3 text-sm">{description}</p>
      </span>
    </a>
  );
}
