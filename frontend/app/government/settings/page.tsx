"use client"

import { useRouter } from "next/navigation"

import AuthGuard from "@/components/AuthGuard"
import GovernmentLayout from "@/components/GovernmentLayout"

export default function GovernmentSettingsPage() {

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

  return (

    <AuthGuard allowedPlan="government">

      <GovernmentLayout>

        {/* =====================================
            HEADER
        ===================================== */}

        <section>

          <h1
            className="
              text-5xl
              font-bold
              text-white
            "
          >
            Government Settings
          </h1>

          <p
            className="
              mt-4
              text-lg
              text-slate-400
            "
          >
            Configure national intelligence,
            surveillance systems, tactical
            coordination, and AI governance

          </p>

        </section>

        {/* =====================================
            COMMAND CONFIGURATION
        ===================================== */}

        <section
          className="
            mt-10
            rounded-3xl
            border
            border-slate-800
            bg-[#0F172A]
            p-8
          "
        >

          <h2
            className="
              text-3xl
              font-bold
              text-white
            "
          >
            National Command Configuration
          </h2>

          <div className="mt-8 space-y-6">

            {/* THREAT LEVEL */}

            <div>

              <label className="text-sm text-slate-400">

                National Threat Level

              </label>

              <select
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-slate-700
                  bg-[#020617]
                  px-4
                  py-4
                  text-white
                  outline-none
                "
              >

                <option>LOW</option>

                <option selected>
                  MODERATE
                </option>

                <option>HIGH</option>

                <option>CRITICAL</option>

              </select>

            </div>

            {/* AI MODE */}

            <div>

              <label className="text-sm text-slate-400">

                AI Surveillance Mode

              </label>

              <select
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-slate-700
                  bg-[#020617]
                  px-4
                  py-4
                  text-white
                  outline-none
                "
              >

                <option selected>
                  Autonomous Monitoring
                </option>

                <option>
                  Tactical Surveillance
                </option>

                <option>
                  Emergency Protocol Mode
                </option>

              </select>

            </div>

          </div>

        </section>

        {/* =====================================
            SECURITY PROTOCOLS
        ===================================== */}

        <section
          className="
            mt-10
            rounded-3xl
            border
            border-slate-800
            bg-[#0F172A]
            p-8
          "
        >

          <h2
            className="
              text-3xl
              font-bold
              text-white
            "
          >
            Security Protocols
          </h2>

          <div className="mt-8 space-y-5">

            {/* PROTOCOLS */}

            {[
              {
                title:
                "Autonomous Threat Detection",

                description:
                "Enable AI-based automatic threat identification"
              },

              {
                title:
                "Cross-Agency Coordination",

                description:
                "Allow synchronized tactical communication"
              },

              {
                title:
                "Emergency Override System",

                description:
                "Enable emergency national response authorization"
              }

            ].map((item) => (

              <div
                key={item.title}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-slate-800
                  bg-[#020617]
                  p-5
                "
              >

                <div>

                  <h3
                    className="
                      font-semibold
                      text-white
                    "
                  >

                    {item.title}

                  </h3>

                  <p className="mt-1 text-sm text-slate-400">

                    {item.description}

                  </p>

                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="
                    h-5
                    w-5
                  "
                />

              </div>

            ))}

          </div>

        </section>

        {/* =====================================
            ADMINISTRATOR ACCESS
        ===================================== */}

        <section
          className="
            mt-10
            rounded-3xl
            border
            border-slate-800
            bg-[#0F172A]
            p-8
          "
        >

          <h2
            className="
              text-3xl
              font-bold
              text-white
            "
          >
            Administrator Access
          </h2>

          <div className="mt-8 space-y-6">

            <div>

              <label className="text-sm text-slate-400">

                Authorized Command Officer

              </label>

              <input
                type="text"
                defaultValue="National Director"
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-slate-700
                  bg-[#020617]
                  px-4
                  py-4
                  text-white
                  outline-none
                "
              />

            </div>

            <div>

              <label className="text-sm text-slate-400">

                Clearance Level

              </label>

              <input
                type="text"
                defaultValue="Top Secret"
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-slate-700
                  bg-[#020617]
                  px-4
                  py-4
                  text-white
                  outline-none
                "
              />

            </div>

          </div>

        </section>

        {/* =====================================
            ACTIONS
        ===================================== */}

        <section
          className="
            mt-10
            flex
            flex-col
            gap-5
            xl:flex-row
          "
        >

          {/* SAVE */}

          <button
            className="
              rounded-3xl
              bg-cyan-500
              px-8
              py-5
              text-lg
              font-semibold
              text-black
              transition-all
              hover:bg-cyan-400
            "
          >
            Save Government Settings
          </button>

          {/* LOGOUT */}

          <button
            onClick={handleLogout}
            className="
              rounded-3xl
              bg-red-600
              px-8
              py-5
              text-lg
              font-semibold
              text-white
              transition-all
              hover:bg-red-700
            "
          >
            Logout
          </button>

        </section>

      </GovernmentLayout>

    </AuthGuard>
  )
}
