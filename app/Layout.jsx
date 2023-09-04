import React from 'react';
import '@styles/globals.css';

export const metadata = {
    title: "Promptus",
    description: "Generate AI prompts you can share"
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
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout
