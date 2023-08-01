/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumStudentStatusFilter = {
  equals?: InputMaybe<StudentStatus>;
  in?: InputMaybe<Array<StudentStatus>>;
  not?: InputMaybe<NestedEnumStudentStatusFilter>;
  notIn?: InputMaybe<Array<StudentStatus>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mark = {
  __typename?: 'Mark';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  otherSubjects: OtherSubjects;
  student: Student;
  studentId: Scalars['String']['output'];
  subjects: Subjects;
  updatedAt: Scalars['DateTime']['output'];
};

export type MarkNullableRelationFilter = {
  is?: InputMaybe<MarkWhereInput>;
  isNot?: InputMaybe<MarkWhereInput>;
};

export type MarkWhereInput = {
  AND?: InputMaybe<Array<MarkWhereInput>>;
  NOT?: InputMaybe<Array<MarkWhereInput>>;
  OR?: InputMaybe<Array<MarkWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  otherSubjects?: InputMaybe<OtherSubjectsCompositeFilter>;
  student?: InputMaybe<StudentRelationFilter>;
  studentId?: InputMaybe<StringFilter>;
  subjects?: InputMaybe<SubjectsCompositeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumStudentStatusFilter = {
  equals?: InputMaybe<StudentStatus>;
  in?: InputMaybe<Array<StudentStatus>>;
  not?: InputMaybe<NestedEnumStudentStatusFilter>;
  notIn?: InputMaybe<Array<StudentStatus>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type OtherSubjects = {
  __typename?: 'OtherSubjects';
  economicsAndStatistics?: Maybe<Scalars['Float']['output']>;
  nationalEducation?: Maybe<Scalars['Float']['output']>;
  religiousEducation?: Maybe<Scalars['Float']['output']>;
};

export type OtherSubjectsCompositeFilter = {
  equals?: InputMaybe<OtherSubjectsObjectEqualityInput>;
  is?: InputMaybe<OtherSubjectsWhereInput>;
  isNot?: InputMaybe<OtherSubjectsWhereInput>;
};

export type OtherSubjectsObjectEqualityInput = {
  economicsAndStatistics?: InputMaybe<Scalars['Float']['input']>;
  nationalEducation?: InputMaybe<Scalars['Float']['input']>;
  religiousEducation?: InputMaybe<Scalars['Float']['input']>;
};

export type OtherSubjectsWhereInput = {
  AND?: InputMaybe<Array<OtherSubjectsWhereInput>>;
  NOT?: InputMaybe<Array<OtherSubjectsWhereInput>>;
  OR?: InputMaybe<Array<OtherSubjectsWhereInput>>;
  economicsAndStatistics?: InputMaybe<FloatNullableFilter>;
  nationalEducation?: InputMaybe<FloatNullableFilter>;
  religiousEducation?: InputMaybe<FloatNullableFilter>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  lastPage: Scalars['Int']['output'];
  perPage: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageInput = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  searchStudents: StudentPage;
  student: Student;
  students: StudentPage;
};


export type QuerySearchStudentsArgs = {
  query: Scalars['String']['input'];
};


export type QueryStudentArgs = {
  studentWhereUniqueInput: StudentWhereUniqueInput;
};


export type QueryStudentsArgs = {
  studentPageInput?: InputMaybe<PageInput>;
  studentWhereInput?: InputMaybe<StudentWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Student = {
  __typename?: 'Student';
  createdAt: Scalars['DateTime']['output'];
  educationalAdministration?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mark?: Maybe<Mark>;
  name: Scalars['String']['output'];
  seatNo: Scalars['Int']['output'];
  section: Scalars['String']['output'];
  shool?: Maybe<Scalars['String']['output']>;
  status: StudentStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type StudentPage = {
  __typename?: 'StudentPage';
  items: Array<Student>;
  pageInfo: PageInfo;
};

export type StudentRelationFilter = {
  is?: InputMaybe<StudentWhereInput>;
  isNot?: InputMaybe<StudentWhereInput>;
};

export enum StudentStatus {
  Failed = 'FAILED',
  Passed = 'PASSED',
  SecondRole = 'SECOND_ROLE'
}

export type StudentWhereInput = {
  AND?: InputMaybe<Array<StudentWhereInput>>;
  NOT?: InputMaybe<Array<StudentWhereInput>>;
  OR?: InputMaybe<Array<StudentWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  educationalAdministration?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  mark?: InputMaybe<MarkNullableRelationFilter>;
  name?: InputMaybe<StringFilter>;
  seatNo?: InputMaybe<IntFilter>;
  section?: InputMaybe<StringFilter>;
  shool?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumStudentStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type StudentWhereUniqueInput = {
  AND?: InputMaybe<Array<StudentWhereInput>>;
  NOT?: InputMaybe<Array<StudentWhereInput>>;
  OR?: InputMaybe<Array<StudentWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  educationalAdministration?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  mark?: InputMaybe<MarkNullableRelationFilter>;
  name?: InputMaybe<StringFilter>;
  seatNo?: InputMaybe<Scalars['Int']['input']>;
  section?: InputMaybe<StringFilter>;
  shool?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumStudentStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Subjects = {
  __typename?: 'Subjects';
  appliedMathematics?: Maybe<Scalars['Float']['output']>;
  arabic?: Maybe<Scalars['Float']['output']>;
  biology?: Maybe<Scalars['Float']['output']>;
  chemistry?: Maybe<Scalars['Float']['output']>;
  firstForeignLanguage?: Maybe<Scalars['Float']['output']>;
  geography?: Maybe<Scalars['Float']['output']>;
  geology?: Maybe<Scalars['Float']['output']>;
  history?: Maybe<Scalars['Float']['output']>;
  philosophy?: Maybe<Scalars['Float']['output']>;
  physics?: Maybe<Scalars['Float']['output']>;
  psychology?: Maybe<Scalars['Float']['output']>;
  pureMathematics?: Maybe<Scalars['Float']['output']>;
  secondForeignLanguage?: Maybe<Scalars['Float']['output']>;
};

export type SubjectsCompositeFilter = {
  equals?: InputMaybe<SubjectsObjectEqualityInput>;
  is?: InputMaybe<SubjectsWhereInput>;
  isNot?: InputMaybe<SubjectsWhereInput>;
};

export type SubjectsObjectEqualityInput = {
  appliedMathematics?: InputMaybe<Scalars['Float']['input']>;
  arabic?: InputMaybe<Scalars['Float']['input']>;
  biology?: InputMaybe<Scalars['Float']['input']>;
  chemistry?: InputMaybe<Scalars['Float']['input']>;
  firstForeignLanguage?: InputMaybe<Scalars['Float']['input']>;
  geography?: InputMaybe<Scalars['Float']['input']>;
  geology?: InputMaybe<Scalars['Float']['input']>;
  history?: InputMaybe<Scalars['Float']['input']>;
  philosophy?: InputMaybe<Scalars['Float']['input']>;
  physics?: InputMaybe<Scalars['Float']['input']>;
  psychology?: InputMaybe<Scalars['Float']['input']>;
  pureMathematics?: InputMaybe<Scalars['Float']['input']>;
  secondForeignLanguage?: InputMaybe<Scalars['Float']['input']>;
};

export type SubjectsWhereInput = {
  AND?: InputMaybe<Array<SubjectsWhereInput>>;
  NOT?: InputMaybe<Array<SubjectsWhereInput>>;
  OR?: InputMaybe<Array<SubjectsWhereInput>>;
  appliedMathematics?: InputMaybe<FloatNullableFilter>;
  arabic?: InputMaybe<FloatNullableFilter>;
  biology?: InputMaybe<FloatNullableFilter>;
  chemistry?: InputMaybe<FloatNullableFilter>;
  firstForeignLanguage?: InputMaybe<FloatNullableFilter>;
  geography?: InputMaybe<FloatNullableFilter>;
  geology?: InputMaybe<FloatNullableFilter>;
  history?: InputMaybe<FloatNullableFilter>;
  philosophy?: InputMaybe<FloatNullableFilter>;
  physics?: InputMaybe<FloatNullableFilter>;
  psychology?: InputMaybe<FloatNullableFilter>;
  pureMathematics?: InputMaybe<FloatNullableFilter>;
  secondForeignLanguage?: InputMaybe<FloatNullableFilter>;
};

export type StudentQueryVariables = Exact<{
  studentWhereUniqueInput: StudentWhereUniqueInput;
}>;


export type StudentQuery = { __typename?: 'Query', student: { __typename?: 'Student', id: string, seatNo: number, name: string, shool?: string | null, educationalAdministration?: string | null, status: StudentStatus, section: string, updatedAt: any, createdAt: any, mark?: { __typename?: 'Mark', id: string, updatedAt: any, createdAt: any, subjects: { __typename?: 'Subjects', arabic?: number | null, firstForeignLanguage?: number | null, secondForeignLanguage?: number | null, pureMathematics?: number | null, appliedMathematics?: number | null, history?: number | null, geography?: number | null, philosophy?: number | null, psychology?: number | null, chemistry?: number | null, biology?: number | null, geology?: number | null, physics?: number | null }, otherSubjects: { __typename?: 'OtherSubjects', religiousEducation?: number | null, nationalEducation?: number | null, economicsAndStatistics?: number | null } } | null } };


export const StudentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Student"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentWhereUniqueInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StudentWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"student"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"studentWhereUniqueInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentWhereUniqueInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"seatNo"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shool"}},{"kind":"Field","name":{"kind":"Name","value":"educationalAdministration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"section"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"mark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"arabic"}},{"kind":"Field","name":{"kind":"Name","value":"firstForeignLanguage"}},{"kind":"Field","name":{"kind":"Name","value":"secondForeignLanguage"}},{"kind":"Field","name":{"kind":"Name","value":"pureMathematics"}},{"kind":"Field","name":{"kind":"Name","value":"appliedMathematics"}},{"kind":"Field","name":{"kind":"Name","value":"history"}},{"kind":"Field","name":{"kind":"Name","value":"geography"}},{"kind":"Field","name":{"kind":"Name","value":"philosophy"}},{"kind":"Field","name":{"kind":"Name","value":"psychology"}},{"kind":"Field","name":{"kind":"Name","value":"chemistry"}},{"kind":"Field","name":{"kind":"Name","value":"biology"}},{"kind":"Field","name":{"kind":"Name","value":"geology"}},{"kind":"Field","name":{"kind":"Name","value":"physics"}}]}},{"kind":"Field","name":{"kind":"Name","value":"otherSubjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"religiousEducation"}},{"kind":"Field","name":{"kind":"Name","value":"nationalEducation"}},{"kind":"Field","name":{"kind":"Name","value":"economicsAndStatistics"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<StudentQuery, StudentQueryVariables>;