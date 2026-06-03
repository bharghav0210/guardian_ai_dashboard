"use client"

import { useRouter } from "next/navigation"

import AuthGuard from "@/components/AuthGuard"
import IndividualLayout from "@/components/IndividualLayout"

export default function IndividualSettingsPage() {

  const router = useRouter()

  // =====================================
  // CHANGE PLAN
  // =====================================

  function handleChangePlan() {

    localStorage.removeItem("token")

    localStorage.removeItem("plan_type")

    localStorage.removeItem("username")

    router.push("/")
  }

  // =====================================
  // LOGOUT
  // =====================================

  function handleLogout() {

    localStorage.removeItem("token")

    localStorage.removeItem("plan_type")

    localStorage.removeItem("username")

    router.push("/login")
  }

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
            Personal Settings
          </h1>

          <p className="mt-4 text-slate-500">

            Manage your Guardian AI protection,
            emergency preferences, and profile

          </p>

        </section>

        {/* =====================================
            PROFILE
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
            Profile Settings
          </h2>

          <div className="mt-8 space-y-6">

            <div>

              <label className="text-sm text-slate-500">

                Full Name

              </label>

              <input
                type="text"
                defaultValue="John Doe"
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  px-4
                  py-3
                  outline-none
                "
              />

            </div>

            <div>

              <label className="text-sm text-slate-500">

                Email Address

              </label>

              <input
                type="email"
                defaultValue="john@example.com"
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  px-4
                  py-3
                  outline-none
                "
              />

            </div>

          </div>

        </section>

        {/* =====================================
            AI PROTECTION SETTINGS
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
            AI Protection Settings
          </h2>

          <div className="mt-8 space-y-5">

            {/* SCAM DETECTION */}

            <div
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

                <h3 className="font-semibold">

                  Scam Detection

                </h3>

                <p className="text-slate-500 text-sm">

                  Automatically detect fraud attempts

                </p>

              </div>

              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5"
              />

            </div>

            {/* SAFE BROWSING */}

            <div
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

                <h3 className="font-semibold">

                  Safe Browsing

                </h3>

                <p className="text-slate-500 text-sm">

                  AI-powered unsafe website blocking

                </p>

              </div>

              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5"
              />

            </div>

            {/* DEVICE PROTECTION */}

            <div
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

                <h3 className="font-semibold">

                  Device Monitoring

                </h3>

                <p className="text-slate-500 text-sm">

                  Real-time AI device protection

                </p>

              </div>

              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5"
              />

            </div>

          </div>

        </section>

        {/* =====================================
            PLAN MANAGEMENT
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

              <h2
                className="
                  text-2xl
                  font-bold
                  text-[#0F172A]
                "
              >
                Subscription Plan
              </h2>

              <p className="mt-2 text-slate-500">

                Current Plan:
                {" "}

                <span className="font-semibold">

                  Individual

                </span>

              </p>

            </div>

            <button
              onClick={handleChangePlan}
              className="
                rounded-2xl
                bg-[#2563EB]
                px-6
                py-4
                text-white
                transition-all
                hover:bg-blue-700
              "
            >
              Change Plan
            </button>

          </div>

        </section>

        {/* =====================================
            ACCOUNT ACTIONS
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
              text-2xl
              font-bold
              text-[#0F172A]
            "
          >
            Account Actions
          </h2>

          <button
            onClick={handleLogout}
            className="
              mt-6
              rounded-2xl
              bg-red-600
              px-6
              py-4
              text-white
              transition-all
              hover:bg-red-700
            "
          >
            Logout
          </button>

        </section>

      </IndividualLayout>

    </AuthGuard>
  )
}

