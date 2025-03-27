// Import required types and functions from Supabase SSR library
import { CookieOptions, createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Creates and returns an authenticated Supabase server client
export function createClient() {
    // Initialize the Next.js cookie store
    const cookieStore = cookies()
    
    // Create and return the Supabase server client
    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            // Cookie configuration following latest @supabase/ssr patterns
            cookies: {
                async getAll() {
                    // Get all cookies from the store and map them to required format
                    return (await cookieStore).getAll().map(cookie => ({
                        name: cookie.name,
                        value: cookie.value
                    }))
                },
                
                setAll(cookies: Array<{ name: string; value: string; options: CookieOptions }>) {
                    // Process each cookie in the input array
                    cookies.forEach(async ({ name, value, options }) => 
                        // Set each cookie with its name, value, and additional options
                    (await cookieStore).set({ name, value, ...options })
                )
            }
        }
    }
)
}