import "server-only";
import { IProps } from "./type";

export default async function Await<T>({ children, resolve }: IProps<T>) {
  const result = await resolve;
  return children(result);
}
