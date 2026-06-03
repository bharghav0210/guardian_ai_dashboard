"use client"

import { useEffect, useState } from "react"

import {

  fetchInvestigations

} from "@/services/api"

export default function InvestigationTable() {

  // =====================================
  // STATE
  // =====================================

  const [investigations, setInvestigations] =
    useState<any[]>([])

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState("")

  // =====================================
  // FETCH INVESTIGATIONS
  // =====================================

  useEffect(() => {

    async function loadInvestigations() {

      try {

        const data =
          await fetchInvestigations()

        // =================================
        // HANDLE ARRAY / OBJECT
        // =================================

        if (Array.isArray(data)) {

          setInvestigations(data)
        }

        else if (data.investigations) {

          setInvestigations(
            data.investigations
          )
        }

        else {

          setInvestigations([])
        }
      }

      catch (err: any) {

        setError(
          err.message ||
          "Failed to load investigations"
        )
      }

      finally {

        setLoading(false)
      }
    }

    loadInvestigations()

  }, [])

  // =====================================
  // STATUS STYLE
  // =====================================

  function statusStyle(
    status: string
  ) {

    if (status === "Open") {

      return "bg-red-100 text-red-600"
    }

    if (status === "Investigating") {

      return "bg-yellow-100 text-yellow-700"
    }

    if (status === "Resolved") {

      return "bg-green-100 text-green-700"
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
          Investigation Center
        </h2>

        <p className="mt-4 text-slate-500">

          Loading investigations...

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
          Investigation Error
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

      <div>

        <h2
          className="
            text-3xl
            font-bold
            text-[#0B1F3A]
          "
        >
          Investigation Center
        </h2>

        <p className="mt-2 text-slate-500">

          AI-assisted investigation management
          and enterprise case tracking

        </p>

      </div>

      {/* =====================================
          TABLE
      ===================================== */}

      <div className="mt-8 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr
              className="
                border-b
                border-slate-200
                text-left
              "
            >

              <th className="pb-4">

                Case ID

              </th>

              <th className="pb-4">

                Threat

              </th>

              <th className="pb-4">

                Analyst

              </th>

              <th className="pb-4">

                Status

              </th>

            </tr>

          </thead>

          <tbody>

            {investigations.length === 0 && (

              <tr>

                <td
                  colSpan={4}
                  className="
                    py-10
                    text-center
                    text-slate-500
                  "
                >
                  No investigations available
                </td>

              </tr>
            )}

            {investigations.map(

              (investigation, index) => (

                <tr
                  key={index}
                  className="
                    border-b
                    border-slate-100
                  "
                >

                  <td className="py-5">

                    #
                    {investigation.id ||
                     investigation.case_id ||
                     index + 1}

                  </td>

                  <td className="py-5">

                    {investigation.threat ||
                     investigation.title ||
                     "Threat Investigation"}

                  </td>

                  <td className="py-5">

                    {investigation.analyst ||
                     "Guardian AI"}

                  </td>

                  <td className="py-5">

                    <span
                      className={`
                        ${statusStyle(
                          investigation.status ||
                          "Open"
                        )}
                        rounded-full
                        px-4
                        py-2
                        text-sm
                        font-medium
                      `}
                    >

                      {investigation.status ||
                       "Open"}

                    </span>

                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

    </section>
  )
}

