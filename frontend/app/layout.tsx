import "./globals.css"

import { TooltipProvider } from "@/components/ui/tooltip"

export const metadata = {

  title: "Guardian AI",

  description:
    "AI-Powered Threat Intelligence Platform"
}

export default function RootLayout({

  children,
}: {

  children: React.ReactNode
}) {

  return (

    <html lang="en">

      <body>

        <TooltipProvider>

          {children}

        </TooltipProvider>

      </body>

    </html>
  )
}

