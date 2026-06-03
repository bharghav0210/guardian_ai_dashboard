"use client"

import AuthGuard from "@/components/AuthGuard"
import IndividualLayout from "@/components/IndividualLayout"

export default function IndividualAlertsPage() {

  // =====================================
  // ALERTS
  // =====================================

  const alerts = [

    {
      title:
      "Phishing SMS Blocked",

      description:
      "Guardian AI blocked a suspicious banking SMS attempting credential theft.",

      severity:
      "High",

      time:
      "5 mins ago"
    },

    {
      title:
      "Unsafe Website Prevented",

      description:
      "Potential malware distribution website blocked during browsing.",

      severity:
      "Medium",

      time:
      "18 mins ago"
    },

    {
      title:
      "Suspicious Device Login",

      description:
      "Unknown login attempt detected and denied automatically.",

      severity:
      "High",

      time:
      "1 hour ago"
    },

    {
      title:
      "Security Scan Completed",

      description:
      "All connected devices passed Guardian AI safety verification.",

      severity:
      "Safe",

      time:
      "Today"
    }
  ]

  return (

    <AuthGuard allowedPlan="individual">

      <IndividualLayout>

        {/* =====================================
            HEADER
        ===================================== */}

        <section>

          <h1
            className="
              text-5xl
              font-bold
              text-[#0F172A]
            "
          >
            Safety Alerts
          </h1>

          <p className="mt-4 text-slate-500">

            Real-time AI-powered protection
            and personal threat monitoring

          </p>

        </section>

        {/* =====================================
            ALERT SUMMARY
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

          {/* HIGH RISK */}

          <div
            className="
              rounded-3xl
              bg-white
              border
              border-slate-200
              p-8
              shadow-sm
            "
          >

            <p className="text-slate-500">

              High Risk Alerts

            </p>

            <h2
              className="
                mt-4
                text-6xl
                font-bold
                text-red-600
              "
            >
              2
            </h2>

            <p className="mt-4 text-slate-500">

              Immediate protection activated

            </p>

          </div>

          {/* BLOCKED THREATS */}

          <div
            className="
              rounded-3xl
              bg-white
              border
              border-slate-200
              p-8
              shadow-sm
            "
          >

            <p className="text-slate-500">

              Threats Blocked

            </p>

            <h2
              className="
                mt-4
                text-6xl
                font-bold
                text-[#2563EB]
              "
            >
              47
            </h2>

            <p className="mt-4 text-slate-500">

              Guardian AI actively protecting

            </p>

          </div>

          {/* SAFETY STATUS */}

          <div
            className="
              rounded-3xl
              bg-white
              border
              border-slate-200
              p-8
              shadow-sm
            "
          >

            <p className="text-slate-500">

              Safety Status

            </p>

            <h2
              className="
                mt-4
                text-6xl
                font-bold
                text-green-600
              "
            >
              SAFE
            </h2>

            <p className="mt-4 text-slate-500">

              Personal protection active

            </p>

          </div>

        </section>

        {/* =====================================
            ALERT FEED
        ===================================== */}

        <section
          className="
            mt-10
            rounded-3xl
            bg-white
            border
            border-slate-200
            p-8
            shadow-sm
          "
        >

          <h2
            className="
              text-3xl
              font-bold
              text-[#0F172A]
            "
          >
            Live Alert Feed
          </h2>

          <div className="mt-8 space-y-5">

            {alerts.map((alert) => (

              <div
                key={alert.title}
                className="
                  rounded-2xl
                  border
                  border-slate-100
                  bg-[#F8FAFC]
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
                        text-[#0F172A]
                      "
                    >

                      {alert.title}

                    </h3>

                    <p className="mt-2 text-slate-500">

                      {alert.description}

                    </p>

                    <p className="mt-3 text-sm text-slate-400">

                      {alert.time}

                    </p>

                  </div>

                  <span
                    className={`
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      font-medium

                      ${alert.severity === "High"

                        ? `
                          bg-red-100
                          text-red-600
                        `

                        : alert.severity === "Medium"

                        ? `
                          bg-yellow-100
                          text-yellow-700
                        `

                        : `
                          bg-green-100
                          text-green-700
                        `
                      }
                    `}
                  >

                    {alert.severity}

                  </span>

                </div>

              </div>

            ))}

          </div>

        </section>

      </IndividualLayout>

    </AuthGuard>
  )
}

