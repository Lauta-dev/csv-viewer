import { useState } from "react";

import { Input } from "@/components/ui/input";

import Policy from "@/components/policy";
import Social from "@/components/Socials";

import Papa from "papaparse";
import TableSte from "@/components/Table";

import CsvListTables from "@/components/AsideListTables";
import { FileContent, FileContentType } from "./interface/FileContent";

export default function CSVViewer() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [csvContent, setcsvContent] = useState<{
		header: string[];
		content: string[];
	}>();

	const DEFAULT_LIMIT = 65;

	const [limit, setLimit] = useState<number>(DEFAULT_LIMIT);
	const [fileName, setFileName] = useState<string>("");
	const [fileLength, setFileInfo] = useState<number>(0);
	const [filesName, setFilesName] = useState<string[]>([]);
	const [selectedFile, setSelectedFile] = useState<string>();
	const [firstFile, setFirstFile] = useState<string>();

	const [a, setA] = useState<FileContentType>({});

	function onChange(data: React.ChangeEvent<HTMLInputElement>) {
		if (!data.target.files) {
			setcsvContent({
				header: [],
				content: [],
			});
			return;
		}

		const file = data.target.files;
		setFirstFile(file[0].name);

		for (let i = 0; i < file.length; i++) {
			const files = file[i];
			const reader = new FileReader();
			setFilesName((prev) => prev.concat(files.name));

			reader.onload = (data) => {
				if (data.currentTarget === null) {
					setcsvContent({
						header: [],
						content: [],
					});
					return;
				}

				if (data.target?.result === null) {
					setcsvContent({
						header: [],
						content: [],
					});
					return;
				}

				const fileContent = data.target?.result as string;
				const textParsed = Papa.parse(fileContent, {
					header: true,
					skipEmptyLines: true,
				});

				const headers = textParsed.meta.fields as string[];
				const content = textParsed.data as string[];

				setA((prev) => ({
					...prev,
					[files.name]: {
						headers: headers,
						content: content,
					},
				}));

				setFileName(files.name);
				setFileInfo(content.length);

				setcsvContent({
					header: headers,
					content: content,
				});
			};

			reader.readAsText(files);
		}
	}

	console.log(a, firstFile);

	return (
		<div className="min-h-screen bg-background p-4">
			<Social setIsModalOpen={setIsModalOpen} />
			<main className="flex flex-col items-center justify-center space-y-4">
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
			</main>

			<Policy setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />

			{firstFile && a[firstFile] ? (
				<>
					<div className="flex">
						<TableSte
							setSelectedFile={setSelectedFile}
							header={a[selectedFile ?? firstFile].headers}
							content={a[selectedFile ?? firstFile].content.slice(0, limit)}
							fullCsvLength={fileLength}
							setLimit={setLimit}
							currentLimit={limit}
							filesName={filesName}
						/>
					</div>
				</>
			) : null}
		</div>
	);
}
