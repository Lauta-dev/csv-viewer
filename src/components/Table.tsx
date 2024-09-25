import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableRow,
	TableHead,
} from "@/components/ui/table";

export default function TableSte({
	header,
	content,

}: {
	header: string[];
	content: string[];

}) {
	return (
		<div className="overflow-y-auto max-h-auto">
			<Table className="min-w-full relative">
				<TableHeader>
					<TableRow>
						{header.map((header) => (
							<TableHead key={header}>{header}</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>
					{content.map((row, rowIndex) => (
						<TableRow key={rowIndex}>
							{header.map((column, colIndex) => (
								<TableCell key={`${rowIndex}-${colIndex}`}>
									{/* TODO: Hide row if it is not selected */}

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
