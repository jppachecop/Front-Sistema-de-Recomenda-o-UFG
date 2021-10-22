import React from 'react'
import { Divider, Grid, Stack, Text } from '@chakra-ui/react'
import { ProductsStackInterface } from '../../models/Products/ProductsStack'
import { Card } from '../Card/Card'

export const ProductsStack = ({
    divider,
    products,
    detailsScreen,
}: ProductsStackInterface) => {
    return (
        <>
            <Stack direction="column" h="100px" p={4}>
                <Text as="b" align="left">
                    {divider}
                </Text>
                <Divider orientation="horizontal" />
            </Stack>

            <Grid templateColumns="repeat(4, 1fr)" gap={6} mr="5" ml="5">
                {products.map((item) => (
                    <Card
                        key={item.asin}
                        asin={item.asin}
                        detailsScreen={detailsScreen}
                        image={item.imUrl}
                        title={item.title}
                        price={item.price}
                        promotion={item.promotion}
                        discount={item.promotionDiscount}
                        rating={Math.floor(Math.random() * (5 - 1 + 1)) + 1}
                        reviewCount={Math.floor(Math.random() * 50) + 1}
                    />
                ))}
            </Grid>
        </>
    )
}
