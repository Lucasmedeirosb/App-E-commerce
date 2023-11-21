import React, { useEffect, useState } from 'react';
import { Box, Button, HStack, Image, Text } from 'native-base';
import { SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../service/api';
import { CardProps } from '../Home';
import rectangle from '../../img/rectangle.png';
import { ImagePreview } from '../../atomic/atoms/ImagePreview';
import { ButtonDetail } from '../../atomic/atoms/ButtonDetail';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { Header } from '../../atomic/molecules/Header';


type RouteParams = {
    equipmentId: string;
}

export function Detail() {
    const route = useRoute();

    const {goBack} = useNavigation();
    const { equipmentId } = route.params as RouteParams

    const [equipment, setEquipments] = useState<CardProps>({} as CardProps);
    const [toggleDescription, setToggleDescription] = useState(true);


    const cardOffSet = useSharedValue(460);

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
    }, []);

    function handleToggleDescription() {
        setToggleDescription(oldValue => !oldValue)
    }

    function handleAnimatedToggle() {
        handleToggleDescription();

        if (toggleDescription) {
            cardOffSet.value = withTiming(1, {
                duration: 700,
            });
        } else {
            cardOffSet.value = withTiming(460, {
                duration: 700,
            });
        }
    }
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: cardOffSet.value,
                }
            ]
        };
    });

    function handlePress() {
        if(toggleDescription) {
            goBack();
            return;
        }
        handleAnimatedToggle();

    }
    return (
        <>
            <Box pl="20px" pr="20">
                <Header text={equipment.title}
                    inverterd={true}
                    type={toggleDescription ? "goBack" : "down"}
                    handlePress={handlePress} 
                    />
            </Box>


            <Box flex="1"
                position="relative"
                justifyContent="center"
                alignItems="center"
            >
                <Image
                    source={rectangle}
                    alt="image detail"
                    position="absolute"
                    top="-10"
                    right="0"
                    bottom="0"
                />

                <ImagePreview
                    showDescription={toggleDescription}
                    image={equipment.image}
                    alt={equipment.title}
                />
            </Box>

            {toggleDescription ? (
                <Box
                    bg="primary.100"
                    justifyContent="center"
                    p="7"
                    borderRadius={30}
                    shadow={5}
                    h="110px"
                >
                    <HStack w="100%" justifyContent="space-between">
                        <ButtonDetail title="Description"
                            onPress={handleAnimatedToggle}
                        />

                        <ButtonDetail title="Specification" />
                    </HStack>
                </Box>
            ) : (
                <Animated.View style={animatedStyle}>
                    <Box bg="primary.100"
                        borderTopRadius={30}
                        shadow={5}
                        h="430px">
                        <Box pl="7" pr="7" pt="7"
                        >
                            <HStack w="100%" justifyContent="space-between">
                                <ButtonDetail title="Description"
                                    onPress={handleAnimatedToggle}
                                />

                                <ButtonDetail title="Specification" />
                            </HStack>

                            <Box mt="30">
                                <Text bold color="white" fontSize="17" >
                                    {equipment.title}
                                </Text>

                                <Text color="white" opacity="0.6" mt="8">
                                    Mountain bike Caloi Two Niner Pro rim 29 M
                                    21v hydraulic disc brakes shifter Shimano Tourney TY300 green color.Mountain bike Caloi Two Niner Pro rim 29 M
                                    21v hydraulic disc brakes shifter Shimano Tourney TY300 green color.
                                </Text>
                            </Box>


                        </Box>
                        <HStack
                            bg="primary.200"
                            borderTopRadius={30}
                            justifyContent="space-between"
                            shadow={5}
                            h={100}
                            w={"100%"}
                            mt="79"
                            alignItems="center"
                            p="7"
                        >
                            <Text bold color="ocean.200" fontSize="17">{equipment.price}
                            </Text>

                            <Button
                                w="149"
                                h="43"
                                justifyContent="center"
                                alignItems="center"
                                borderRadius="5"
                                shadow={5}
                                bg="ocean.200"
                                _pressed={{ bgColor: "ocean.100" }}
                                onPress={() => { }}
                            >
                                Add to Cart
                            </Button>
                        </HStack>
                    </Box>
                </Animated.View>
            )}


        </>
    );
}