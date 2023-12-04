import { Box, Button, Center, HStack, Icon, Image, ScrollView, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Header } from "../../atomic/molecules/Header";
import { useNavigation } from "@react-navigation/native";
import { CartItem } from "../../atomic/atoms/CartItem";
import { SectionFooterCart } from "../../atomic/molecules/SectionFooterCart";
import { SwipeableButton } from "../../atomic/molecules/SwipeableButton";
import { useCart } from "../../context/use-cart";

export function Cart() {
    const { goBack, navigate } = useNavigation();
    const { items } = useCart()



    return (
        <Box p="20px" flex="1" mb="-30px" justifyContent="space-between">
            <Box h="68%">
                <Box mt="-20px">
                    <Header
                        text={"My Shopping Cart"}
                        inverterd
                        type={'goBack'}
                        handlePress={goBack}
                    />
                </Box>

                <ScrollView>
                    {items.map((product) => (
                        <CartItem 
                            title={product.title}
                            amount={product.amount}
                            image={product.image}
                            price={product.price}
                            
                        />
                    ))}
                </ScrollView>
            </Box>

            <Box mb="50px">
                <SectionFooterCart title="Subtotal" value="9.119" />
                <SectionFooterCart title="Delivery Fee" value="0" />
                <SectionFooterCart title="Total" value="9.119" />

                <Center mt="5">
                    <Box
                        w="140px"
                        h="40px"
                        bg="primary.50"
                        justifyContent="center"
                        borderRadius="8px"
                    >
                        <SwipeableButton
                            handleSwipe={() => alert ("Pedido finalizado, aproxime seu cartão.")}
                            leftAction={
                                <Box
                                    w="140px"
                                    justifyContent="center"
                                    bg="primary.50"
                                    borderRadius="8px"
                                ></Box>
                            }
                        >
                            <Button
                                w="40px"
                                h="40px"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Icon
                                    as={AntDesign}
                                    name="right"
                                    color="white"
                                />
                            </Button>
                        </SwipeableButton>
                        <Text
                            zIndex="-1"
                            color="white"
                            left="50px"
                            position="absolute"
                        >
                            Checkout
                        </Text>
                    </Box>
                </Center>

            </Box >
        </Box >


    );
}