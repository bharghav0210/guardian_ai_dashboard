"use client"

import AuthGuard from "@/components/AuthGuard"
import IndividualLayout from "@/components/IndividualLayout"

export default function EmergencyPage() {

  // =====================================
  // EMERGENCY CONTACTS
  // =====================================

  const contacts = [

    {
      name: "Sarah Johnson",
      relation: "Sister",
      phone: "+1 202-555-0111"
    },

    {
      name: "Michael Brown",
      relation: "Friend",
      phone: "+1 202-555-0198"
    },

    {
      name: "Emergency Services",
      relation: "Emergency",
      phone: "911"
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
            Emergency Center
          </h1>

          <p className="mt-4 text-slate-500">

            AI-powered emergency assistance
            and trusted safety network

          </p>

        </section>

        {/* =====================================
            SOS CARD
        ===================================== */}

        <section
          className="
            mt-10
            rounded-3xl
            bg-gradient-to-br
            from-red-600
            to-red-700
            p-10
            text-white
            shadow-xl
          "
        >

          <div
            className="
              flex
              flex-col
              xl:flex-row
              xl:items-center
              xl:justify-between
              gap-8
            "
          >

            <div>

              <h2
                className="
                  text-4xl
                  font-bold
                "
              >
                Emergency SOS
              </h2>

              <p className="mt-4 text-red-100">

                Immediately notify emergency
                contacts and activate Guardian AI
                emergency assistance

              </p>

            </div>

            <button
              className="
                rounded-3xl
                bg-white
                px-10
                py-6
                text-2xl
                font-bold
                text-red-600
                transition-all
                hover:scale-105
              "
            >
              ACTIVATE SOS
            </button>

          </div>

        </section>

        {/* =====================================
            AI SAFETY STATUS
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

          {/* STATUS */}

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
                text-5xl
                font-bold
                text-green-600
              "
            >
              SAFE
            </h2>

            <p className="mt-4 text-slate-500">

              No active threats detected

            </p>

          </div>

          {/* RESPONSE TIME */}

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

              AI Emergency Response

            </p>

            <h2
              className="
                mt-4
                text-5xl
                font-bold
                text-[#0F172A]
              "
            >
              24/7
            </h2>

            <p className="mt-4 text-slate-500">

              Guardian AI monitoring active

            </p>

          </div>

          {/* TRUST SCORE */}

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

              Emergency Preparedness

            </p>

            <h2
              className="
                mt-4
                text-5xl
                font-bold
                text-[#2563EB]
              "
            >
              94%
            </h2>

            <p className="mt-4 text-slate-500">

              Excellent readiness score

            </p>

          </div>

        </section>

        {/* =====================================
            TRUSTED CONTACTS
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
            Trusted Emergency Contacts
          </h2>

          <div className="mt-8 space-y-5">

            {contacts.map((contact) => (

              <div
                key={contact.name}
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

                    {contact.name}

                  </h3>

                  <p className="text-slate-500">

                    {contact.relation}

                  </p>

                </div>

                <span
                  className="
                    rounded-full
                    bg-[#2563EB]
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                  "
                >

                  {contact.phone}

                </span>

              </div>

            ))}

          </div>

        </section>

      </IndividualLayout>

    </AuthGuard>
  )
}

