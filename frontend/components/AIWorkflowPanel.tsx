"use client"

import { useEffect, useState } from "react"

import {

  fetchWorkflows

} from "@/services/api"

export default function AIWorkflowPanel() {

  // =====================================
  // STATE
  // =====================================

  const [workflows, setWorkflows] =
    useState<any[]>([])

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState("")

  // =====================================
  // FETCH WORKFLOWS
  // =====================================

  useEffect(() => {

    async function loadWorkflows() {

      try {

        const data =
          await fetchWorkflows()

        // =================================
        // HANDLE ARRAY / OBJECT
        // =================================

        if (Array.isArray(data)) {

          setWorkflows(data)
        }

        else if (data.workflows) {

          setWorkflows(data.workflows)
        }

        else {

          setWorkflows([])
        }
      }

      catch (err: any) {

        setError(
          err.message ||
          "Failed to load workflows"
        )
      }

      finally {

        setLoading(false)
      }
    }

    loadWorkflows()

  }, [])

  // =====================================
  // STATUS STYLE
  // =====================================

  function statusStyle(
    status: string
  ) {

    if (status === "Completed") {

      return "bg-green-100 text-green-700"
    }

    if (status === "Running") {

      return "bg-blue-100 text-blue-700"
    }

    if (status === "Active") {

      return "bg-purple-100 text-purple-700"
    }

    if (status === "Pending") {

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
          AI Workflow Engine
        </h2>

        <p className="mt-4 text-slate-500">

          Loading workflow pipelines...

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
          Workflow Engine Error
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
            AI Workflow Engine
          </h2>

          <p className="mt-2 text-slate-500">

            Real-time orchestration of
            Guardian AI automation pipelines

          </p>

        </div>

      </div>

      {/* =====================================
          WORKFLOW LIST
      ===================================== */}

      <div className="mt-8 space-y-5">

        {workflows.length === 0 && (

          <div
            className="
              rounded-2xl
              bg-[#EEF2F7]
              p-6
              text-slate-500
            "
          >
            No active workflows detected
          </div>
        )}

        {workflows.map((workflow, index) => (

          <div
            key={index}
            className="
              rounded-2xl
              bg-[#EEF2F7]
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
                    text-[#0F172A]
                  "
                >

                  {workflow.name ||
                   workflow.workflow_name ||
                   "AI Workflow"}

                </h3>

                <p className="mt-1 text-slate-500">

                  Progress:
                  {" "}

                  {workflow.progress ||
                   "0%"}

                </p>

              </div>

              <span
                className={`
                  ${statusStyle(
                    workflow.status ||
                    "Pending"
                  )}
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  font-medium
                `}
              >

                {workflow.status ||
                 "Pending"}

              </span>

            </div>

            {/* PROGRESS BAR */}

            <div
              className="
                mt-4
                h-3
                w-full
                rounded-full
                bg-slate-200
              "
            >

              <div
                className="
                  h-3
                  rounded-full
                  bg-[#2563EB]
                "
                style={{
                  width:
                    workflow.progress ||
                    "0%"
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

