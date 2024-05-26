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
                    staleTime: 1000000,
                    // Garbage collection time in milliseconds for cached queries
                    gcTime: 100000,
                    // Time interval in milliseconds to automatically refetch queries
                    refetchInterval: false,
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

