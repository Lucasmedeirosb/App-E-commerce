import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../page/Home';
import { Detail } from '../page/Detail'
import { Cart } from '../page/Cart'
import { PaymentScreen } from '../page/Payment/PaymentScreen';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (<Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    </Stack.Navigator>
    );
}