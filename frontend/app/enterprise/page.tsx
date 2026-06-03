"use client"

import { useEffect, useState } from "react"

import EnterpriseLayout from "@/components/EnterpriseLayout"
import ThreatAnalyticsChart from "@/components/ThreatAnalyticsChart"
import InvestigationTable from "@/components/InvestigationTable"
import AIWorkflowPanel from "@/components/AIWorkflowPanel"
import RealtimeAlertCenter from "@/components/RealtimeAlertCenter"
import AuthGuard from "@/components/AuthGuard"

import {

  fetchDashboardOverview

} from "@/services/api"

export default function EnterpriseDashboard() {

  // =====================================
  // STATE
  // =====================================

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState("")

  const [overview, setOverview] =
    useState<any>(null)

  // =====================================
  // FETCH DASHBOARD DATA
  // =====================================

  useEffect(() => {

    async function loadDashboard() {

      try {

        const data =
          await fetchDashboardOverview()

        setOverview(data)

      }

      catch (err: any) {

        setError(
          err.message ||
          "Failed to load dashboard"
        )
      }

      finally {

        setLoading(false)
      }
    }

    loadDashboard()

  }, [])

  // =====================================
  // LOADING
  // =====================================

  if (loading) {

    return (

      <main
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-[#F8FAFC]
        "
      >

        <div className="text-center">

          <h1
            className="
              text-3xl
              font-bold
              text-[#0B1F3A]
            "
          >
            Loading Guardian AI...
          </h1>

          <p className="mt-3 text-slate-500">

            Initializing enterprise systems

          </p>

        </div>

      </main>
    )
  }

  // =====================================
  // ERROR
  // =====================================

  if (error) {

    return (

      <main
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-[#F8FAFC]
        "
      >

        <div
          className="
            bg-white
            border
            border-red-200
            rounded-3xl
            p-10
            text-center
          "
        >

          <h1
            className="
              text-3xl
              font-bold
              text-red-600
            "
          >
            Dashboard Error
          </h1>

          <p className="mt-4 text-slate-500">

            {error}

          </p>

        </div>

      </main>
    )
  }

  // =====================================
  // ANALYTICS CARDS
  // =====================================

  const analyticsCards = [

    {
      title: "Active Threats",

      value:
        overview?.total_threats || 0
    },

    {
      title: "Critical Alerts",

      value:
        overview?.critical_alerts || 0
    },

    {
      title: "AI Workflows",

      value:
        overview?.active_workflows || 0
    },

    {
      title: "System Health",

      value:
        overview?.system_health || "99%"
    }
  ]

  // =====================================
  // THREAT FEED
  // =====================================

  const threatFeed = [

    {
      title: "Phishing Campaign Detected",

      description:
        "AI engine flagged suspicious email activity.",

      severity: "Critical",

      severityStyle:
        "bg-red-100 text-red-600"
    },

    {
      title: "Insider Threat Investigation",

      description:
        "Behavioral anomaly detected inside secure systems.",

      severity: "Medium",

      severityStyle:
        "bg-yellow-100 text-yellow-700"
    },

    {
      title: "Malware Distribution Attempt",

      description:
        "AI detected malicious executable transmission.",

      severity: "High",

      severityStyle:
        "bg-orange-100 text-orange-700"
    }
  ]

  return (

    <AuthGuard allowedPlan="enterprise">

      <EnterpriseLayout>

        {/* =====================================
            ANALYTICS OVERVIEW
        ===================================== */}

        <section>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-4
              gap-6
            "
          >

            {analyticsCards.map((card) => (

              <div
                key={card.title}
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-3xl
                  p-6
                  shadow-sm
                "
              >

                <p className="text-slate-500">

                  {card.title}

                </p>

                <h2
                  className="
                    mt-4
                    text-5xl
                    font-bold
                    text-[#0B1F3A]
                  "
                >
                  {card.value}
                </h2>

              </div>

            ))}

          </div>

        </section>

        {/* =====================================
            THREAT ANALYTICS
        ===================================== */}

        <section className="mt-10">

          <ThreatAnalyticsChart />

        </section>

        {/* =====================================
            LIVE THREAT FEED
        ===================================== */}

        <section
          className="
            mt-10
            bg-white
            border
            border-slate-200
            rounded-3xl
            p-8
            shadow-sm
          "
        >

          <div>

            <h2
              className="
                text-3xl
                font-bold
                text-[#0B1F3A]
              "
            >
              Live Threat Feed
            </h2>

            <p className="mt-2 text-slate-500">

              Real-time AI-powered threat monitoring

            </p>

          </div>

          {/* FEED */}

          <div className="mt-8 space-y-5">

            {threatFeed.map((threat) => (

              <div
                key={threat.title}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  bg-[#EEF2F7]
                  p-5
                "
              >

                <div>

                  <h3
                    className="
                      font-semibold
                      text-[#0F172A]
                    "
                  >
                    {threat.title}
                  </h3>

                  <p className="mt-1 text-slate-500">

                    {threat.description}

                  </p>

                </div>

                <span
                  className={`
                    ${threat.severityStyle}
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-medium
                  `}
                >
                  {threat.severity}
                </span>

              </div>

            ))}

          </div>

        </section>

        {/* =====================================
            INVESTIGATIONS
        ===================================== */}

        <InvestigationTable />

        {/* =====================================
            AI WORKFLOWS
        ===================================== */}

        <AIWorkflowPanel />

        {/* =====================================
            ALERT CENTER
        ===================================== */}

        <RealtimeAlertCenter />

      </EnterpriseLayout>

    </AuthGuard>
  )
}

