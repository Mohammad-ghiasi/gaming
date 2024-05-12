"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export default function ReactQueryProvider({ children }: { children: React.ReactNode }) {

        const queryClient = new QueryClient({
            defaultOptions: {
                // Default options for queries
                queries: {
                    // Don't automatically refetch queries when the window regains focus
                    refetchOnWindowFocus: false,
                    // Time in milliseconds after which the data is considered stale
                    staleTime: 900000,
                    // Garbage collection time in milliseconds for cached queries
                    gcTime: 30000,
                    // Time interval in milliseconds to automatically refetch queries
                    refetchInterval: 5000,
                    // Don't automatically refetch queries when the network reconnects
                    refetchOnReconnect: false,
                    // Retry failed queries after this delay in milliseconds
                    retry: 5000
                },
            }
        });

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}

