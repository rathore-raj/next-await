export interface IProps<TResult> {
    children: (result: TResult) => JSX.Element;
    resolve: Promise<TResult>;
}