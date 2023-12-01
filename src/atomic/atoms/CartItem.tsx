import React, { useState } from 'react';
import { Box, Button, Center, HStack, Icon, Image, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

export type CartItemProps = {
    image: string;
    title: string;
    price: string;
    amount: string;
};

export function CartItem({ image, title, amount, price }: CartItemProps) {
    const [count, setCount] = useState(Number(amount));

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <HStack mt="30px">
            <Center bg="primary.50" w="100px" h="90px" borderRadius="20px">
                <Image w="100%" h="60px" resizeMode="contain" source={{ uri: image }} alt="img" />
            </Center>

            <Box ml="16px" justifyContent="space-between" padding="5px">
                <Text bold color="white" fontSize="17">
                    {title}
                </Text>

                <HStack alignItems="center" mb="5px">
                    <Text bold color="ocean.200" fontSize="17">
                        R$ {price}
                    </Text>

                    <HStack ml="20px" bg="primary.200" p="5px" borderRadius="5px">
                        <Button borderRadius="5px" w="30px" h="30px" bg="coolGray.700" onPress={handleDecrement}>
                            <Icon as={AntDesign} name="minus" color="white" />
                        </Button>
                        <Center w="30px">
                            <Text color="white">{count}</Text>
                        </Center>
                        <Button borderRadius="5px" w="30px" h="30px" bg="ocean.50" onPress={handleIncrement}>
                            <Icon as={AntDesign} name="plus" color="white" />
                        </Button>
                    </HStack>
                </HStack>
            </Box>
        </HStack>
    );
}
