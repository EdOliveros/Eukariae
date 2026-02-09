import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/assets/favicon.ico" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    var theme = localStorage.getItem('theme') || 'light';
                    if (theme === 'dark') document.documentElement.classList.add('dark');
                  } catch (e) {}
                })();
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
