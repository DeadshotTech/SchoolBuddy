import { createStackNavigator } from '@react-navigation/stack';
import HomepageScreen from './home_page/HomepageScreen';
import AttendanceScreen from './attendance/AttendanceScreen';

const Stack = createStackNavigator();

function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomepageScreen} />
      <Stack.Screen name="Attendance" component={AttendanceScreen} />
    </Stack.Navigator>
  );
}

export default NavigationStack;
