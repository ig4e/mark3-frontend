import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyH2, TypographyLead } from "@/components/ui/typography";
import Image from "next/image";
import { HandRaisedIcon, PaperClipIcon } from "@heroicons/react/24/outline";
import Search from "@/components/search";
import StudentPageImage from "@/public/student-page.png";

export default function Home() {
	return (
		<div className="my-24 flex flex-col items-center justify-center gap-8 text-center">
			<div className="space-y-6">
				<div className="flex gap-2">
					<TypographyH1 className="[text-wrap:_balance;]">نتيجة الثانوية العامة بين أيديك</TypographyH1>
					<HandRaisedIcon className="h-12 w-12 animate-bounce hidden md:block"></HandRaisedIcon>
				</div>
				<TypographyLead className="max-w-xl mx-auto">
					معلومات نتيجة الثانوية العامة بسهولة! أبحث بالاسم أو رقم الجلووس وهيجيبلك كل التفاصيل عن الطالب ودرجاته في كل مادة.
				</TypographyLead>
			</div>
			<Search noShortcut={true}></Search>

			<div className="drop-shadow-lg rounded-xl border">
				<Image src={StudentPageImage} alt="student page" className="rounded-xl" width={1024}></Image>
			</div>
		</div>
	);
}
