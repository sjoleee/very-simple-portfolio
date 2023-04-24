import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="font-normal break-keep selection:bg-PRIMARY_LIGHT selection:dark:text-BLACK text-BLACK dark:bg-BLACK dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
