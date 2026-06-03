"use client"

import AuthGuard from "@/components/AuthGuard"
import IndividualLayout from "@/components/IndividualLayout"

export default function DevicesPage() {

  // =====================================
  // DEVICES
  // =====================================

  const devices = [

    {
      name: "iPhone 15 Pro",

      type: "Mobile Device",

      status: "Protected",

      lastActive: "2 mins ago",

      risk: "Low"
    },

    {
      name: "MacBook Air M3",

      type: "Laptop",

      status: "Protected",

      lastActive: "12 mins ago",

      risk: "Low"
    },

    {
      name: "Windows Gaming PC",

      type: "Desktop",

      status: "Risk Detected",

      lastActive: "1 hour ago",

      risk: "High"
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
            Device Security
          </h1>

          <p className="mt-4 text-slate-500">

            AI-powered protection and monitoring
            for all connected devices

          </p>

        </section>

        {/* =====================================
            OVERVIEW
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

          {/* CONNECTED */}

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

              Connected Devices

            </p>

            <h2
              className="
                mt-4
                text-6xl
                font-bold
                text-[#0F172A]
              "
            >
              3
            </h2>

            <p className="mt-4 text-slate-500">

              Devices actively monitored

            </p>

          </div>

          {/* PROTECTED */}

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

              Protection Coverage

            </p>

            <h2
              className="
                mt-4
                text-6xl
                font-bold
                text-green-600
              "
            >
              96%
            </h2>

            <p className="mt-4 text-slate-500">

              Guardian AI protection active

            </p>

          </div>

          {/* THREATS */}

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

              Device Threats

            </p>

            <h2
              className="
                mt-4
                text-6xl
                font-bold
                text-red-600
              "
            >
              1
            </h2>

            <p className="mt-4 text-slate-500">

              Immediate attention recommended

            </p>

          </div>

        </section>

        {/* =====================================
            DEVICE LIST
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
            Connected Devices
          </h2>

          <div className="mt-8 space-y-5">

            {devices.map((device) => (

              <div
                key={device.name}
                className="
                  rounded-2xl
                  bg-[#F8FAFC]
                  p-6
                  border
                  border-slate-100
                "
              >

                <div
                  className="
                    flex
                    flex-col
                    xl:flex-row
                    xl:items-center
                    xl:justify-between
                    gap-6
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

                      {device.name}

                    </h3>

                    <p className="mt-1 text-slate-500">

                      {device.type}

                    </p>

                    <p className="mt-2 text-sm text-slate-400">

                      Last Active:
                      {" "}
                      {device.lastActive}

                    </p>

                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >

                    {/* RISK */}

                    <span
                      className={`
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-medium

                        ${device.risk === "High"

                          ? `
                            bg-red-100
                            text-red-600
                          `

                          : `
                            bg-green-100
                            text-green-700
                          `
                        }
                      `}
                    >

                      {device.risk} Risk

                    </span>

                    {/* STATUS */}

                    <span
                      className={`
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-medium

                        ${device.status === "Protected"

                          ? `
                            bg-blue-100
                            text-blue-700
                          `

                          : `
                            bg-orange-100
                            text-orange-700
                          `
                        }
                      `}
                    >

                      {device.status}

                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

      </IndividualLayout>

    </AuthGuard>
  )
}

