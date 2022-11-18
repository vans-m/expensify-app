import TestContainer from './testContainer'
import { render } from '@testing-library/react'

const customRender = (ui, options) =>
	render(ui, { wrapper: TestContainer, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
