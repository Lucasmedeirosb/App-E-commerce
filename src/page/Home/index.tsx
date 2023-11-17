import { Box } from 'native-base';
import { FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Detailbackground } from '../../atomic/atoms/DetailBackground';
import { MainBanner } from '../../atomic/molecules/MainBanner';
import { Card } from '../../atomic/molecules/Card';
import api from '../../service/api';
import { Header } from '../../atomic/molecules/Header';
import { CategoryList } from '../../atomic/organism/CategoryList';

export type CardProps = {
    title: string
    price: number
    model: string
    image: string
    id: string
}

export function Home() {

    const [equipments, setEquipments] = useState<CardProps[]>([])

    useEffect(() => {
        async function getEquipments() {
            try {
                const { data } = await api.get('equipments')
                setEquipments(data)

            } catch (err) {
                console.log('Error: ', err);
            }
        }

        getEquipments();
    }, [])

    return <Box flex="1" padding="20px" pt="-10px" position="relative">
        <Detailbackground />

        <FlatList
            ListHeaderComponent={() => 
            <>
                <Header text='Choose Your bike'/>
                <MainBanner />
                <CategoryList />
            </>
            }
            showsVerticalScrollIndicator={false}
            numColumns={2}
            keyExtractor={item => item.id}
            data={equipments}
            renderItem={({ item: equipment }) => <Card image={equipment.image} id={equipment.id}
                model={equipment.model} price={equipment.price} title={equipment.title} />}
        />

    </Box>
}