import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableRow,
	TableHead,
} from "@/components/ui/table";
import Toolbar from "@/components/Toolbar";

export default function TableSte({
	header,
	content,
	setLimit,
	currentLimit,
	fullCsvLength,
	fileName,
}: {
	header: string[];
	content: string[];
	setLimit: (limit: number) => void;
	currentLimit: number;
	fullCsvLength: number;
	fileName: string;
}) {
	return (
		<div className="overflow-y-auto max-h-auto">
			<Toolbar
				setLimit={setLimit}
				currentLimit={currentLimit}
				fullCsvLength={fullCsvLength}
				csvFileName={fileName}
				length={fullCsvLength}
			/>

			<Table className="min-w-full relative">
				<TableHeader>
					<TableRow>
						{header.map((header) => (
							<TableHead className="sticky top-0" key={header}>
								{header}
							</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>
					{content.map((row, rowIndex) => (
						<TableRow key={rowIndex}>
							{header.map((column, colIndex) => (
								<TableCell key={`${rowIndex}-${colIndex}`}>
									{/* @ts-ignore */}
									<p className="text-nowrap">{row[column]}</p>
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
