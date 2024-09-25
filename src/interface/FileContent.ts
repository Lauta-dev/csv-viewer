export interface FileContent {
	headers: string[];
	content: string[];
	contentLength: number;
}

export type FileContentType = {
	[key: string]: FileContent;
};
