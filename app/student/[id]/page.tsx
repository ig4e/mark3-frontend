"use client";

import { gql } from "@/src/__generated__";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

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

export default function Page({ params }: { params: { id: string } }) {
	const { data } = useSuspenseQuery(GET_STUDENT, { variables: { studentWhereUniqueInput: { id: params.id } } });

	return <div>Student: {data.student.name}</div>;
}
