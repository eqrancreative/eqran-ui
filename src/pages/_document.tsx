import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect, useState } from 'react';

function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href={'dark-logo.ico'} />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default Document;