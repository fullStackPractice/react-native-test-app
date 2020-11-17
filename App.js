import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Switch,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get('window')
const cellWith = width * 0.3
export default function App() {
  const [isSingle, setIsSingle] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(-1)
  return (
    <View style={styles.container}>
      <View style={StyleSheet.innerContainer}>
        <Text>单选</Text>
        <Switch
          style={{marginLeft: 10}}
          value={isSingle}
          onValueChange={setIsSingle}
          ></Switch>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={{borderColor: 'red', borderWidth: 1}}
        />
        { isSingle ?
          [...new Array(9)].map(i => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => setSelectedIndex(i)}
                style={[styles.cell, selectedIndex === i && {backgroundColor: 'green'}]}
              />
            )
          })
          :
          [...new Array(9)].map(i => {
            return <Cell key={i} />
          })
        }
      </View>
    </View>
  )
}

function Cell() {
  const [selected, setSelected] = React.useState(false)
  return (
    <TouchableOpacity
      onPress={() => setSelected(!selected)}
      style={[styles.cell, seleted && { backgroundColor: 'green'}]}
    />
  )
}

const styles = StyleSheet.create({
  container: {},
  innerContainer: {
    marginTop: 100,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: cellWidth,
    height: cellWidth,
    borderWidth: 1,
    borderColor: 'block'
  },
});
