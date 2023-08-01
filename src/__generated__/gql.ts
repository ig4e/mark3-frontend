/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery Student($studentWhereUniqueInput: StudentWhereUniqueInput!) {\n\tstudent(studentWhereUniqueInput: $studentWhereUniqueInput) {\n\t  id\n\t  seatNo\n\t  name\n\t  shool\n\t  educationalAdministration\n\t  status\n\t  section\n\t  updatedAt\n\t  createdAt\n\t  mark {\n\t\tid\n\t\tsubjects {\n\t\t  arabic\n\t\t  firstForeignLanguage\n\t\t  secondForeignLanguage\n\t\t  pureMathematics\n\t\t  appliedMathematics\n\t\t  history\n\t\t  geography\n\t\t  philosophy\n\t\t  psychology\n\t\t  chemistry\n\t\t  biology\n\t\t  geology\n\t\t  physics\n\t\t}\n\t\totherSubjects {\n\t\t  religiousEducation\n\t\t  nationalEducation\n\t\t  economicsAndStatistics\n\t\t}\n\t\tupdatedAt\n\t\tcreatedAt\n\t  }\n\t}\n  }\n": types.StudentDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Student($studentWhereUniqueInput: StudentWhereUniqueInput!) {\n\tstudent(studentWhereUniqueInput: $studentWhereUniqueInput) {\n\t  id\n\t  seatNo\n\t  name\n\t  shool\n\t  educationalAdministration\n\t  status\n\t  section\n\t  updatedAt\n\t  createdAt\n\t  mark {\n\t\tid\n\t\tsubjects {\n\t\t  arabic\n\t\t  firstForeignLanguage\n\t\t  secondForeignLanguage\n\t\t  pureMathematics\n\t\t  appliedMathematics\n\t\t  history\n\t\t  geography\n\t\t  philosophy\n\t\t  psychology\n\t\t  chemistry\n\t\t  biology\n\t\t  geology\n\t\t  physics\n\t\t}\n\t\totherSubjects {\n\t\t  religiousEducation\n\t\t  nationalEducation\n\t\t  economicsAndStatistics\n\t\t}\n\t\tupdatedAt\n\t\tcreatedAt\n\t  }\n\t}\n  }\n"): (typeof documents)["\nquery Student($studentWhereUniqueInput: StudentWhereUniqueInput!) {\n\tstudent(studentWhereUniqueInput: $studentWhereUniqueInput) {\n\t  id\n\t  seatNo\n\t  name\n\t  shool\n\t  educationalAdministration\n\t  status\n\t  section\n\t  updatedAt\n\t  createdAt\n\t  mark {\n\t\tid\n\t\tsubjects {\n\t\t  arabic\n\t\t  firstForeignLanguage\n\t\t  secondForeignLanguage\n\t\t  pureMathematics\n\t\t  appliedMathematics\n\t\t  history\n\t\t  geography\n\t\t  philosophy\n\t\t  psychology\n\t\t  chemistry\n\t\t  biology\n\t\t  geology\n\t\t  physics\n\t\t}\n\t\totherSubjects {\n\t\t  religiousEducation\n\t\t  nationalEducation\n\t\t  economicsAndStatistics\n\t\t}\n\t\tupdatedAt\n\t\tcreatedAt\n\t  }\n\t}\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;