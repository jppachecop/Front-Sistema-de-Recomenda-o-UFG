import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Box, Text, Grid, Stack, Divider, Image } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import { api } from '../../services/api'
import { ProductsInterface } from '../../models/Products/Products'
import { ProductsStack } from '../../components/ProductsStack/ProductsStack'
import { StarIcon } from '@chakra-ui/icons'

export const ProductDetails = () => {
    const query = new URLSearchParams(useLocation().search)
    const [product, setProduct] = useState<ProductsInterface[]>()
    const [recommendedProducts, setRecommendedProducts] = useState<
        ProductsInterface[]
    >([])

    const rating = Math.floor(Math.random() * (5 - 1 + 1)) + 1

    useEffect(() => {
        const requests = async () => {
            const p = await api.get<ProductsInterface[]>(
                `/promotions?asin=${query.get('book')}`
            )

            if (p.data && p.data.length > 0) {
                setProduct(p.data)
            } else {
                const prod = await api.get<ProductsInterface[]>(
                    `/mostSales?asin=${query.get('book')}`
                )

                setProduct(prod.data)
            }

            const rp = await api.get<ProductsInterface[]>('/recommendList')

            setRecommendedProducts(rp.data)
        }

        requests()
    }, [])

    return (
        <Box textAlign="center" fontSize="xl">
            <Grid>
                <ColorModeSwitcher justifySelf="flex-end" />
                <Stack direction="column" h="100px" p={4}>
                    <Text align="left" as="b">
                        Detalhes do Produto
                    </Text>
                    <Divider orientation="horizontal" />
                </Stack>
                {product &&
                    product.map((item) => (
                        <Box
                            key={item.asin}
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            pb="5"
                            m="5"
                        >
                            <Box
                                display="flex"
                                justifyContent="flex-start"
                                ml="10"
                            >
                                <Image
                                    src={item.imUrl}
                                    alt={item.imUrl}
                                    mt="6"
                                    h="80"
                                />
                                <Box
                                    mt="6"
                                    ml="10"
                                    fontWeight="semibold"
                                    fontSize="18px"
                                    lineHeight="tall"
                                    display="flex"
                                    flexDirection="column"
                                >
                                    <Text align="left">{item.title}</Text>
                                    <Box
                                        display="flex"
                                        justifyContent="start"
                                        mt="4"
                                    >
                                        {Array(5)
                                            .fill('')
                                            .map((_, i) => (
                                                <StarIcon
                                                    key={i}
                                                    color={
                                                        i < rating
                                                            ? 'teal.500'
                                                            : 'gray.300'
                                                    }
                                                />
                                            ))}
                                        <Box
                                            as="span"
                                            color="gray.600"
                                            fontSize="sm"
                                            ml="7"
                                        >
                                            {Math.floor(Math.random() * 50) + 1}{' '}
                                            avaliações
                                        </Box>
                                    </Box>
                                    <Box
                                        p="6"
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="start"
                                        justifyContent="start"
                                    >
                                        <Box>
                                            {item.promotion ? (
                                                <>
                                                    <Text
                                                        as="s"
                                                        mr="5"
                                                        align="left"
                                                    >
                                                        {`U$ ${item.price}`}
                                                    </Text>
                                                    <Text as="b" align="left">
                                                        U${' '}
                                                        {(
                                                            item.price -
                                                            item.promotionDiscount *
                                                                item.price
                                                        ).toFixed(2)}
                                                    </Text>
                                                </>
                                            ) : (
                                                <Text align="left">
                                                    U$ {item.price}
                                                </Text>
                                            )}
                                        </Box>
                                    </Box>
                                    <Box display="flex" flexDirection="column">
                                        <Text align="left">Descrição</Text>
                                        <Text align="left" as="i">
                                            {item.description}
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                <ProductsStack
                    divider="Recomendados para você"
                    products={recommendedProducts}
                    detailsScreen={true}
                />
            </Grid>
        </Box>
    )
}
