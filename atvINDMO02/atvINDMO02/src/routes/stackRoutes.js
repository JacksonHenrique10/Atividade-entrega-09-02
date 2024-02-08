import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from '../pages/Inicio';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Inicio'
                component={Inicio}
            />
            {/* <Stack.Screen
                name='Curso'
                component={Curso}
            />
            <Stack.Screen
                name='Contato'
                component={Contato}
            /> */}

        </Stack.Navigator>
    )
}