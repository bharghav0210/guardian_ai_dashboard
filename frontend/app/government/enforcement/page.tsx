"use client"

import AuthGuard from "@/components/AuthGuard"
import GovernmentLayout from "@/components/GovernmentLayout"

export default function GovernmentEnforcementPage() {

  // =====================================
  // ENFORCEMENT OPERATIONS
  // =====================================

  const operations = [

    {
      operation:
      "Cyber Crime Suppression",

      agency:
      "National Cyber Division",

      status:
      "ACTIVE",

      priority:
      "Critical"
    },

    {
      operation:
      "Financial Fraud Enforcement",

      agency:
      "Economic Intelligence Bureau",

      status:
      "DEPLOYED",

      priority:
      "High"
    },

    {
      operation:
      "Dark Web Monitoring Sweep",

      agency:
      "Digital Surveillance Unit",

      status:
      "MONITORING",

      priority:
      "Moderate"
    }
  ]

  // =====================================
  // RESPONSE TEAMS
  // =====================================

  const agencies = [

    {
      name:
      "National Intelligence Agency",

      readiness:
      "98%",

      status:
      "Operational"
    },

    {
      name:
      "Cyber Defense Authority",

      readiness:
      "95%",

      status:
      "Active"
    },

    {
      name:
      "Rapid Enforcement Division",

      readiness:
      "91%",

      status:
      "Standby"
    }
  ]

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
            Enforcement Control Center
          </h1>

          <p
            className="
              mt-4
              text-lg
              text-slate-400
            "
          >
            National enforcement coordination,
            threat neutralization, and
            multi-agency tactical operations

          </p>

        </section>

        {/* =====================================
            METRICS
        ===================================== */}

        <section
          className="
            mt-10
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-6
          "
        >

          {/* ACTIVE ACTIONS */}

          <div
            className="
              rounded-3xl
              border
              border-red-500/20
              bg-[#0F172A]
              p-8
            "
          >

            <p className="text-slate-400">

              Active Enforcement Actions

            </p>

            <h2
              className="
                mt-4
                text-6xl
                font-bold
                text-red-400
              "
            >
              126
            </h2>

          </div>

          {/* AGENCIES */}

          <div
            className="
              rounded-3xl
              border
              border-cyan-500/20
              bg-[#0F172A]
              p-8
            "
          >

            <p className="text-slate-400">

              Coordinated Agencies

            </p>

            <h2
              className="
                mt-4
                text-6xl
                font-bold
                text-cyan-400
              "
            >
              24
            </h2>

          </div>

          {/* RESPONSE */}

          <div
            className="
              rounded-3xl
              border
              border-yellow-500/20
              bg-[#0F172A]
              p-8
            "
          >

            <p className="text-slate-400">

              Tactical Readiness

            </p>

            <h2
              className="
                mt-4
                text-6xl
                font-bold
                text-yellow-300
              "
            >
              READY
            </h2>

          </div>

          {/* SUCCESS */}

          <div
            className="
              rounded-3xl
              border
              border-green-500/20
              bg-[#0F172A]
              p-8
            "
          >

            <p className="text-slate-400">

              Neutralization Success

            </p>

            <h2
              className="
                mt-4
                text-6xl
                font-bold
                text-green-400
              "
            >
              95%
            </h2>

          </div>

        </section>

        {/* =====================================
            ENFORCEMENT OPERATIONS
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
            Live Enforcement Operations
          </h2>

          <div className="mt-8 space-y-5">

            {operations.map((operation) => (

              <div
                key={operation.operation}
                className="
                  rounded-2xl
                  border
                  border-slate-800
                  bg-[#020617]
                  p-6
                "
              >

                <div
                  className="
                    flex
                    flex-col
                    xl:flex-row
                    xl:items-center
                    xl:justify-between
                    gap-5
                  "
                >

                  <div>

                    <h3
                      className="
                        text-xl
                        font-semibold
                        text-white
                      "
                    >

                      {operation.operation}

                    </h3>

                    <p className="mt-2 text-slate-400">

                      {operation.agency}

                    </p>

                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >

                    {/* PRIORITY */}

                    <span
                      className={`
                        rounded-full
                        px-4
                        py-2
                        text-sm
                        font-medium

                        ${operation.priority === "Critical"

                          ? `
                            bg-red-500/20
                            text-red-400
                          `

                          : operation.priority === "High"

                          ? `
                            bg-orange-500/20
                            text-orange-300
                          `

                          : `
                            bg-yellow-500/20
                            text-yellow-300
                          `
                        }
                      `}
                    >

                      {operation.priority}

                    </span>

                    {/* STATUS */}

                    <span
                      className="
                        rounded-full
                        bg-cyan-500/20
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-cyan-300
                      "
                    >

                      {operation.status}

                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* =====================================
            AGENCY GRID
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
            National Response Agencies
          </h2>

          <div className="mt-8 space-y-5">

            {agencies.map((agency) => (

              <div
                key={agency.name}
                className="
                  rounded-2xl
                  border
                  border-slate-800
                  bg-[#020617]
                  p-6
                "
              >

                <div
                  className="
                    flex
                    flex-col
                    xl:flex-row
                    xl:items-center
                    xl:justify-between
                    gap-5
                  "
                >

                  <div>

                    <h3
                      className="
                        text-xl
                        font-semibold
                        text-white
                      "
                    >

                      {agency.name}

                    </h3>

                    <p className="mt-2 text-slate-400">

                      Operational readiness:
                      {" "}
                      {agency.readiness}

                    </p>

                  </div>

                  <span
                    className={`
                      rounded-full
                      px-4
                      py-2
                      text-sm
                      font-medium

                      ${agency.status === "Operational"

                        ? `
                          bg-green-500/20
                          text-green-400
                        `

                        : agency.status === "Active"

                        ? `
                          bg-cyan-500/20
                          text-cyan-300
                        `

                        : `
                          bg-yellow-500/20
                          text-yellow-300
                        `
                      }
                    `}
                  >

                    {agency.status}

                  </span>

                </div>

              </div>

            ))}

          </div>

        </section>

      </GovernmentLayout>

    </AuthGuard>
  )
}

