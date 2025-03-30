"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { fetchCountryInfo } from "@/lib/api"
import type { CountryData } from "@/lib/types"

interface CountryInfoProps {
  countryCode: string
}

export function CountryInfo({ countryCode }: CountryInfoProps) {
  const [country, setCountry] = useState<CountryData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getCountryInfo = async () => {
      try {
        setLoading(true)
        const data = await fetchCountryInfo(countryCode)
        setCountry(data)
        setError(null)
      } catch (err) {
        setError("Failed to load country information")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    getCountryInfo()
  }, [countryCode])

  if (loading) {
    return <CountryInfoSkeleton />
  }

  if (error || !country) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Country Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{error || "Country information not available"}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <div className="relative h-6 w-10 overflow-hidden rounded">
            <Image
              src={country.flags.svg || "/placeholder.svg"}
              alt={country.name.common}
              fill
              className="object-cover"
            />
          </div>
          {country.name.common}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium">Capital</p>
            <p className="text-sm">{country.capital?.[0] || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Region</p>
            <p className="text-sm">{country.region}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Population</p>
            <p className="text-sm">{country.population.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Languages</p>
            <p className="text-sm">{country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Currency</p>
            <p className="text-sm">
              {country.currencies
                ? Object.values(country.currencies)
                    .map((c: any) => `${c.name} (${c.symbol})`)
                    .join(", ")
                : "N/A"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function CountryInfoSkeleton() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <Skeleton className="h-6 w-40" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i}>
              <Skeleton className="h-4 w-20 mb-1" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

