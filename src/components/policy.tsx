import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Policy({
	setIsModalOpen,
	isModalOpen,
}: {
	setIsModalOpen: (isOpen: boolean) => void;
	isModalOpen: boolean;
}) {
	const handleClick = () => setIsModalOpen(false);

	return (
		<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Policies</DialogTitle>
					<DialogDescription>
						This service (CSV file viewer) does not store any personal
						information or save uploaded files on external servers. Everything
						is handled client-side (in the browser) without intermediaries.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button onClick={handleClick}>Close</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
