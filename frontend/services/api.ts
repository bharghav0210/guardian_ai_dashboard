const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL!

export default BASE_URL

// ========================================
// GET AUTH TOKEN
// ========================================

function getToken() {

  return localStorage.getItem("token")
}

// ========================================
// COMMON HEADERS
// ========================================

function getHeaders() {

  return {

    "Authorization":
      `Bearer ${getToken()}`,

    "Content-Type":
      "application/json"
  }
}

// ========================================
// DASHBOARD OVERVIEW
// ========================================

export async function fetchDashboardOverview() {

  const response = await fetch(

    `${BASE_URL}/dashboard/overview`,

    {
      headers: getHeaders()
    }
  )

  if (!response.ok) {

    throw new Error(
      "Failed to fetch dashboard overview"
    )
  }

  return response.json()
}

// ========================================
// ALERTS
// ========================================

export async function fetchAlerts() {

  const response = await fetch(

    `${BASE_URL}/alerts`,

    {
      headers: getHeaders()
    }
  )

  if (!response.ok) {

    throw new Error(
      "Failed to fetch alerts"
    )
  }

  return response.json()
}

// ========================================
// WORKFLOWS
// ========================================

export async function fetchWorkflows() {

  const response = await fetch(

    `${BASE_URL}/workflows`,

    {
      headers: getHeaders()
    }
  )

  if (!response.ok) {

    throw new Error(
      "Failed to fetch workflows"
    )
  }

  return response.json()
}

// ========================================
// INVESTIGATIONS
// ========================================

export async function fetchInvestigations() {

  const response = await fetch(

    `${BASE_URL}/investigations`,

    {
      headers: getHeaders()
    }
  )

  if (!response.ok) {

    throw new Error(
      "Failed to fetch investigations"
    )
  }

  return response.json()
}

// ========================================
// MODEL ANALYTICS
// ========================================

export async function fetchModelAnalytics() {

  const response = await fetch(

    `${BASE_URL}/model-analytics`,

    {
      headers: getHeaders()
    }
  )

  if (!response.ok) {

    throw new Error(
      "Failed to fetch model analytics"
    )
  }

  return response.json()
}

// ========================================
// THREAT ANALYTICS
// ========================================

export async function fetchThreatAnalytics() {

  const response = await fetch(

    `${BASE_URL}/model-analytics`,

    {
      headers: getHeaders()
    }
  )

  if (!response.ok) {

    throw new Error(
      "Failed to fetch threat analytics"
    )
  }

  return response.json()
}

