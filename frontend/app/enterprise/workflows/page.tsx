import EnterpriseLayout from "@/components/EnterpriseLayout"
import AIWorkflowPanel from "@/components/AIWorkflowPanel"
import AuthGuard from "@/components/AuthGuard"

export default function WorkflowsPage() {

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
            AI Workflow Engine
          </h1>

          <p className="mt-3 text-slate-500">

            Real-time orchestration and
            automation of enterprise AI workflows

          </p>

        </section>

        {/* =====================================
            AI WORKFLOW PANEL
        ===================================== */}

        <AIWorkflowPanel />

      </EnterpriseLayout>

    </AuthGuard>
  )
}

