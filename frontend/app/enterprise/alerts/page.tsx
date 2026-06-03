import EnterpriseLayout from "@/components/EnterpriseLayout"
import RealtimeAlertCenter from "@/components/RealtimeAlertCenter"
import AuthGuard from "@/components/AuthGuard"

export default function AlertsPage() {

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
            Alert Center
          </h1>

          <p className="mt-3 text-slate-500">

            Real-time enterprise alert monitoring
            and AI-driven threat notifications

          </p>

        </section>

        {/* =====================================
            ALERT CENTER
        ===================================== */}

        <RealtimeAlertCenter />

      </EnterpriseLayout>

    </AuthGuard>
  )
}

