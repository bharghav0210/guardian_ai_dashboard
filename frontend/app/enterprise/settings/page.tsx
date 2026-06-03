"use client"

import { useRouter } from "next/navigation"

import EnterpriseLayout from "@/components/EnterpriseLayout"
import AuthGuard from "@/components/AuthGuard"

export default function EnterpriseSettingsPage() {

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

    <AuthGuard allowedPlan="enterprise">

      <EnterpriseLayout>

        {/* =====================================
            PAGE HEADER
        ===================================== */}

        <section>

          <h1
            className="
              text-4xl
              font-bold
              text-[#0B1F3A]
            "
          >
            Enterprise Settings
          </h1>

          <p className="mt-3 text-slate-500">

            Configure Guardian AI enterprise
            preferences and organization settings

          </p>

        </section>

        {/* =====================================
            PROFILE SETTINGS
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

          <h2
            className="
              text-2xl
              font-bold
              text-[#0B1F3A]
            "
          >
            Organization Profile
          </h2>

          <div className="mt-8 space-y-6">

            <div>

              <label className="text-sm text-slate-500">

                Organization Name

              </label>

              <input
                type="text"
                defaultValue="Guardian Enterprise"
                className="
                  mt-2
                  w-full
                  rounded-xl
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

                Security Contact Email

              </label>

              <input
                type="email"
                defaultValue="security@guardian.ai"
                className="
                  mt-2
                  w-full
                  rounded-xl
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
            AI SETTINGS
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

          <h2
            className="
              text-2xl
              font-bold
              text-[#0B1F3A]
            "
          >
            AI Configuration
          </h2>

          <div className="mt-8 space-y-5">

            <div
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

                <h3 className="font-semibold">

                  Threat Auto Detection

                </h3>

                <p className="text-slate-500 text-sm">

                  Enable automated AI detection

                </p>

              </div>

              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5"
              />

            </div>

            <div
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

                <h3 className="font-semibold">

                  Real-Time Monitoring

                </h3>

                <p className="text-slate-500 text-sm">

                  Enable live enterprise monitoring

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
            bg-white
            border
            border-slate-200
            rounded-3xl
            p-8
            shadow-sm
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

              <h2
                className="
                  text-2xl
                  font-bold
                  text-[#0B1F3A]
                "
              >
                Subscription Plan
              </h2>

              <p className="mt-2 text-slate-500">

                Current Plan:
                {" "}

                <span className="font-semibold">

                  Enterprise

                </span>

              </p>

            </div>

            <button
              onClick={handleChangePlan}
              className="
                bg-[#2563EB]
                hover:bg-blue-700
                text-white
                px-6
                py-4
                rounded-2xl
              "
            >
              Change Plan
            </button>

          </div>

        </section>

        {/* =====================================
            LOGOUT
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

          <h2
            className="
              text-2xl
              font-bold
              text-[#0B1F3A]
            "
          >
            Account Actions
          </h2>

          <button
            onClick={handleLogout}
            className="
              mt-6
              bg-red-600
              hover:bg-red-700
              text-white
              px-6
              py-4
              rounded-2xl
            "
          >
            Logout
          </button>

        </section>

      </EnterpriseLayout>

    </AuthGuard>
  )
}

