"use client"

import AuthGuard from "@/components/AuthGuard"
import GovernmentLayout from "@/components/GovernmentLayout"

export default function GovernmentOperationsPage() {

  // =====================================
  // ACTIVE OPERATIONS
  // =====================================

  const operations = [

    {
      mission:
      "Cyber Shield Protocol",

      status:
      "ACTIVE",

      region:
      "Northern Command",

      priority:
      "Critical"
    },

    {
      mission:
      "Financial Threat Sweep",

      status:
      "DEPLOYED",

      region:
      "Central Intelligence",

      priority:
      "High"
    },

    {
      mission:
      "Border Surveillance Matrix",

      status:
      "MONITORING",

      region:
      "Eastern Sector",

      priority:
      "Moderate"
    }
  ]

  // =====================================
  // RESPONSE TEAMS
  // =====================================

  const teams = [

    {
      team:
      "Alpha Tactical Unit",

      readiness:
      "98%",

      status:
      "Ready"
    },

    {
      team:
      "Cyber Defense Squad",

      readiness:
      "94%",

      status:
      "Active"
    },

    {
      team:
      "Rapid Response Force",

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
            Tactical Operations Center
          </h1>

          <p
            className="
              mt-4
              text-lg
              text-slate-400
            "
          >
            AI-coordinated mission control,
            national tactical deployment,
            and live response operations

          </p>

        </section>

        {/* =====================================
            OPERATION METRICS
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

          {/* ACTIVE */}

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

              Active Missions

            </p>

            <h2
              className="
                mt-4
                text-6xl
                font-bold
                text-red-400
              "
            >
              18
            </h2>

          </div>

          {/* DEPLOYED */}

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

              Tactical Units

            </p>

            <h2
              className="
                mt-4
                text-6xl
                font-bold
                text-cyan-400
              "
            >
              42
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

              Emergency Response

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

              Mission Success Rate

            </p>

            <h2
              className="
                mt-4
                text-6xl
                font-bold
                text-green-400
              "
            >
              97%
            </h2>

          </div>

        </section>

        {/* =====================================
            LIVE OPERATIONS
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
            Active Tactical Missions
          </h2>

          <div className="mt-8 space-y-5">

            {operations.map((operation) => (

              <div
                key={operation.mission}
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

                      {operation.mission}

                    </h3>

                    <p className="mt-2 text-slate-400">

                      {operation.region}

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
            RESPONSE TEAMS
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
            Tactical Response Units
          </h2>

          <div className="mt-8 space-y-5">

            {teams.map((team) => (

              <div
                key={team.team}
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

                      {team.team}

                    </h3>

                    <p className="mt-2 text-slate-400">

                      Operational readiness:
                      {" "}
                      {team.readiness}

                    </p>

                  </div>

                  <span
                    className={`
                      rounded-full
                      px-4
                      py-2
                      text-sm
                      font-medium

                      ${team.status === "Ready"

                        ? `
                          bg-green-500/20
                          text-green-400
                        `

                        : team.status === "Active"

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

                    {team.status}

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
