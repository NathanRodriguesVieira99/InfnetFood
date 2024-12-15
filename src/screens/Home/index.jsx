import { Text, View } from 'react-native';
import { Categories } from '../../components/Categories';

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Categories />
    </View>
  );
}