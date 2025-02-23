// Declare scss types
declare module "*.scss" {
  const styles: { [key: string]: string }
  export default styles
}

// Declare remote
declare module "rm*" {
  const rm: React.ComponentType<unknown>
  export default rm
}

// Declare image types
declare module "*.png" {
  const app: string
  export default app
}
declare module "*.jpg" {
  const app: string
  export default app
}
declare module "*.jpeg" {
  const app: string
  export default app
}
declare module "*.svg" {
  const app: string
  export default app
}
declare module "*.webp" {
  const app: string
  export default app
}
