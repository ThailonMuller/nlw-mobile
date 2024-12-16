import { View, Text, Alert } from "react-native";
import { api } from "@/services/api";

export default function Home(){
    async function fetchCategories() {
        try {
          const { data } = await api.get("/categories")

        } catch (error) {
            console.log(error)
            Alert.alert("Categorias", "Não foi possível carregar as categorias.")
        }        
    }
    return <View style={{flex: 1}}></View>

}
