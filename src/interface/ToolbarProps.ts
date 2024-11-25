export interface ToolbarProps {
	setLimit: (limit: number) => void;
	currentLimit: number;
	length: number;
	filesName: string[];
	setSelectedFile: React.Dispatch<React.SetStateAction<string>>;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
