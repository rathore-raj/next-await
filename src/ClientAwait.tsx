"use client";
// @ts-ignore
import { use } from "react";
import { IProps } from "./type";

export default async function ClientAwait<T>({ children, resolve }: IProps<T>) {
  const result: T = use(resolve);
  return children(result);
}
