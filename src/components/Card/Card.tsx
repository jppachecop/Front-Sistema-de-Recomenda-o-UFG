import React, { ReactNode } from 'react'
import { StarIcon } from '@chakra-ui/icons'
import { Badge, Box, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { CardInterface } from '../../models/Card/Card'

interface Props {
    detailsScreen: boolean
    children: ReactNode
    asin: string
}

const CardWithLink = ({ detailsScreen, children, asin }: Props) => {
    return detailsScreen ? (
        <>{children}</>
    ) : (
        <Link to={`/productDetails?book=${asin}`} id="click-me">
            {children}
        </Link>
    )
}

export const Card = ({
    asin,
    image,
    title,
    price,
    rating,
    reviewCount,
    promotion = false,
    discount = 0,
    detailsScreen = true,
}: CardInterface) => (
    <CardWithLink asin={asin} detailsScreen={detailsScreen}>
        {
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Box display="flex" justifyContent="center">
                    <Image src={image} alt={image} mt="6" h="40" />
                </Box>

                <Box p="6">
                    {promotion && (
                        <Box
                            display="flex"
                            alignItems="baseline"
                            justifyContent="center"
                        >
                            <Badge
                                borderRadius="full"
                                px="2"
                                colorScheme="teal"
                            >
                                Promoção!
                            </Badge>
                        </Box>
                    )}

                    <Box
                        mt="1"
                        fontWeight="semibold"
                        fontSize="14px"
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
                        {!promotion
                            ? Math.floor(Math.random() * (150 - 85 + 1)) + 85
                            : reviewCount}{' '}
                        avaliações
                    </Box>
                </Box>
            </Box>
        }
    </CardWithLink>
)
