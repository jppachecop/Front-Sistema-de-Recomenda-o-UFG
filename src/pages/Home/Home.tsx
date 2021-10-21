import * as React from 'react'
import { Box, Text, Grid, Stack, Divider } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import { NavBar } from '../../components/NavBar/NavBar'
import { Card } from '../../components/Card/Card'

export const Home = () => (
    <Box textAlign="center" fontSize="xl">
        <NavBar />
        <Grid>
            <ColorModeSwitcher justifySelf="flex-end" />
            <Stack direction="column" h="100px" p={4}>
                <Text align="left">Produtos</Text>
                <Divider orientation="horizontal" />
            </Stack>
            <Card />
        </Grid>
    </Box>
)
