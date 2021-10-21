import { StarIcon } from '@chakra-ui/icons'
import { Badge, Box, Image } from '@chakra-ui/react'
import React from 'react'

export const Card = () => {
    const product = {
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41GZCWFJB1L._AC_SX184_.jpg',
        imageAlt: 'Echo Dot',
        title: 'Echo Dot(3° Geração): Smart Speaker',
        price: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }

    return (
        <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            ml="7"
        >
            <Box display="flex" justifyContent="center">
                <Image src={product.imageUrl} alt={product.imageAlt} mt="6" />
            </Box>

            <Box p="6">
                <Box
                    display="flex"
                    alignItems="baseline"
                    justifyContent="center"
                >
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        Eletrônico
                    </Badge>
                </Box>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tall">
                    {product.title}
                </Box>

                <Box>{product.price}</Box>

                <Box display="flex" mt="2" alignItems="center">
                    {Array(5)
                        .fill('')
                        .map((_, i) => (
                            <StarIcon
                                key={i}
                                color={
                                    i < product.rating ? 'teal.500' : 'gray.300'
                                }
                            />
                        ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        {product.reviewCount} reviews
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
