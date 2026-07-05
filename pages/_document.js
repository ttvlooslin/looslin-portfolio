import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          @import 'tailwindcss/base';
          @import 'tailwindcss/components';
          @import 'tailwindcss/utilities';
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
