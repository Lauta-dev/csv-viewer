import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function Toolbar({
	setLimit,
	currentLimit,
	fullCsvLength,
	filesName,
	setSelectedFile,
}: {
	setLimit: (limit: number) => void;
	currentLimit: number;
	fullCsvLength: number;
	csvFileName: string;
	length: number;
	filesName: string[];
	setSelectedFile: React.Dispatch<React.SetStateAction<string>>;
}) {
	function handleClick() {
		setLimit((prev) => prev + 100);
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;

		if (value === "" || isNaN(parseInt(value))) {
			setLimit((prev) => prev);
			return;
		}

		setLimit(parseInt(e.target.value));
	}

	function handleSelect(value: string) {
		setSelectedFile(value);
	}

	return (
		<div className="flex items-center p-2 bg-background border rounded-md sticky top-0 z-10 flex justify-between">
			<div className="flex items-center gap-2">
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
				{currentLimit}/{fullCsvLength}
			</div>
			<div className="flex items-center gap-2">
				<Button variant="ghost" onClick={handleClick}>
					100 More
				</Button>
				<div className="relative">
					<Label htmlFor="rows" className="sr-only">
						Enter number of rows to show
					</Label>
					<Input
						onChange={handleChange}
						id="rows"
						type="number"
						placeholder="Enter number of rows"
						className="bg-muted text-muted-foreground border-muted focus:border-primary focus:ring-primary/50 rounded-md px-3 py-2 text-sm shadow-sm"
					/>
				</div>
			</div>
		</div>
	);
}
