export default function CsvListTables({
	filesName,
	setSelectedFile,
}: {
	filesName: string[];
	setSelectedFile: React.Dispatch<React.SetStateAction<string>>;
}) {
	function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setSelectedFile(event.target.value);
	}

	return (
		<>
			<div>
				<select onChange={handleChange}>
					{filesName.map((fileName, index) => (
						<option key={index}>{fileName}</option>
					))}
				</select>
			</div>
		</>
	);
}
