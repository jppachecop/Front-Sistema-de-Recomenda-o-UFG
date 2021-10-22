import { StarIcon } from '@chakra-ui/icons'
import { Badge, Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { CardInterface } from '../../models/Card/Card'

export const Card = ({
    image,
    title,
    price,
    rating,
    reviewCount,
    promotion = false,
    discount = 0,
}: CardInterface) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box display="flex" justifyContent="center">
                <Image src={image} alt={image} mt="6" h="80" />
            </Box>

            <Box p="6">
                {promotion && (
                    <Box
                        display="flex"
                        alignItems="baseline"
                        justifyContent="center"
                    >
                        <Badge borderRadius="full" px="2" colorScheme="teal">
                            Promoção!
                        </Badge>
                    </Box>
                )}

                <Box
                    mt="1"
                    fontWeight="semibold"
                    fontSize="18px"
                    lineHeight="tall"
                >
                    {title}
                </Box>

                <Box>
                    {promotion ? (
                        <>
                            <Text as="s" mr="5">
                                {`U$ ${price}`}
                            </Text>
                            <Text as="b">
                                U$ {(price - discount * price).toFixed(2)}
                            </Text>
                        </>
                    ) : (
                        <Text>U$ {price}</Text>
                    )}
                </Box>
            </Box>
            <Box
                display="flex"
                alignItems="flex-end"
                justifyContent="center"
                mb="7"
            >
                {Array(5)
                    .fill('')
                    .map((_, i) => (
                        <StarIcon
                            key={i}
                            color={i < rating ? 'teal.500' : 'gray.300'}
                        />
                    ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {reviewCount} avaliações
                </Box>
            </Box>
        </Box>
    )
}
