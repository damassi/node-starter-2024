import { api } from "client/api"

export const App: React.FC = () => {
  const handleFetch = async () => {
    const data = await api.GET("/api/boop", {
      params: {
        query: {
          id: "foo",
        },
      },
    })

    console.log(data)
  }

  return <button onClick={handleFetch}>hey there</button>
}
