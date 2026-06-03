"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import {

  Shield,
  LayoutDashboard,
  AlertTriangle,
  Workflow,
  FileWarning,
  Bell,
  Settings,
  LogOut

} from "lucide-react"

export default function EnterpriseLayout({

  children

}: {

  children: React.ReactNode
}) {

  const pathname = usePathname()

  const router = useRouter()

  // =====================================
  // LOGOUT
  // =====================================

  function handleLogout() {

    localStorage.removeItem("token")

    localStorage.removeItem("plan_type")

    localStorage.removeItem("username")

    router.push("/login")
  }

  // =====================================
  // NAVIGATION ITEMS
  // =====================================

  const navItems = [

    {
      label: "Dashboard",

      href: "/enterprise",

      icon: LayoutDashboard
    },

    {
      label: "Threat Monitoring",

      href: "/enterprise/alerts",

      icon: AlertTriangle
    },

    {
      label: "AI Workflows",

      href: "/enterprise/workflows",

      icon: Workflow
    },

    {
      label: "Investigations",

      href: "/enterprise/investigations",

      icon: FileWarning
    },

    {
      label: "Alerts",

      href: "/enterprise/alerts",

      icon: Bell
    },

    {
      label: "Settings",

      href: "/enterprise/settings",

      icon: Settings
    }
  ]

  return (

    <div className="flex min-h-screen">

      {/* =====================================
          SIDEBAR
      ===================================== */}

      <aside
        className="
          w-[280px]
          bg-[#0B1F3A]
          text-white
          flex
          flex-col
          justify-between
          p-6
        "
      >

        <div>

          {/* LOGO */}

          <div
            className="
              flex
              items-center
              gap-3
              mb-12
            "
          >

            <Shield size={32} />

            <div>

              <h1
                className="
                  text-2xl
                  font-bold
                "
              >
                Guardian AI
              </h1>

              <p
                className="
                  text-sm
                  text-slate-300
                "
              >
                Threat Intelligence
              </p>

            </div>

          </div>

          {/* NAVIGATION */}

          <nav className="space-y-3">

            {navItems.map((item) => {

              const Icon = item.icon

              const isActive =
                pathname === item.href

              return (

                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    transition-all

                    ${
                      isActive
                        ? "bg-[#0F2A4D]"
                        : "hover:bg-[#0F2A4D]"
                    }
                  `}
                >

                  <Icon size={20} />

                  {item.label}

                </Link>
              )
            })}

          </nav>

        </div>

        {/* FOOTER */}

        <button
          onClick={handleLogout}
          className="
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-xl
            hover:bg-[#0F2A4D]
            transition-all
          "
        >

          <LogOut size={20} />

          Logout

        </button>

      </aside>

      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <main
        className="
          flex-1
          bg-[#F8FAFC]
        "
      >

        {/* NAVBAR */}

        <header
          className="
            bg-white
            border-b
            border-slate-200
            px-10
            py-5
            flex
            items-center
            justify-between
          "
        >

          <div>

            <h1
              className="
                text-3xl
                font-bold
                text-[#0B1F3A]
              "
            >
              Enterprise Dashboard
            </h1>

            <p className="text-slate-500">

              AI Threat Intelligence Platform

            </p>

          </div>

          {/* PROFILE */}

          <div
            className="
              h-12
              w-12
              rounded-full
              bg-[#2563EB]
              text-white
              flex
              items-center
              justify-center
              font-bold
            "
          >
            B
          </div>

        </header>

        {/* PAGE CONTENT */}

        <div className="p-10">

          {children}

        </div>

      </main>

    </div>
  )
}

