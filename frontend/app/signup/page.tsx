"use client"

import { useRouter } from "next/navigation"

import {
  useState
} from "react"

export default function SignupPage() {

  const router = useRouter()

  // =====================================
  // FORM STATE
  // =====================================

  const [formData, setFormData] = useState({

    fullname: "",

    email: "",

    username: "",

    password: "",

    plan_type: "Individual"
  })

  const [loading, setLoading] =
    useState(false)

  // =====================================
  // HANDLE CHANGE
  // =====================================

  function handleChange(

    e: React.ChangeEvent<
      HTMLInputElement
    >
  ) {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value
    })
  }

  // =====================================
  // PLAN SELECT
  // =====================================

  function selectPlan(

    plan: string

  ) {

    setFormData({

      ...formData,

      plan_type: plan
    })
  }

  // =====================================
  // SUBMIT
  // =====================================

  async function handleSignup(

    e: React.FormEvent
  ) {

    e.preventDefault()

    try {

      setLoading(true)

      const body = new FormData()

      body.append(
        "fullname",
        formData.fullname
      )

      body.append(
        "email",
        formData.email
      )

      body.append(
        "username",
        formData.username
      )

      body.append(
        "password",
        formData.password
      )

      body.append(
        "plan_type",
        formData.plan_type
      )

      const response = await fetch(

        "${BASE_URL}/signup",

        {
          method: "POST",

          body
        }
      )

      const data =
        await response.json()

      if (!response.ok) {

        alert(data.detail)

        return
      }

      alert(
        "Signup successful!"
      )

      router.push("/login")

    } catch (error) {

      console.log(error)

      alert(
        "Signup failed"
      )

    } finally {

      setLoading(false)
    }
  }

  return (

    <div
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
                Unified AI Security Ecosystem
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
            Protect Individuals,
            Enterprises, and Nations
            with AI Intelligence
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
            Guardian AI delivers
            enterprise-grade intelligence,
            tactical operations,
            personal protection,
            and national surveillance
            infrastructure in one ecosystem.

          </p>

        </div>

        {/* FOOTER */}

        <div>

          <p className="text-blue-200">

            AI-Powered Cyber Defense Platform

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
            max-w-2xl
            rounded-[32px]
            bg-white
            p-10
            shadow-2xl
          "
        >

          {/* HEADER */}

          <div>

            <h1
              className="
                text-5xl
                font-bold
                text-[#0F172A]
              "
            >
              Create Account
            </h1>

            <p
              className="
                mt-4
                text-lg
                text-slate-500
              "
            >
              Join the Guardian AI ecosystem

            </p>

          </div>

          {/* PLAN SELECTOR */}

          <div
            className="
              mt-10
              grid
              grid-cols-1
              md:grid-cols-3
              gap-4
            "
          >

            {[
              "Individual",
              "Enterprise",
              "Government"
            ].map((plan) => (

              <button
                key={plan}
                type="button"
                onClick={() =>
                  selectPlan(plan)
                }
                className={`
                  rounded-3xl
                  border-2
                  px-6
                  py-6
                  text-lg
                  font-semibold
                  transition-all

                  ${formData.plan_type === plan

                    ? `
                      border-[#2563EB]
                      bg-blue-50
                      text-[#2563EB]
                    `

                    : `
                      border-slate-200
                      text-slate-600
                      hover:border-blue-300
                    `
                  }
                `}
              >

                {plan}

              </button>

            ))}

          </div>

          {/* FORM */}

          <form
            onSubmit={handleSignup}
            className="mt-10 space-y-6"
          >

            {/* FULLNAME */}

            <div>

              <label
                className="
                  text-sm
                  font-medium
                  text-slate-600
                "
              >
                Full Name
              </label>

              <input
                type="text"
                name="fullname"
                required
                onChange={handleChange}
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  px-5
                  py-4
                  outline-none
                  focus:border-blue-500
                "
              />

            </div>

            {/* EMAIL */}

            <div>

              <label
                className="
                  text-sm
                  font-medium
                  text-slate-600
                "
              >
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  px-5
                  py-4
                  outline-none
                  focus:border-blue-500
                "
              />

            </div>

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
                name="username"
                required
                onChange={handleChange}
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  px-5
                  py-4
                  outline-none
                  focus:border-blue-500
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
                name="password"
                required
                onChange={handleChange}
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  px-5
                  py-4
                  outline-none
                  focus:border-blue-500
                "
              />

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                rounded-3xl
                bg-[#2563EB]
                px-6
                py-5
                text-lg
                font-semibold
                text-white
                transition-all
                hover:bg-blue-700
              "
            >

              {loading

                ? "Creating Account..."

                : "Create Guardian AI Account"
              }

            </button>

          </form>

        </div>

      </section>

    </div>
  )
}

