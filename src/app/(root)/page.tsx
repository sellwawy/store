const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function Home() {
   await delay(2000)
   return <h1>Store</h1>
}
