import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

function ChoiseFile({
	handleSelect,
	filesName,
}: {
	handleSelect: (value: string) => void;
	filesName: string[];
}) {
	return (
		<>
			<Select onValueChange={handleSelect}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder={filesName[0]} />
				</SelectTrigger>
				<SelectContent>
					{filesName.map((fileName, index) => (
						<SelectItem key={index} value={fileName}>
							{fileName}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</>
	);
}
export default ChoiseFile;
