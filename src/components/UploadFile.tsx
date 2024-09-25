import { Input } from "./ui/input";

function UploadFile({
	onChange,
}: { onChange: (data: React.ChangeEvent<HTMLInputElement>) => void }) {
	return (
		<div className="flex flex-col items-center justify-center space-y-4">
			<h1 className="text-2xl font-bold">CSV File Viewer</h1>
			<div className="grid w-full max-w-sm items-center gap-1.5">
				<Input
					id="csv-file"
					type="file"
					accept=".csv"
					multiple={true}
					onChange={onChange}
				/>
			</div>
		</div>
	);
}

export default UploadFile;
