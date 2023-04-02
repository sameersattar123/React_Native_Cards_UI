import { SafeAreaView, ScrollView, StyleSheet, Text,  View } from 'react-native';
import ElevatedCards from './Components/ElevatedCards';
import FancyCard from './Components/FancyCard';
import FlatCard from './Components/FlatCard';

export default function App() {
  return (
    <>
    <SafeAreaView>
    <ScrollView>
    <View>
    <FlatCard/>
    <ElevatedCards/>
    <ScrollView horizontal>
    <FancyCard name="sameer"/>
    <FancyCard name="sameer1"/>
    <FancyCard name="sameer2"/>
    <FancyCard name="sameer4" />
    </ScrollView>
    </View>
    </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : "black"
  },
  textWhite : {
    color: "#FFF",
  },
  TextBlack : {
    color: "#000"
  }
});
