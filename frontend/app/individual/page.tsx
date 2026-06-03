
import AuthGuard from "@/components/AuthGuard"
import IndividualLayout from "@/components/IndividualLayout"

export default function IndividualDashboard() {

  // =====================================
  // PERSONAL ALERTS
  // =====================================

  const alerts = [

    {
      title:
      "Suspicious Login Attempt",

      description:
      "Guardian AI blocked a suspicious login attempt from another device.",

      severity:
      "High"
    },

    {
      title:
      "Unsafe Website Detected",

      description:
      "Potential phishing website blocked during browsing session.",

      severity:
      "Medium"
    },

    {
      title:
      "Emergency Contact Updated",

      description:
      "Your trusted emergency contact list was successfully updated.",

      severity:
      "Safe"
    }
  ]

  // =====================================
  // DEVICES
  // =====================================

  const devices = [

    {
      name: "iPhone 15 Pro",
      status: "Protected"
    },

    {
      name: "MacBook Air",
      status: "Protected"
    },

    {
      name: "Windows Laptop",
      status: "Risk Detected"
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
            Personal Safety Dashboard
          </h1>

          <p className="mt-4 text-slate-500">

            AI-powered protection for your
            digital identity, devices, and safety

          </p>

        </section>

        {/* =====================================
            RISK OVERVIEW
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

          {/* RISK SCORE */}

          <div
            className="
              rounded-3xl
              bg-gradient-to-br
              from-[#2563EB]
              to-[#1D4ED8]
              p-8
              text-white
              shadow-lg
            "
          >

            <p className="text-blue-100">

              Personal AI Risk Score

            </p>

            <h2
              className="
                mt-4
                text-7xl
                font-bold
              "
            >
              92
            </h2>

            <p className="mt-4 text-blue-100">

              Excellent protection status

            </p>

          </div>

          {/* SAFE STATUS */}

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

              Protected Devices

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

            <p className="mt-4 text-green-600">

              All systems monitored

            </p>

          </div>

          {/* ACTIVE ALERTS */}

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

              Active Safety Alerts

            </p>

            <h2
              className="
                mt-4
                text-6xl
                font-bold
                text-[#0F172A]
              "
            >
              2
            </h2>

            <p className="mt-4 text-orange-500">

              Attention recommended

            </p>

          </div>

        </section>

        {/* =====================================
            SAFETY ALERTS
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
            Safety Alerts
          </h2>

          <div className="mt-8 space-y-5">

            {alerts.map((alert) => (

              <div
                key={alert.title}
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
                    items-start
                    justify-between
                  "
                >

                  <div>

                    <h3
                      className="
                        text-lg
                        font-semibold
                        text-[#0F172A]
                      "
                    >

                      {alert.title}

                    </h3>

                    <p className="mt-2 text-slate-500">

                      {alert.description}

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

        {/* =====================================
            DEVICE SECURITY
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
            Device Security
          </h2>

          <div className="mt-8 space-y-5">

            {devices.map((device) => (

              <div
                key={device.name}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  bg-[#F8FAFC]
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

                    {device.name}

                  </h3>

                  <p className="text-slate-500">

                    AI protection active

                  </p>

                </div>

                <span
                  className={`
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium

                    ${device.status === "Protected"

                      ? `
                        bg-green-100
                        text-green-700
                      `

                      : `
                        bg-red-100
                        text-red-600
                      `
                    }
                  `}
                >

                  {device.status}

                </span>

              </div>

            ))}

          </div>

        </section>

      </IndividualLayout>

    </AuthGuard>
  )
}

