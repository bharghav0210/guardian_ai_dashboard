import Link from "next/link"

export default function HomePage() {

  const plans = [

    {
      title: "Individual",

      description:
        "Personal AI safety and scam protection.",

      route: "/login",

      features: [

        "Personal Threat Alerts",
        "Device Protection",
        "Emergency SOS",
        "Scam Detection"
      ]
    },

    {
      title: "Enterprise",

      description:
        "AI-powered enterprise threat intelligence.",

      route: "/login",

      features: [

        "Threat Intelligence",
        "AI Workflows",
        "Investigation Center",
        "Real-Time Monitoring"
      ]
    },

    {
      title: "Government",

      description:
        "National Intelligence Response System.",

      route: "/login",

      features: [

        "National Threat Grid",
        "Command Center",
        "Crisis Coordination",
        "Intelligence Operations"
      ]
    }
  ]

  return (

    <main className="bg-white min-h-screen">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section
        className="
          px-10
          py-24
          text-center
        "
      >

        <div
          className="
            inline-flex
            items-center
            rounded-full
            bg-[#EEF2F7]
            px-5
            py-2
            text-sm
            text-[#2563EB]
            font-medium
          "
        >
          AI-Powered Threat Intelligence Platform
        </div>

        <h1
          className="
            mt-8
            text-6xl
            font-bold
            text-[#0B1F3A]
            leading-tight
          "
        >
          Guardian AI
        </h1>

        <p
          className="
            mt-6
            text-xl
            text-slate-500
            max-w-3xl
            mx-auto
          "
        >
          Unified AI-driven security platform
          for individuals, enterprises, and
          government intelligence operations.
        </p>

        <div
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-5
          "
        >

          <Link
            href="/login"
            className="
              bg-[#0B1F3A]
              hover:bg-[#0F2A4D]
              text-white
              px-8
              py-4
              rounded-2xl
              transition-all
            "
          >
            Get Started
          </Link>

          <button
            className="
              border
              border-slate-300
              px-8
              py-4
              rounded-2xl
              hover:bg-slate-100
              transition-all
            "
          >
            Watch Demo
          </button>

        </div>

      </section>

      {/* =====================================
          PRICING / PLAN SECTION
      ===================================== */}

      <section
        className="
          px-10
          pb-24
        "
      >

        <div className="text-center">

          <h2
            className="
              text-5xl
              font-bold
              text-[#0B1F3A]
            "
          >
            Choose Your Plan
          </h2>

          <p className="mt-4 text-slate-500">

            Select the Guardian AI platform
            tailored for your environment

          </p>

        </div>

        {/* PLAN GRID */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-8
          "
        >

          {plans.map((plan) => (

            <div
              key={plan.title}
              className="
                bg-white
                border
                border-slate-200
                rounded-3xl
                p-8
                shadow-sm
                hover:shadow-md
                transition-all
              "
            >

              <h3
                className="
                  text-3xl
                  font-bold
                  text-[#0B1F3A]
                "
              >
                {plan.title}
              </h3>

              <p className="mt-4 text-slate-500">

                {plan.description}

              </p>

              {/* FEATURES */}

              <div className="mt-8 space-y-4">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

                    <div
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#2563EB]
                      "
                    />

                    <span className="text-slate-600">

                      {feature}

                    </span>

                  </div>

                ))}

              </div>

              {/* CTA */}

              <Link
                href={`/login?plan=${plan.title.toLowerCase()}`}
                className="
                  mt-10
                  inline-block
                  w-full
                  bg-[#0B1F3A]
                  hover:bg-[#0F2A4D]
                  text-center
                  text-white
                  px-6
                  py-4
                  rounded-2xl
                  transition-all
                "
              >
                Get Started
              </Link>

            </div>

          ))}

        </div>

      </section>

    </main>
  )
}

