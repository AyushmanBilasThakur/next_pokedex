import React from 'react'
import Head from 'next/head'
function baseTemplate({children}) {
    return (
        <>
            <Head>
                <title>Next Pokedex</title>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            {children}
        </>
    )
}

export default baseTemplate
