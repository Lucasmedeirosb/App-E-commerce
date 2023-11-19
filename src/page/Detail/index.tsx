import React, { useEffect, useState } from 'react';
import { Box, Image, Text } from 'native-base';
import { SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import api from '../../service/api';
import { CardProps } from '../Home';
import rectangle from '../../img/rectangle.png';



type RouteParams = {
    equipmentId: string;
}

export function Detail() {
    const route = useRoute();
    const { equipmentId } = route.params as RouteParams

    const [equipment, setEquipments] = useState<CardProps>({} as CardProps);

    useEffect(() => {
        async function getEquipmentById() {
            try {
                const response = await api.get(`equipments/${equipmentId}`);

                setEquipments(response.data)

            } catch (err) {
                alert("Ops, algo de errado ocorreu");

            }

        }

        getEquipmentById()
    }, [])

    return <>
        <Box flex="1"
            position="relative"
            justifyContent="center"
            alignItems="center"
        >
            <Image
                source={rectangle}
                alt="image detail"
                position="absolute"
                top="-50"
                right="0"
                bottom="0"
            />

            <Box width="100"
                height="280"
                justifyContent="center"
                alignItems="center"
            >
                <Image
                    src={equipment.image}
                    w="350px"
                    h="250px"
                    alt={equipment.title}
                    resizeMode="contain"
                    flex="1"
                />
            </Box>
        </Box>
    </>

}