"use client";

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandLoading,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command";

import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useDebounce } from "usehooks-ts";
import { gql } from "@/src/__generated__";
import { useLazyQuery, useQuery } from "@apollo/client";
import Link from "next/link";
import { SearchIcon } from "lucide-react";

const SEARCH_STUDENTS = gql(`query StudentSearch($query: String!) {
    searchStudents(query: $query) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      items {
        id
        seatNo
        name
        shool
        educationalAdministration
        status
        section
      }
    }
  }`);

const SEARCH_BY_SEATNO = gql(`query Students($studentWhereInput: StudentWhereInput) {
	students(studentWhereInput: $studentWhereInput) {
	  pageInfo {
		total
		perPage
		currentPage
		lastPage
		hasNextPage
	  }
	  items {
		id
		seatNo
		name
		shool
		educationalAdministration
		status
		section
		updatedAt
		createdAt
	  }
	}
  }`);

function Search({ noShortcut = false }: { noShortcut: boolean }) {
	const [open, setOpen] = React.useState(false);
	const [searchQuery, setSearchQuery] = React.useState("");
	const debouncedQuery = useDebounce(searchQuery, 500);
	const { loading, error, data } = useQuery(SEARCH_STUDENTS, { variables: { query: debouncedQuery } });
	const [loadStudentWitjSeatNo, { loading: studentLoadingWithSeatNo, data: studentDataWithSeatNo }] = useLazyQuery(SEARCH_BY_SEATNO, {
		variables: { studentWhereInput: { seatNo: { equals: Number(debouncedQuery) } } },
	});

	useEffect(() => {
		if (!isNaN(Number(debouncedQuery))) {
			loadStudentWitjSeatNo({ variables: { studentWhereInput: { seatNo: { equals: Number(debouncedQuery) } } } });
		}
	}, [debouncedQuery, loadStudentWitjSeatNo]);

	React.useEffect(() => {
		if (!noShortcut) {
			const down = (e: KeyboardEvent) => {
				if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
					e.preventDefault();
					setOpen((open) => !open);
				}
			};

			document.addEventListener("keydown", down);
			return () => document.removeEventListener("keydown", down);
		}
	}, [noShortcut]);

	return (
		<>
			<Button
				variant="outline"
				className={cn("relative w-full justify-start text-sm text-muted-foreground sm:pe-12 md:w-40 lg:w-64")}
				onClick={() => setOpen(true)}
			>
				<kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex me-2">
					<span className="text-xs">⌘</span>K
				</kbd>
				<kbd className="pointer-events-none md:hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex me-2">
					<SearchIcon className="w-4 h-4"></SearchIcon>
				</kbd>
				<span className="hidden lg:inline-flex">أبحث عن طالب...</span>
				<span className="inline-flex lg:hidden">أبحث...</span>
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen} commandProps={{ shouldFilter: false }}>
				<CommandInput placeholder="أكتب اسم الطالب او رقم الجلوس للبحث" value={searchQuery} onValueChange={setSearchQuery} />
				<CommandList>
					{studentDataWithSeatNo?.students.items && (
						<CommandGroup heading="الطلاب برقم الجلوس">
							{studentDataWithSeatNo?.students.items.map((student) => (
								<Link key={student.id} href={`/students/${student.id}`} onClick={() => setOpen(false)}>
									<CommandItem className="flex flex-col items-start justify-between gap-2 w-full">
										<div className="flex items-center justify-between w-full">
											<div>
												<span>{student.name}</span>
											</div>
											<div>
												<CommandShortcut>
													<span>{student.seatNo}</span>
												</CommandShortcut>
											</div>
										</div>
										<div className="flex items-center justify-between gap-4 w-full">
											<div>
												<span className="line-clamp-1">{student.shool}</span>
											</div>
											<div>
												<CommandShortcut>
													<span className="whitespace-nowrap">{student.section}</span>
												</CommandShortcut>
											</div>
										</div>
									</CommandItem>
								</Link>
							))}
						</CommandGroup>
					)}
					<CommandGroup heading="الطلاب">
						{data?.searchStudents.items.map((student) => (
							<Link key={student.id} href={`/students/${student.id}`} onClick={() => setOpen(false)}>
								<CommandItem className="flex flex-col items-start justify-between gap-2 w-full">
									<div className="flex items-center justify-between w-full">
										<div>
											<span>{student.name}</span>
										</div>
										<div>
											<CommandShortcut>
												<span>{student.seatNo}</span>
											</CommandShortcut>
										</div>
									</div>
									<div className="flex items-center justify-between gap-4 w-full">
										<div>
											<span className="line-clamp-1">{student.shool}</span>
										</div>
										<div>
											<CommandShortcut>
												<span className="whitespace-nowrap">{student.section}</span>
											</CommandShortcut>
										</div>
									</div>
								</CommandItem>
							</Link>
						))}
					</CommandGroup>
					<CommandEmpty>مفيش نتايج.</CommandEmpty>
				</CommandList>
			</CommandDialog>
		</>
	);
}

export default Search;
