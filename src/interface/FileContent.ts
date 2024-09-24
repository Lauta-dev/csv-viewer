export interface FileContent {
	headers: string[];
	content: string[];
}

export type FileContentType = {
	[key: string]: FileContent;
};
