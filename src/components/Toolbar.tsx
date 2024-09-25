import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import ChoiseFile from "@/components/ChoiseFile";
import { DEFAULT_LIMIT, DEFAULT_START } from "@/const";

export default function Toolbar({
	setLimit,
	currentLimit,
	filesName,
	setSelectedFile,
	length,
}: {
	setLimit: (limit: number) => void;
	currentLimit: number;
	length: number;
	filesName: string[];
	setSelectedFile: React.Dispatch<React.SetStateAction<string>>;
}) {
	function handleClick() {
		setLimit((prev) => prev + DEFAULT_LIMIT);
	}

	function handleSelect(value: string) {
		setSelectedFile(value);
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;

		if (value === "" || isNaN(parseInt(value))) {
			setLimit(DEFAULT_START);
			return;
		}

		setLimit(parseInt(e.target.value));
	}

	return (
		<div className="flex items-center p-2 bg-background border rounded-md sticky top-0 z-10 flex justify-between">
			<div className="flex items-center gap-2">
				<ChoiseFile handleSelect={handleSelect} filesName={filesName} />
				{currentLimit}/{length}
			</div>

			<div className="flex items-center gap-2">
				<Button variant="secondary" onClick={handleClick}>
					{DEFAULT_LIMIT} More
				</Button>

				<Input
					onChange={handleChange}
					type="number"
					placeholder="Enter number of rows"
				/>
			</div>
		</div>
	);
}
