import React, { Component } from 'react';
import {
  Text, View, ScrollView, Image,
} from 'react-native';

import moment from 'moment';
import movieStyle from './movieStyle';

const baseUrlImg = 'https://image.tmdb.org/t/p/w500/';

export default class MovieDetail extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={movieStyle.container}>
        <Image
          style={movieStyle.cover}
          source={{
            uri: `${baseUrlImg}${navigation.state.params.moviedetail.backdrop_path}`,
          }}
        />
        <Text style={movieStyle.original_title}>
          {navigation.state.params.moviedetail.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <Text style={movieStyle.release_date}>
            Year: {moment(navigation.state.params.moviedetail.release_date).format('Y')}
          </Text>
          <Text style={movieStyle.release_date}>
            Votes: {navigation.state.params.moviedetail.vote_count}
          </Text>
        </View>
        <Text style={movieStyle.overview}>
          {navigation.state.params.moviedetail.overview}
        </Text>
      </ScrollView>
    );
  }
}
