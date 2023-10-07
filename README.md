# 🚀 next-await

`next-await` is a lightweight and intuitive npm package that simplifies handling slow data requests in your Next.js applications. It provides components `<Await>` and `<ClientAwait>` to help you use Suspense without creating a new component.

## Summary

In Next.js applications, managing suspense boundaries for parts of your page that depend on slow data requests can be challenging. Creating new components solely for handling these slow data requests often leads to unnecessary boilerplate and complexity in your codebase. This is where `next-await` comes to the rescue!

### The Problem:

When dealing with slow data requests, you usually have to create new component boundaries to handle suspense, making your codebase more complex and harder to maintain. This can lead to friction in development and slow down your workflow.

### How `next-await` Solves It:

`next-await` provides the `<Await>` and `<ClientAwait>` components, eliminating the need to create new components manually. These components take in a promise, suspend until the promise fulfills, and then yield the result as a render prop. This approach allows you to render fallback UI for slow data requests without the hassle of creating additional components for handling promise. With `next-await`, you can focus on building your application logic without getting bogged down by the complexities of suspense boundaries.

## Features ✨

- 🤩 Seamless integration: Easily integrate with your Next.js applications.
- ⏳ Simplified data loading: Handle slow data requests without creating new components manually.
- 💻 Universal compatibility: Works seamlessly for both RSCs and client components.

## Installation ⚙️

```bash
npm install next-await

# or

yarn add next-await
```

## Usage ⚡

`<Await>` Component For Server Component

```tsx
import { FC, Suspense } from "react";
import Await from "next-await/server";

const MyComponent: FC = () => {
  return (
    <div>
      <Suspense fallback={<>loading...</>}>
        <Await<TResult> resolve={slowDataRequest()}>
          {(data) => (
              // Render your UI with the fetched data (assuming slowDataRequest returns a promise resolving to a TResult)
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default MyComponent;
```

`<ClientAwait>` Component for Client Component

```tsx
"use client";
import { FC, Suspense } from "react";
import ClientAwait from "next-await/client";

const MyComponent: FC = () => {
  return (
    <div>
      <Suspense fallback={<>loading...</>}>
        <ClientAwait<TResult> resolve={slowDataRequest()}>
          {(data) => (
              // Render your UI with the fetched data (assuming slowDataRequest returns a promise resolving to a TResult)
          )}
        </ClientAwait>
      </Suspense>
    </div>
  );
};

export default MyComponent;
```

## Displaying error 🌋

If you’d like to display an error to your users when a Promise is rejected, you can use an [Error Boundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary). To use an error boundary, wrap the `<Await>` or `<ClientAwait>` component. If the Promise which is passed gets rejected the fallback for the error boundary will be displayed.

## Contribution 🤝

We welcome contributions! Feel free to open issues or submit pull requests for any improvements.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) for details.

## Acknowledgments 🙌

[Inspired by Remix's Await component](https://remix.run/docs/en/main/components/await)
