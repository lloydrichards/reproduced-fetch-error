/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query GetAllPosts {\n  \n  getProducts {\n    id\n    lead\n    notes\n    name\n    progress\n    status\n    version\n  \n}\n  }\n": types.GetAllPostsDocument,
};

export function graphql(source: "\n  query GetAllPosts {\n  \n  getProducts {\n    id\n    lead\n    notes\n    name\n    progress\n    status\n    version\n  \n}\n  }\n"): (typeof documents)["\n  query GetAllPosts {\n  \n  getProducts {\n    id\n    lead\n    notes\n    name\n    progress\n    status\n    version\n  \n}\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;