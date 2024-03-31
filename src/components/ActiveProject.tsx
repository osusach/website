type Props = {
	title: string;
	description: string;
	href: string;
	icon: string;
	iconAlt: string;
};

export default function ActiveProject({ href, title, description, icon, iconAlt }: Props) {
	return (
		<div className="hover:bg-neutral-800 border border-white">
			<a className="p-2 flex flex-col" href={href}>
				<div className="text-neutral-200 h-12 font-semibold flex flex-row items-center justify-between gap-1">
					<img src={icon} alt={iconAlt} className="w-6 h-6" />
					<h3 className="text-center">{title}</h3>
					<span>&rarr;</span>
				</div>
				<p className="text-sm">
					{description}
				</p>
			</a>
		</div>
	);
}
