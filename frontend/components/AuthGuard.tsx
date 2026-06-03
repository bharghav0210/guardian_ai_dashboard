"use client"

import { useEffect } from "react"

import { useRouter } from "next/navigation"

export default function AuthGuard({

  children,

  allowedPlan

}: {

  children: React.ReactNode

  allowedPlan: string
}) {

  const router = useRouter()

  useEffect(() => {

    const token =
      localStorage.getItem("token")

    const plan =
      localStorage.getItem("plan_type")

    // =====================================
    // NO TOKEN
    // =====================================

    if (!token) {

      router.push("/login")

      return
    }

    // =====================================
    // PLAN MISMATCH
    // =====================================

    if (plan !== allowedPlan) {

      router.push("/login")

      return
    }

  }, [router, allowedPlan])

  return <>{children}</>
}

