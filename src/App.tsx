import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Home } from './pages/Home/Home'
import { ProductDetails } from './pages/ProductDetails/ProductDetails'
import { NavBar } from './components/NavBar/NavBar'

export const App = () => (
    <ChakraProvider theme={theme}>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productDetails" element={<ProductDetails />} />
        </Routes>
    </ChakraProvider>
)
