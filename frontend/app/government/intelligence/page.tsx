"use client"

import AuthGuard from "@/components/AuthGuard"
import GovernmentLayout from "@/components/GovernmentLayout"

export default function GovernmentIntelligencePage() {

  // =====================================
  // THREAT METRICS
  // =====================================

  const metrics = [

    {
      title: "Intercepted Threats",
      value: "2,481",
      color: "text-red-400"
    },

    {
      title: "AI Surveillance Nodes",
      value: "918",
      color: "text-cyan-400"
    },

    {
      title: "Classified Operations",
      value: "74",
      color: "text-yellow-300"
    },

    {
      title: "Threat Neutralization",
      value: "96%",
      color: "text-green-400"
    }
  ]

  // =====================================
  // INTELLIGENCE FEED
  // =====================================

  const intelligenceFeed = [

    {
      title:
      "Critical Infrastructure Intrusion Attempt",

      description:
      "AI surveillance systems detected unauthorized access attempts targeting national infrastructure systems.",

      severity:
      "Critical",

      location:
      "Northern Command"
    },

    {
      title:
      "Coordinated Cyber Activity Detected",

      description:
      "Multiple synchronized attack signatures identified across financial systems.",

      severity:
      "High",

      location:
      "Central Intelligence Grid"
    },

    {
      title:
      "Suspicious Encrypted Communications",

      description:
      "Pattern analysis flagged abnormal encrypted communication activity.",

      severity:
      "Medium",

      location:
      "Eastern Sector"
    }
  ]

  // =====================================
  // REGIONAL THREATS
  // =====================================

  const regions = [

    {
      region: "North Zone",
      level: "HIGH"
    },

    {
      region: "South Zone",
      level: "MODERATE"
    },

    {
      region: "East Zone",
      level: "LOW"
    },

    {
      region: "West Zone",
      level: "HIGH"
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
            Intelligence Center
          </h1>

          <p
            className="
              mt-4
              text-lg
              text-slate-400
            "
          >
            Real-time AI intelligence,
            surveillance monitoring,
            and national cyber analysis

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

          {metrics.map((metric) => (

            <div
              key={metric.title}
              className="
                rounded-3xl
                border
                border-slate-800
                bg-[#0F172A]
                p-8
                shadow-xl
              "
            >

              <p className="text-slate-400">

                {metric.title}

              </p>

              <h2
                className={`
                  mt-4
                  text-5xl
                  font-bold

                  ${metric.color}
                `}
              >

                {metric.value}

              </h2>

            </div>

          ))}

        </section>

        {/* =====================================
            SURVEILLANCE GRID
        ===================================== */}

        <section
          className="
            mt-10
            grid
            grid-cols-1
            xl:grid-cols-3
            gap-6
          "
        >

          {/* COVERAGE */}

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

              AI Surveillance Coverage

            </p>

            <h2
              className="
                mt-4
                text-6xl
                font-bold
                text-cyan-400
              "
            >
              99%
            </h2>

            <p className="mt-4 text-slate-400">

              Nationwide tactical systems online

            </p>

          </div>

          {/* THREAT LEVEL */}

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

              Threat Condition

            </p>

            <h2
              className="
                mt-4
                text-6xl
                font-bold
                text-red-400
              "
            >
              ELEVATED
            </h2>

            <p className="mt-4 text-slate-400">

              High monitoring protocols active

            </p>

          </div>

          {/* AI ANALYTICS */}

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

              AI Prediction Accuracy

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

            <p className="mt-4 text-slate-400">

              Predictive intelligence operational

            </p>

          </div>

        </section>

        {/* =====================================
            LIVE FEED + REGIONAL GRID
        ===================================== */}

        <section
          className="
            mt-10
            grid
            grid-cols-1
            xl:grid-cols-3
            gap-6
          "
        >

          {/* LIVE FEED */}

          <div
            className="
              xl:col-span-2
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
              Live Intelligence Feed
            </h2>

            <div className="mt-8 space-y-5">

              {intelligenceFeed.map((item) => (

                <div
                  key={item.title}
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
                      xl:items-start
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

                        {item.title}

                      </h3>

                      <p className="mt-3 text-slate-400">

                        {item.description}

                      </p>

                      <p className="mt-4 text-sm text-cyan-400">

                        {item.location}

                      </p>

                    </div>

                    <span
                      className={`
                        rounded-full
                        px-4
                        py-2
                        text-sm
                        font-medium

                        ${item.severity === "Critical"

                          ? `
                            bg-red-500/20
                            text-red-400
                          `

                          : item.severity === "High"

                          ? `
                            bg-orange-500/20
                            text-orange-400
                          `

                          : `
                            bg-yellow-500/20
                            text-yellow-300
                          `
                        }
                      `}
                    >

                      {item.severity}

                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* REGIONAL STATUS */}

          <div
            className="
              rounded-3xl
              border
              border-slate-800
              bg-[#0F172A]
              p-8
            "
          >

            <h2
              className="
                text-2xl
                font-bold
                text-white
              "
            >
              Regional Threat Grid
            </h2>

            <div className="mt-8 space-y-5">

              {regions.map((region) => (

                <div
                  key={region.region}
                  className="
                    rounded-2xl
                    bg-[#020617]
                    p-5
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <div>

                      <h3
                        className="
                          font-semibold
                          text-white
                        "
                      >

                        {region.region}

                      </h3>

                    </div>

                    <span
                      className={`
                        rounded-full
                        px-4
                        py-2
                        text-sm
                        font-medium

                        ${region.level === "HIGH"

                          ? `
                            bg-red-500/20
                            text-red-400
                          `

                          : region.level === "MODERATE"

                          ? `
                            bg-yellow-500/20
                            text-yellow-300
                          `

                          : `
                            bg-green-500/20
                            text-green-400
                          `
                        }
                      `}
                    >

                      {region.level}

                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

      </GovernmentLayout>

    </AuthGuard>
  )
}

