"use client";

import {
	TypographyH1,
	TypographyH2,
	TypographyH3,
	TypographyH4,
	TypographyLarge,
	TypographyLead,
	TypographyMuted,
	TypographySmall,
} from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { gql } from "@/src/__generated__";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useMemo } from "react";
import { Progress } from "@/components/ui/progress";
import { Metadata } from "next";
export const dynamic = "force-dynamic";

const GET_STUDENT = gql(`
query Student($studentWhereUniqueInput: StudentWhereUniqueInput!) {
	student(studentWhereUniqueInput: $studentWhereUniqueInput) {
	  id
	  seatNo
	  name
	  shool
	  educationalAdministration
	  status
	  section
	  updatedAt
	  createdAt
	  mark {
		id
		subjects {
		  arabic
		  firstForeignLanguage
		  secondForeignLanguage
		  pureMathematics
		  appliedMathematics
		  history
		  geography
		  philosophy
		  psychology
		  chemistry
		  biology
		  geology
		  physics
		}
		otherSubjects {
		  religiousEducation
		  nationalEducation
		  economicsAndStatistics
		}
		updatedAt
		createdAt
	  }
	}
  }
`);

const status = {
	PASSED: "ناجح",
	SECOND_ROLE: "دور ثانى",
	FAILED: "راسب",
};

const subjectsInfo = {
	arabic: {
		title: "اللغة العربية",
		type: "مادة عامة",
		icon: "",
		totalScore: 80,
	},
	firstForeignLanguage: {
		title: "اللغة الاولى",
		type: "مادة عامة",
		icon: "",
		totalScore: 50,
	},
	secondForeignLanguage: {
		title: "اللغة الثانية",
		type: "مادة عامة",
		icon: "",
		totalScore: 40,
	},
	pureMathematics: {
		title: "الرياضيات البحتة",
		type: "مادة رياضية",
		icon: "",
		totalScore: 60,
	},
	appliedMathematics: {
		title: "الرياضيات التطبيقية",
		type: "مادة رياضية",
		icon: "",
		totalScore: 60,
	},
	chemistry: {
		title: "الكيمياء",
		type: "مادة علمية",
		icon: "",
		totalScore: 60,
	},
	geography: {
		title: "الجغرافيا",
		type: "مادة ادبية",
		icon: "",
		totalScore: 60,
	},
	philosophy: {
		title: "الفلسفة",
		type: "مادة ادبية",
		icon: "",
		totalScore: 60,
	},
	psychology: {
		title: "علم النفس",
		type: "مادة ادبية",
		icon: "",
		totalScore: 60,
	},
	history: {
		title: "التاريخ",
		type: "مادة ادبية",
		icon: "",
		totalScore: 60,
	},
	biology: {
		title: "الاحياء",
		type: "مادة علمية",
		icon: "",
		totalScore: 60,
	},
	geology: {
		title: "الجيولوجيا",
		type: "مادة علمية",
		icon: "",
		totalScore: 60,
	},
	physics: {
		title: "الفيزياء",
		type: "مادة علمية",
		icon: "",
		totalScore: 60,
	},
} as const;

const otherSubjectsInfo = {
	religiousEducation: {
		title: "الدين",
		type: "مادة غير مضافة",
		icon: "",
		totalScore: 25,
	},
	nationalEducation: {
		title: "مادة علمية",
		type: "مادة غير مضافة",
		icon: "",
		totalScore: 25,
	},
	economicsAndStatistics: {
		title: "مادة علمية",
		type: "مادة غير مضافة",
		icon: "",
		totalScore: 50,
	},
} as const;

export default function Page({ params }: { params: { id: string } }) {
	const {
		data: { student },
	} = useSuspenseQuery(GET_STUDENT, { variables: { studentWhereUniqueInput: { id: params.id } } });

	const calculatedData = useMemo(() => {
		const { __typename: ___typename, ...subjects } = student?.mark?.subjects || {};
		const { __typename, ...otherSubjects } = student?.mark?.otherSubjects || {};

		const total = Object.values(subjects).reduce((total: number, value) => {
			if (!isNaN(Number(value))) return total + Number(value);
			return total;
		}, 0);

		const score = (total / 410) * 100;

		const studentMainSubjects = Object.keys(subjects)
			.map((subjectKey) => {
				if (subjectKey in subjectsInfo) {
					const grades = subjects[subjectKey as keyof typeof subjects];
					const info = subjectsInfo[subjectKey as keyof typeof subjectsInfo];

					return {
						...info,
						status: (info.totalScore / 2 > Number(grades) ? "PASSED" : "FAILED") as "PASSED" | "FAILED",
						grades,
						precentage: (Number(grades) / info.totalScore) * 100,
					};
				}
			})
			.filter((sub) => sub?.grades);

		const studentOtherSubjects = Object.keys(otherSubjects).map((subjectKey) => {
			if (subjectKey in otherSubjectsInfo) {
				const grades = otherSubjects[subjectKey as keyof typeof otherSubjects];
				const info = otherSubjectsInfo[subjectKey as keyof typeof otherSubjectsInfo];

				return {
					...info,
					status: (info.totalScore / 2 > Number(grades) ? "PASSED" : "FAILED") as "PASSED" | "FAILED",
					grades,
					precentage: (Number(grades) / info.totalScore) * 100,
				};
			}
		});

		return {
			totalGrades: total,
			totalMainSubjectsGrades: total,
			totalOtherSubjectsGrades: total,
			studentMainSubjects,
			studentOtherSubjects,
			score,
		};
	}, [student]);

	console.log(calculatedData);

	return (
		<div className="space-y-4 mt-4">
			<div className="flex flex-col justify-between gap-8">
				<div className="flex flex-col gap-1 items-start">
					<TypographyH2>{student.name}</TypographyH2>
				</div>

				<Card>
					<CardHeader>
						<CardTitle>معلومات الطالب</CardTitle>
					</CardHeader>
					<CardContent className="space-y-2">
						<TypographyLead>الأدارة : </TypographyLead>
						<TypographyLarge>{student.educationalAdministration}</TypographyLarge>

						<TypographyLead>المدرسة : </TypographyLead>
						<TypographyLarge>{student.shool}</TypographyLarge>

						<TypographyLead>الشعبة : </TypographyLead>
						<TypographyLarge>{student.section}</TypographyLarge>

						<TypographyLead>المجموع : </TypographyLead>
						<div className="flex items-center gap-2">
							<Progress value={calculatedData.score} max={100} className="border" />
							<TypographyLarge>{calculatedData.score.toFixed(2)}%</TypographyLarge>
						</div>
						<div className="flex flex-col items-center">
							<TypographyLarge className="whitespace-nowrap">410 / {calculatedData.totalGrades.toFixed(1)}</TypographyLarge>
						</div>
					</CardContent>
					<CardFooter className="flex items-center justify-between">
						<div className="flex gap-1 items-center">
							<TypographyMuted>رقم الجلوس : </TypographyMuted>
							<TypographySmall>{student.seatNo}</TypographySmall>
						</div>

						<div className="flex gap-1 items-center">
							<TypographyMuted>الحالة : </TypographyMuted>
							<TypographySmall
								className={cn({
									"text-green-600": student.status === "PASSED",
									"text-orange-600": student.status === "SECOND_ROLE",
									"text-red-600": student.status === "FAILED",
								})}
							>
								{status[student.status]}
							</TypographySmall>
						</div>
					</CardFooter>
				</Card>

				<TypographyH4>المواد المضافة للمجموع</TypographyH4>

				<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{calculatedData.studentMainSubjects.map((subject) => {
						if (!subject) return null;
						return (
							<Card key={subject.title}>
								<CardHeader>
									<CardTitle>{subject.title}</CardTitle>
									<CardDescription>{subject.type}</CardDescription>
								</CardHeader>
								<CardContent className="space-y-2">
									<TypographyLead>المجموع : </TypographyLead>
									<div className="flex items-center gap-2">
										<Progress value={subject.precentage} max={100} className="border" />
										<TypographyLarge>{subject.precentage.toFixed(2)}%</TypographyLarge>
									</div>
									<div className="flex flex-col items-center">
										<TypographyLarge className="whitespace-nowrap">
											{subject.totalScore} / {subject.grades?.toFixed(1)}
										</TypographyLarge>
									</div>
								</CardContent>
								<CardFooter className="flex items-center justify-between">
									<div className="flex gap-1 items-center">
										<TypographyMuted>ترتيبك : </TypographyMuted>
										<TypographySmall>{student.seatNo}</TypographySmall>
									</div>
									<div className="flex gap-1 items-center">
										<TypographyMuted>الحالة : </TypographyMuted>
										<TypographySmall
											className={cn({
												"text-green-600": subject.status === "PASSED",
												"text-red-600": subject.status === "FAILED",
											})}
										>
											{status[subject.status]}
										</TypographySmall>
									</div>
								</CardFooter>
							</Card>
						);
					})}
				</div>

				<TypographyH4>المواد الغير المضافة للمجموع</TypographyH4>

				<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{calculatedData.studentOtherSubjects.map((subject) => {
						if (!subject) return null;
						return (
							<Card key={subject.title}>
								<CardHeader>
									<CardTitle>{subject.title}</CardTitle>
									<CardDescription>{subject.type}</CardDescription>
								</CardHeader>
								<CardContent className="space-y-2">
									<TypographyLead>المجموع : </TypographyLead>
									<div className="flex items-center gap-2">
										<Progress value={subject.precentage} max={100} className="border" />
										<TypographyLarge>{subject.precentage.toFixed(2)}%</TypographyLarge>
									</div>
									<div className="flex flex-col items-center">
										<TypographyLarge className="whitespace-nowrap">
											{subject.totalScore} / {subject.grades?.toFixed(1)}
										</TypographyLarge>
									</div>
								</CardContent>
								<CardFooter className="flex items-center justify-between">
									{/* <div className="flex gap-1 items-center">
										<TypographyMuted>ترتيبك : </TypographyMuted>
										<TypographySmall>{student.seatNo}</TypographySmall>
									</div> */}
									<div className="flex gap-1 items-center">
										<TypographyMuted>الحالة : </TypographyMuted>
										<TypographySmall
											className={cn({
												"text-green-600": subject.status === "PASSED",
												"text-red-600": subject.status === "FAILED",
											})}
										>
											{status[subject.status]}
										</TypographySmall>
									</div>
								</CardFooter>
							</Card>
						);
					})}
				</div>
			</div>
		</div>
	);
}
