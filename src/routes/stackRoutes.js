import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Curso from '../pages/Curso';
import CursoDetalhes from "../pages/CursoDetalhes";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Curso'
                component={Curso}
                options={{ headerShown: false }}
                
            /> 
            <Stack.Screen
                name='CursoDetalhes'
                component={CursoDetalhes}
            />

           

        </Stack.Navigator>
    )
}