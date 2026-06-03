"use client"

import { useState } from "react"

import {
  useRouter,
  useSearchParams
} from "next/navigation"

export default function LoginPage() {

  const router = useRouter()

  const searchParams =
    useSearchParams()

  // =====================================
  // PLAN TYPE
  // =====================================

  const selectedPlan =
    searchParams.get("plan") ||
    "enterprise"

  // =====================================
  // STATE
  // =====================================

  const [username, setUsername] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState("")

  // =====================================
  // LOGIN
  // =====================================

  async function handleLogin(
    e: React.FormEvent
  ) {

    e.preventDefault()

    setLoading(true)

    setError("")

    try {

      const formData = new FormData()

      formData.append(
        "username",
        username
      )

      formData.append(
        "password",
        password
      )

      const response = await fetch(

        "http://127.0.0.1:8000/login",

        {
          method: "POST",
          body: formData
        }
      )

      const data =
        await response.json()

      // =================================
      // ERROR
      // =================================

      if (!response.ok) {

        throw new Error(

          data.detail ||
          "Login failed"
        )
      }

      // =================================
      // STORE SESSION
      // =================================

      localStorage.setItem(
        "token",
        data.access_token
      )

      localStorage.setItem(
        "username",
        data.username
      )

      localStorage.setItem(
        "plan_type",
        selectedPlan
      )

      // =================================
      // REDIRECT
      // =================================

      if (
        selectedPlan ===
        "enterprise"
      ) {

        router.push(
          "/enterprise"
        )
      }

      else if (
        selectedPlan ===
        "government"
      ) {

        router.push(
          "/government"
        )
      }

      else {

        router.push(
          "/individual"
        )
      }

    }

    catch (err: any) {

      setError(
        err.message
      )
    }

    finally {

      setLoading(false)
    }
  }

  return (

    <main
      className="
        min-h-screen
        flex
        bg-[#020617]
      "
    >

      {/* =====================================
          LEFT PANEL
      ===================================== */}

      <section
        className="
          hidden
          xl:flex
          w-1/2
          flex-col
          justify-between
          bg-[#041C44]
          p-14
          text-white
        "
      >

        {/* BRAND */}

        <div>

          <div
            className="
              flex
              items-center
              gap-4
            "
          >

            {/* SHIELD */}

            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-3xl
                bg-[#0D2B63]
                text-4xl
              "
            >
              🛡️
            </div>

            {/* TITLE */}

            <div>

              <h1
                className="
                  text-5xl
                  font-bold
                "
              >
                Guardian AI
              </h1>

              <p
                className="
                  mt-2
                  text-lg
                  text-blue-200
                "
              >
                AI Security Ecosystem
              </p>

            </div>

          </div>

        </div>

        {/* HERO */}

        <div>

          <h2
            className="
              max-w-xl
              text-6xl
              font-bold
              leading-tight
            "
          >
            AI-Powered Protection
            for Individuals,
            Enterprises,
            and Governments
          </h2>

          <p
            className="
              mt-8
              max-w-lg
              text-xl
              leading-relaxed
              text-blue-100
            "
          >
            Unified intelligence,
            cyber defense,
            tactical monitoring,
            and real-time AI security
            infrastructure.

          </p>

        </div>

        {/* FOOTER */}

        <div>

          <p className="text-blue-200">

            Guardian AI Platform

          </p>

        </div>

      </section>

      {/* =====================================
          RIGHT PANEL
      ===================================== */}

      <section
        className="
          flex
          flex-1
          items-center
          justify-center
          bg-[#F8FAFC]
          p-8
        "
      >

        <div
          className="
            w-full
            max-w-md
            rounded-[32px]
            bg-white
            p-10
            shadow-2xl
          "
        >

          {/* HEADER */}

          <div className="text-center">

            <h1
              className="
                text-5xl
                font-bold
                text-[#0F172A]
              "
            >
              Welcome Back
            </h1>

            <p
              className="
                mt-4
                text-lg
                text-slate-500
              "
            >
              Login to continue
              into Guardian AI

            </p>

            {/* PLAN */}

            <div
              className="
                mt-6
                inline-flex
                rounded-full
                bg-blue-50
                px-5
                py-3
                text-sm
                font-semibold
                text-[#2563EB]
              "
            >
              {selectedPlan.toUpperCase()}
            </div>

          </div>

          {/* FORM */}

          <form
            onSubmit={handleLogin}
            className="
              mt-10
              space-y-6
            "
          >

            {/* USERNAME */}

            <div>

              <label
                className="
                  text-sm
                  font-medium
                  text-slate-600
                "
              >
                Username
              </label>

              <input
                type="text"
                required
                value={username}
                onChange={(e) =>
                  setUsername(
                    e.target.value
                  )
                }
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  px-5
                  py-4
                  outline-none
                  focus:border-[#2563EB]
                "
              />

            </div>

            {/* PASSWORD */}

            <div>

              <label
                className="
                  text-sm
                  font-medium
                  text-slate-600
                "
              >
                Password
              </label>

              <input
                type="password"
                required
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  px-5
                  py-4
                  outline-none
                  focus:border-[#2563EB]
                "
              />

            </div>

            {/* ERROR */}

            {error && (

              <div
                className="
                  rounded-2xl
                  bg-red-100
                  px-4
                  py-4
                  text-sm
                  text-red-600
                "
              >
                {error}
              </div>

            )}

            {/* LOGIN BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                rounded-3xl
                bg-[#0B1F3A]
                py-5
                text-lg
                font-semibold
                text-white
                transition-all
                hover:bg-[#12315A]
              "
            >

              {loading

                ? "Signing In..."

                : "Login"
              }

            </button>

          </form>

          {/* SIGNUP */}

          <div
            className="
              mt-8
              text-center
            "
          >

            <p className="text-slate-500">

              Don't have an account?

            </p>

            <button
              onClick={() =>
                router.push("/signup")
              }
              className="
                mt-4
                rounded-2xl
                bg-[#2563EB]
                px-6
                py-3
                text-white
                transition-all
                hover:bg-blue-700
              "
            >
              Create Account
            </button>

          </div>

        </div>

      </section>

    </main>
  )
}

