export async function fetchCountryInfo(countryCode: string) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)

    if (!response.ok) {
      throw new Error("Failed to fetch country data")
    }

    const data = await response.json()
    return data[0]
  } catch (error) {
    console.error("Error fetching country info:", error)
    throw error
  }
}

