import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
    // Initialize response object with current request headers
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })
    
    // Create Supabase client with updated cookie methods for middleware
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                // Convert Next.js cookies to Supabase-compatible format
                getAll() {
                    return request.cookies.getAll().map(cookie => ({
                        name: cookie.name,
                        value: cookie.value
                    }))
                },
                
                // Handle multiple cookie updates for both request and response
                setAll(cookiesToSet: Array<{ name: string; value: string; options: CookieOptions }>) {
                    cookiesToSet.forEach(({ name, value, options }) => {
                        // Update both incoming request and outgoing response cookies
                        request.cookies.set({ name, value, ...options })
                        response = NextResponse.next({
                            request: {
                                headers: request.headers,
                            },
                        })
                        response.cookies.set({ name, value, ...options })
                    })
                }
            }
        }
    )
    
    // Refresh session by checking current user
    await supabase.auth.getUser()
    
    return response
}