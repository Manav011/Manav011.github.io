import './globals.scss';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Manav Bafna',
  description: 'As a seasoned full-stack developer, I seamlessly navigate both front-end and back-end technologies. From crafting intuitive user interfaces to optimizing server-side performance, I bring a holistic approach to software development. Let’s collaborate to build robust and user-friendly applications.',
  icons:{
    icon:["/images/MV/favicon.ico?v=4"],
    apple:["/images/MV/apple-touch-icon.png?v=4"],
    shortcut:["/images/MV/apple-touch-icon.png"],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Head>
      <Script
          defer
          data-domain="manav.is-a.dev"
          src="https://analytics.is-a.dev/js/script.js"
        />
      </Head>
      <body  className={`${inter.className} h-[640vh] lg:h-[700vh] relative pt-28 sm:pt-36 bg-gray-900 text-gray-50 text-opacity-90`}>
        <div className=" fixed top-[6rem] -z-10 right-[11rem] h-[25rem] w-[25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#946263]"></div>
        <div className=" fixed top-[1rem] -z-10 left-[11rem] h-[25rem] w-[25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#676394]"></div>
        {children}
        </body>
    </html>
  )
}
