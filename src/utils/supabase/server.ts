import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

// Function to create a Supabase client for server components
export const createClient = () => {
  return createServerComponentClient({
    cookies, // Enables authentication via cookies
  });
};
