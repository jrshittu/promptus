import React from 'react';
import '@styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
    title: "Promptus",
    description: "Generate AI prompts you can share with loved ones"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'>

                </div>
            </div>
            <main className='app'>
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout
