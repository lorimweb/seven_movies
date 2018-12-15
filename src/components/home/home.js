import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  TouchableOpacity, Text, View, ScrollView, Image,
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

import { getSuccessMovies } from '../../store/actions/movies';
import homeStyle from './homeStyle';

const baseUrlImg = 'https://image.tmdb.org/t/p/w500/';

class Home extends Component {
  componentDidMount() {
    this.props.getSuccessMovies();
  }

  render() {
    const {
      popular, nowplaying, latest, loading, navigation,
    } = this.props;
    return (
      <ScrollView style={homeStyle.container}>
        <Spinner
          visible={loading}
          textContent="Carregando..."
          textStyle={{ color: '#fff' }}
        />
        <TouchableOpacity
          style={homeStyle.latest}
          onPress={() => navigation.navigate('movieDetail', {
            moviedetail: latest,
          })
          }
        >
          <Image
            style={homeStyle.latest_img}
            source={{
              uri: `${baseUrlImg}${latest.backdrop_path}`,
            }}
          />
          <Text style={homeStyle.latestTxt}>{latest.title}</Text>
        </TouchableOpacity>
        <Text style={homeStyle.categoryTxt}>Now Playing</Text>
        <View style={homeStyle.containerListMovies}>
          {nowplaying.results
            ? nowplaying.results
              .map(item => (
                  <TouchableOpacity
                    style={homeStyle.listMovies}
                    key={item.id}
                    onPress={() => navigation.navigate('movieDetail', {
                      moviedetail: item,
                    })
                    }
                  >
                    <Image
                      style={homeStyle.listMoviesImg}
                      source={{
                        uri: `${baseUrlImg}${item.poster_path}`,
                      }}
                    />
                  </TouchableOpacity>
              ))
              .slice(1, 4)
            : null}
        </View>
        <Text style={homeStyle.categoryTxt}>Popular</Text>
        <View style={homeStyle.containerListMovies}>
          {popular.results
            ? popular.results
              .map(item => (
                  <TouchableOpacity
                    style={homeStyle.listMovies}
                    key={item.id}
                    onPress={() => navigation.navigate('movieDetail', {
                      moviedetail: item,
                    })
                    }
                  >
                    <Image
                      style={homeStyle.listMoviesImg}
                      source={{
                        uri: `${baseUrlImg}${item.poster_path}`,
                      }}
                    />
                  </TouchableOpacity>
              ))
              .slice(4, 7)
            : null}
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  popular: state.movies.popular,
  nowplaying: state.movies.nowplaying,
  latest: state.movies.latest,
  loading: state.movies.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators({ getSuccessMovies }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
