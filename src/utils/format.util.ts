export function parseData<T>(data: any | null | undefined, defaultValue: T): T {
  const dataString = data?.getData()
  try {
    return dataString ? (JSON.parse(dataString) as T) : defaultValue
  } catch (error) {
    console.error("Failed to parse data string:", error)
    return defaultValue
  }
}
