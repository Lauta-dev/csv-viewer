import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Policy from "@/components/policy";
import Social from "@/components/Socials";

import Papa from "papaparse";

export default function CSVViewer() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [csvContent, setcsvContent] = useState<{
		header: string[];
		content: string[];
	}>();

	console.log(
		JSON.stringify({
			header: csvContent?.header,
			content: csvContent?.content.slice(0, 5),
		}),
	);

	return (
		<div className="min-h-screen bg-background p-4">
			<Social setIsModalOpen={setIsModalOpen} />

			<main className="flex flex-col items-center justify-center space-y-4">
				<h1 className="text-2xl font-bold">CSV File Viewer</h1>
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="csv-file">Upload CSV</Label>
					<Input
						id="csv-file"
						type="file"
						accept=".csv"
						onChange={(data) => {
							if (!data.target.files) {
								setcsvContent({
									header: [],
									content: [],
								});
								return;
							}

							const file = data.target.files[0];
							const reader = new FileReader();

							reader.onload = (data) => {
								if (data.currentTarget === null) {
									setcsvContent({
										header: [],
										content: [],
									});
									return;
								}

								const res = data.currentTarget.result;
								Papa.parse(res, {
									complete: (result) => {
										const getHeader = result.data[0] as string[];
										const getContent = result.data.slice(1) as string[];

										setcsvContent({
											header: getHeader,
											content: getContent,
										});
									},
									error: () => {
										setcsvContent({
											header: [],
											content: [],
										});
									},
								});
							};

							reader.readAsText(file);
						}}
					/>
				</div>
			</main>

			<Policy setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />

			<p>{JSON.stringify(csvContent?.header)}</p>
		</div>
	);
}
