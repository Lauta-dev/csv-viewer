import { Button } from "@/components/ui/button";
import { info } from "@/info";
import GitHub from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";

export default function Socials({
	setIsModalOpen,
}: { setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
	return (
		<header className="flex justify-between mb-8">
			<div className="space-x-2">
				<Button asChild variant="outline" size="sm">
					<a
						href={info.github}
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub <img src={GitHub} alt="github" />
					</a>
				</Button>
				<Button asChild variant="outline" size="sm">
					<a
						href={info.linkedin}
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn <img src={LinkedIn} alt="linkedin" />
					</a>
				</Button>
			</div>
			<Button onClick={() => setIsModalOpen(true)} size="sm">
				Policies
			</Button>
		</header>
	);
}
