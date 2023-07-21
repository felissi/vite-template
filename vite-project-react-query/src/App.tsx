import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import T1 from './components/T1'
import { InfinitePeople } from './components/InfinitePeople'
import { MantineProvider } from '@mantine/core'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        onError: (err) => console.log(err),
        retry: 3
      }
    }
  })
  return (
    <>
      <MantineProvider withCSSVariables withGlobalStyles>
        {
          Array(5).fill((<div>abc</div>))
        }
        <QueryClientProvider client={queryClient}>
          <T1 />
          <InfinitePeople />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </MantineProvider>
    </>
  )
}

export default App
