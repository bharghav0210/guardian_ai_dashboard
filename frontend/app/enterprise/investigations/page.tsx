import EnterpriseLayout from "@/components/EnterpriseLayout"
import InvestigationTable from "@/components/InvestigationTable"
import AuthGuard from "@/components/AuthGuard"

export default function InvestigationsPage() {

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
            Investigation Center
          </h1>

          <p className="mt-3 text-slate-500">

            AI-assisted enterprise threat
            investigations and incident response

          </p>

        </section>

        {/* =====================================
            INVESTIGATION TABLE
        ===================================== */}

        <InvestigationTable />

      </EnterpriseLayout>

    </AuthGuard>
  )
}

