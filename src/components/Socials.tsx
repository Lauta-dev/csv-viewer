import { Button } from "@/components/ui/button";

export default function Socials({
	setIsModalOpen,
}: { setIsModalOpen: (isOpen: boolean) => void }) {
	return (
		<header className="flex justify-between mb-8">
			<div className="space-x-2">
				<Button asChild variant="outline" size="sm">
					<a
						href="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
				</Button>
				<Button asChild variant="outline" size="sm">
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
				</Button>
			</div>
			<Button onClick={() => setIsModalOpen(true)} size="sm">
				Policies
			</Button>
		</header>
	);
}
