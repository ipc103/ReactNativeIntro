import React, { Component } from 'react'
import { View } from 'react-native'

export default class FilmsPage extends Component {

  constructor(props){
    super(props)
    this.state = {films: []}
  }

  componentWillMount(){
    this.updateFilms()
  }

  updateFilms(){
    fetch('https://swapi.co/api/films/')
      .then( res => res.json())
      .then( data => this.setState({
        films: data.results
      }))
  }

  render(){
    const childrenWithFilms = React.cloneElement(this.props.children, {films: this.state.films })
    return (
      <View>
        { childrenWithFilms }
      </View>
    )
  }
}
