'use server'

interface ApiConfiguration {
    apiUrl: string
}
export async function getApiConfiguration(): Promise<ApiConfiguration> {
    return {
        apiUrl: process.env.SERVICE_API,
    }
}
