"use client"

import {

  useEffect,
  useState

} from "react"

import {

  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer

} from "recharts"

import {

  fetchThreatAnalytics

} from "@/services/api"

export default function ThreatAnalyticsChart() {

  // =====================================
  // STATE
  // =====================================

  const [chartData, setChartData] =
    useState<any[]>([])

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState("")

  // =====================================
  // FETCH ANALYTICS
  // =====================================

  useEffect(() => {

    async function loadAnalytics() {

      try {

        const data =
          await fetchThreatAnalytics()

        // =================================
        // HANDLE ARRAY / OBJECT
        // =================================

        if (Array.isArray(data)) {

          setChartData(data)
        }

        else if (data.analytics) {

          setChartData(data.analytics)
        }

        else {

          // FALLBACK MOCK

          setChartData([

            {
              name: "Mon",
              threats: 24
            },

            {
              name: "Tue",
              threats: 31
            },

            {
              name: "Wed",
              threats: 18
            },

            {
              name: "Thu",
              threats: 42
            },

            {
              name: "Fri",
              threats: 37
            },

            {
              name: "Sat",
              threats: 29
            },

            {
              name: "Sun",
              threats: 51
            }
          ])
        }
      }

      catch (err: any) {

        setError(
          err.message ||
          "Failed to load analytics"
        )
      }

      finally {

        setLoading(false)
      }
    }

    loadAnalytics()

  }, [])

  // =====================================
  // LOADING
  // =====================================

  if (loading) {

    return (

      <section
        className="
          bg-white
          border
          border-slate-200
          rounded-3xl
          p-8
        "
      >

        <h2
          className="
            text-3xl
            font-bold
            text-[#0B1F3A]
          "
        >
          Threat Analytics
        </h2>

        <p className="mt-4 text-slate-500">

          Loading analytics...

        </p>

      </section>
    )
  }

  // =====================================
  // ERROR
  // =====================================

  if (error) {

    return (

      <section
        className="
          bg-white
          border
          border-red-200
          rounded-3xl
          p-8
        "
      >

        <h2
          className="
            text-3xl
            font-bold
            text-red-600
          "
        >
          Analytics Error
        </h2>

        <p className="mt-4 text-slate-500">

          {error}

        </p>

      </section>
    )
  }

  return (

    <section
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-8
        shadow-sm
      "
    >

      {/* =====================================
          HEADER
      ===================================== */}

      <div>

        <h2
          className="
            text-3xl
            font-bold
            text-[#0B1F3A]
          "
        >
          Threat Analytics
        </h2>

        <p className="mt-2 text-slate-500">

          AI-powered enterprise threat
          intelligence trends

        </p>

      </div>

      {/* =====================================
          CHART
      ===================================== */}

      <div className="mt-10 h-[400px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart data={chartData}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="threats"
              stroke="#2563EB"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </section>
  )
}

