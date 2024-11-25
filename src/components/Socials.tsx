import { useState } from "react";

import GitHub from "@/assets/github.svg";
import LinkedIn from "@/assets/linkedin.svg";

import { Button } from "@/components/ui/button";

import { info } from "@/info";
import Policy from "@/components/policy";

export default function Socials() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<header className="relative flex justify-between items-center mb-8">
				<div className="space-x-2">
					<Button asChild variant="outline" size="sm">
						<a href={info.github} target="_blank" rel="noopener noreferrer">
							GitHub <img src={GitHub} alt="github" />
						</a>
					</Button>
					<Button asChild variant="outline" size="sm">
						<a href={info.linkedin} target="_blank" rel="noopener noreferrer">
							LinkedIn <img src={LinkedIn} alt="linkedin" />
						</a>
					</Button>
				</div>

				<h1 className="max-[425px]:hidden absolute left-1/2 -translate-x-1/2 text-2xl font-bold">
					CSV File Viewer
				</h1>

				<Button onClick={() => setIsModalOpen(true)} size="sm">
					Policies
				</Button>
			</header>

			<Policy setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
		</>
	);
}
