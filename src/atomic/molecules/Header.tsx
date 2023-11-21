import React from 'react';
import { Box, Icon, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons'
import { SquareButton } from '../atoms/SquareButton';

type Props = {
    text: string
    inverterd?: boolean;
    type?: "goBack" | "default" | "down";
    handlePress: () => void;
}

export function Header({ text,
    inverterd = false,
    type = "default",
    handlePress,
}: Props) {

    const iconModifier = {
        default: "search1",
        goBack: "left",
        down: "down",
    };

    return <Box h="100px"
        alignItems="center"
        mt="26"
        flexDirection="row"
        justifyContent={inverterd ? "flex-start" : "space-between"}
    >
        {!inverterd && (
            <Text fontSize="lg" fontWeight="bold" color="white">
                {text}
            </Text>
        )}

        <SquareButton onPress={handlePress}>
            <Icon as={AntDesign} name={iconModifier[type]} color="white" />
        </SquareButton>

        {inverterd && (
            <Text fontSize="lg" fontWeight="bold" ml="56px" color="white">
                {text}
            </Text>
        )}
    </Box>
}