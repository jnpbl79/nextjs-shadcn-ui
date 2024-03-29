import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { SiteFooter } from '@/components/site-footer'
import { ExamplesNav } from '@/components/examples-nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            inter.className
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <div vaul-drawer-wrapper=""> */}
            <div className="container relative pt-8">
              {/* <SiteHeader /> */}
              <ExamplesNav />
              <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl">
                <main className="flex-1">{children}</main>

              </div>

              {/* </div> */}

            </div>
            <SiteFooter />
            {/* <TailwindIndicator /> */}
            {/* <ThemeSwitcher /> */}
            {/* <Analytics /> */}
            {/* <NewYorkToaster /> */}
            {/* <DefaultToaster /> */}
            {/* <NewYorkSonner /> */}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
