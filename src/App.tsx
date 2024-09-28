import { useState } from "react";

import Social from "@/components/Socials";
import TableSte from "@/components/Table";

import UploadFile from "@/components/UploadFile";

import { DEFAULT_START } from "@/const";
import useCsvParse from "@/hook/parseCSV";
import Toolbar from "@/components/Toolbar";

export default function CSVViewer() {
	const { tableContent, firstFile, namesOfFiles, parseCsv } = useCsvParse();
	const [limit, setLimit] = useState<number>(DEFAULT_START);
	const [selectedFile, setSelectedFile] = useState<string>();

	function onChange(data: React.ChangeEvent<HTMLInputElement>) {
		if (data.target.files === null) {
			return;
		}
		parseCsv(data.target.files);
	}

	return (
		<main className="min-h-screen bg-background p-4">
			<Social />

			<UploadFile onChange={onChange} />

			{firstFile && tableContent[firstFile] ? (
				<div>
					<Toolbar
						setLimit={setLimit}
						currentLimit={limit}
						filesName={namesOfFiles}
						length={tableContent[selectedFile ?? firstFile].contentLength}
						setSelectedFile={setSelectedFile}
					/>
					<TableSte
						header={tableContent[selectedFile ?? firstFile].headers}
						content={tableContent[selectedFile ?? firstFile].content.slice(
							0,
							limit,
						)}

					/>
				</div>
			) : null}
		</main>
	);
}
