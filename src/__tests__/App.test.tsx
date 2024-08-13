import { render, screen } from "@testing-library/react"
import { App } from "App"

describe("App", () => {
  it("renders", () => {
    render(<App />)

    expect(screen.getByText("hey there")).toBeInTheDocument()
  })
})
