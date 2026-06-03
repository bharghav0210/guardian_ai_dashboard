"use client"

import { useEffect, useState } from "react"

import {

  fetchAlerts

} from "@/services/api"

export default function RealtimeAlertCenter() {

  // =====================================
  // STATE
  // =====================================

  const [alerts, setAlerts] =
    useState<any[]>([])

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState("")

  // =====================================
  // FETCH ALERTS
  // =====================================

  useEffect(() => {

    async function loadAlerts() {

      try {

        const data =
          await fetchAlerts()

        // =================================
        // HANDLE ARRAY / OBJECT
        // =================================

        if (Array.isArray(data)) {

          setAlerts(data)
        }

        else if (data.alerts) {

          setAlerts(data.alerts)
        }

        else {

          setAlerts([])
        }
      }

      catch (err: any) {

        setError(
          err.message ||
          "Failed to load alerts"
        )
      }

      finally {

        setLoading(false)
      }
    }

    loadAlerts()

  }, [])

  // =====================================
  // SEVERITY STYLE
  // =====================================

  function severityStyle(
    severity: string
  ) {

    if (severity === "Critical") {

      return "bg-red-100 text-red-600"
    }

    if (severity === "High") {

      return "bg-orange-100 text-orange-700"
    }

    if (severity === "Medium") {

      return "bg-yellow-100 text-yellow-700"
    }

    return "bg-slate-100 text-slate-600"
  }

  // =====================================
  // LOADING
  // =====================================

  if (loading) {

    return (

      <section
        className="
          mt-10
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
          Real-Time Alert Center
        </h2>

        <p className="mt-4 text-slate-500">

          Loading live alerts...

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
          mt-10
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
          Alert Center Error
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
        mt-10
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
              text-[#0B1F3A]
            "
          >
            Real-Time Alert Center
          </h2>

          <p className="mt-2 text-slate-500">

            Live AI-driven security alerts
            and incident activity

          </p>

        </div>

        {/* LIVE STATUS */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <div
            className="
              h-3
              w-3
              rounded-full
              bg-green-500
              animate-pulse
            "
          />

          <span className="text-sm text-slate-500">

            Live Monitoring

          </span>

        </div>

      </div>

      {/* =====================================
          ALERT LIST
      ===================================== */}

      <div className="mt-8 space-y-5">

        {alerts.length === 0 && (

          <div
            className="
              rounded-2xl
              bg-[#EEF2F7]
              p-6
              text-slate-500
            "
          >
            No active alerts detected
          </div>
        )}

        {alerts.map((alert, index) => (

          <div
            key={index}
            className="
              flex
              items-start
              justify-between
              rounded-2xl
              bg-[#EEF2F7]
              p-5
              hover:bg-slate-100
              transition-all
            "
          >

            <div>

              <h3
                className="
                  font-semibold
                  text-[#0F172A]
                "
              >

                {alert.title ||
                 alert.message ||
                 "Security Alert"}

              </h3>

              <p className="mt-1 text-slate-500">

                Source:
                {" "}

                {alert.source ||
                 "Guardian AI Engine"}

              </p>

              <p
                className="
                  mt-1
                  text-sm
                  text-slate-400
                "
              >

                {alert.time ||
                 "Recently detected"}

              </p>

            </div>

            <span
              className={`
                ${severityStyle(
                  alert.severity ||
                  "Medium"
                )}
                rounded-full
                px-4
                py-2
                text-sm
                font-medium
              `}
            >

              {alert.severity ||
               "Medium"}

            </span>

          </div>

        ))}

      </div>

    </section>
  )
}

