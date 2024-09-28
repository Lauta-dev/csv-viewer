import Papa from "papaparse";
import type { FileContentType } from "@/interface/FileContent";
import { useState } from "react";

function useCsvReader() {
	const [namesOfFiles, setNamesOfFiles] = useState<string[]>([]);
	const [firstFile, setFirstFile] = useState<string>();
	const [tableContent, setTableContent] = useState<FileContentType>({});

	function parseCsv(files: FileList) {
		setFirstFile(files[0].name);

    for (let i = 0; i < files.length; i++) {
			const file = files[i];
			const reader = new FileReader();

			setNamesOfFiles((prev) => prev.concat(file.name));

			reader.onload = (data) => {
				if (data.currentTarget === null) {
					return;
				}

				if (data.target?.result === null) {
					return;
				}

				const fileContent = data.target?.result as string;
				const textParsed = Papa.parse(fileContent, {
					header: true,
					skipEmptyLines: true,
				});

				const headers = textParsed.meta.fields as string[];
				const content = textParsed.data as string[];

				setTableContent((prevState) => ({
					...prevState,
					[file.name]: { headers, content, contentLength: content.length },
				}));
			};
			reader.readAsText(file);
		}
	}

	return {
		firstFile,
		namesOfFiles,
		tableContent,
		parseCsv,
	};
}

export default useCsvReader;
