import React from 'react'
import {View, Text} from 'react-native'

export default ({films}) => {
  return (
    <View>
      <Text>
        Films List!
      </Text>
      <Text>
        { films.length ? films.map(film => film.title ) : "Loading"}
      </Text>
    </View>
  )
}
