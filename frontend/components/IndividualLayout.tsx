"use client"

import Link from "next/link"

import {
  usePathname,
  useRouter
} from "next/navigation"

export default function IndividualLayout({

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
  // NAVIGATION
  // =====================================

  const navigation = [

    {
      name: "Dashboard",
      href: "/individual"
    },

    {
      name: "Safety Alerts",
      href: "/individual/alerts"
    },

    {
      name: "Emergency",
      href: "/individual/emergency"
    },

    {
      name: "Devices",
      href: "/individual/devices"
    },

    {
      name: "Settings",
      href: "/individual/settings"
    }
  ]

  return (

    <div
      className="
        min-h-screen
        flex
        bg-[#F8FAFC]
      "
    >

      {/* =====================================
          SIDEBAR
      ===================================== */}

      <aside
        className="
          hidden
          lg:flex
          w-[320px]
          flex-col
          bg-[#041C44]
          px-6
          py-8
          text-white
        "
      >

        {/* =====================================
            BRANDING
        ===================================== */}

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          {/* SHIELD ICON */}

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-[#0D2B63]
              text-3xl
            "
          >
            🛡️
          </div>

          {/* BRAND TEXT */}

          <div>

            <h1
              className="
                text-3xl
                font-bold
                text-white
              "
            >
              Guardian AI
            </h1>

            <p
              className="
                mt-1
                text-sm
                text-blue-200
              "
            >
              Personal Protection
            </p>

          </div>

        </div>

        {/* =====================================
            NAVIGATION
        ===================================== */}

        <nav className="mt-14 space-y-4">

          {navigation.map((item) => {

            const active =
              pathname === item.href

            return (

              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex
                  items-center
                  rounded-3xl
                  px-6
                  py-5
                  text-lg
                  font-medium
                  transition-all

                  ${active

                    ? `
                      bg-[#0D2B63]
                      text-white
                    `

                    : `
                      text-blue-100
                      hover:bg-[#0D2B63]
                    `
                  }
                `}
              >

                {item.name}

              </Link>
            )
          })}

        </nav>

        {/* =====================================
            SAFETY STATUS
        ===================================== */}

        <div
          className="
            mt-10
            rounded-3xl
            border
            border-blue-400/20
            bg-[#0D2B63]
            p-6
          "
        >

          <p
            className="
              text-sm
              text-blue-200
            "
          >
            AI Safety Status
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
              text-cyan-300
            "
          >
            SAFE
          </h2>

          <p
            className="
              mt-3
              text-sm
              text-blue-100
            "
          >
            Guardian AI is actively protecting
            your identity and devices

          </p>

        </div>

        {/* =====================================
            LOGOUT
        ===================================== */}

        <button
          onClick={handleLogout}
          className="
            mt-auto
            rounded-3xl
            bg-red-600
            px-6
            py-5
            text-lg
            font-medium
            text-white
            transition-all
            hover:bg-red-700
          "
        >
          Logout
        </button>

      </aside>

      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <main
        className="
          flex-1
          p-6
          lg:p-10
        "
      >

        {children}

      </main>

    </div>
  )
}

