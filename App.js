import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Provider as PaperProvider } from "react-native-paper"
import { StatusBar } from "expo-status-bar"
import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/CartContext"
import HomeScreen from "./screens/HomeScreen"
import ProductDetailScreen from "./screens/ProductDetailScreen"
import CartScreen from "./screens/CartScreen"
import CheckoutScreen from "./screens/CheckoutScreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import ProfileScreen from "./screens/ProfileScreen"
import OrderHistoryScreen from "./screens/OrderHistoryScreen"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider>
      <AuthProvider>
        <CartProvider>
          <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Shop" }} />
              <Stack.Screen
                name="ProductDetail"
                component={ProductDetailScreen}
                options={{ title: "Product Details" }}
              />
              <Stack.Screen name="Cart" component={CartScreen} options={{ title: "Your Cart" }} />
              <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: "Checkout" }} />
              <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Login" }} />
              <Stack.Screen name="Register" component={RegisterScreen} options={{ title: "Create Account" }} />
              <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "Your Profile" }} />
              <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} options={{ title: "Order History" }} />
            </Stack.Navigator>
          </NavigationContainer>
        </CartProvider>
      </AuthProvider>
    </PaperProvider>
  )
}

