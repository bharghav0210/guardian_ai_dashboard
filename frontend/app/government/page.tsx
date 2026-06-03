"use client"

import AuthGuard from "@/components/AuthGuard"
import GovernmentLayout from "@/components/GovernmentLayout"

export default function GovernmentDashboard() {

  // =====================================
  // NATIONAL METRICS
  // =====================================

  const metrics = [

    {
      title: "Active National Threats",
      value: "1,248",
      color: "text-red-400"
    },

    {
      title: "AI Surveillance Nodes",
      value: "892",
      color: "text-cyan-400"
    },

    {
      title: "Ongoing Operations",
      value: "57",
      color: "text-yellow-400"
    },

    {
      title: "Threat Neutralization",
      value: "94%",
      color: "text-green-400"
    }
  ]

  // =====================================
  // LIVE INTELLIGENCE FEED
  // =====================================

  const intelligenceFeed = [

    {
      title:
      "Cross-Border Cyber Intrusion Detected",

      description:
      "AI surveillance detected coordinated cyber attack attempts targeting national infrastructure.",

      severity:
      "Critical",

      location:
      "Northern Region"
    },

    {
      title:
      "Encrypted Threat Communication Flagged",

      description:
      "Suspicious encrypted communication patterns identified through intelligence monitoring.",

      severity:
      "High",

      location:
      "Eastern Sector"
    },

    {
      title:
      "Potential Financial Fraud Network",

      description:
      "AI behavioral systems identified abnormal financial transaction clusters.",

      severity:
      "Medium",

      location:
      "Central Operations"
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
            National Command Center
          </h1>

          <p
            className="
              mt-4
              text-lg
              text-slate-400
            "
          >
            AI-powered intelligence,
            surveillance, and national
            threat coordination

          </p>

        </section>

        {/* =====================================
            NATIONAL METRICS
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
            AI SURVEILLANCE GRID
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

          {/* SURVEILLANCE */}

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
              98%
            </h2>

            <p className="mt-4 text-slate-400">

              National intelligence systems active

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

              National Threat Level

            </p>

            <h2
              className="
                mt-4
                text-6xl
                font-bold
                text-red-400
              "
            >
              MODERATE
            </h2>

            <p className="mt-4 text-slate-400">

              Increased monitoring protocols enabled

            </p>

          </div>

          {/* RESPONSE */}

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

              Emergency Response Readiness

            </p>

            <h2
              className="
                mt-4
                text-6xl
                font-bold
                text-green-400
              "
            >
              READY
            </h2>

            <p className="mt-4 text-slate-400">

              Tactical coordination systems online

            </p>

          </div>

        </section>

        {/* =====================================
            LIVE INTELLIGENCE FEED
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

          <div
            className="
              flex
              items-center
              justify-between
            "
          >

            <div>

              <h2
                className="
                  text-3xl
                  font-bold
                  text-white
                "
              >
                Live Intelligence Feed
              </h2>

              <p className="mt-2 text-slate-400">

                Real-time national intelligence monitoring

              </p>

            </div>

          </div>

          {/* FEED */}

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

        </section>

      </GovernmentLayout>

    </AuthGuard>
  )
}

