"use client"

import type { User } from "./types"

// Mock authentication functions
// In a real app, these would interact with a backend API

export async function login(email: string, password: string): Promise<User> {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // For demo purposes, accept any email/password
      if (email && password) {
        const user: User = {
          id: "1",
          name: email.split("@")[0],
          email,
        }

        // Store user in localStorage
        localStorage.setItem("user", JSON.stringify(user))

        resolve(user)
      } else {
        reject(new Error("Invalid credentials"))
      }
    }, 1000)
  })
}

export async function register(name: string, email: string, password: string): Promise<User> {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name && email && password) {
        const user: User = {
          id: "1",
          name,
          email,
        }

        resolve(user)
      } else {
        reject(new Error("Invalid input"))
      }
    }, 1000)
  })
}

export function logout(): void {
  localStorage.removeItem("user")
  window.location.href = "/"
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") {
    return null
  }

  const userJson = localStorage.getItem("user")
  return userJson ? JSON.parse(userJson) : null
}

