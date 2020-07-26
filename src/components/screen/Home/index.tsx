import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import ApiRequest from '../../../services';
import { Loading } from '../../custom';
import { helpers, constants } from '../../../config';
import styles from './style';

const { routes } = constants;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      loading: true
    };
  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs = () => {
    try {
      this.setState({
        loading: true
      }, async () => {
        const songs = await ApiRequest('GET', {}, 'https://itunes.apple.com/search?term=Michael+jackson');
        console.log({ songs });
        this.setState({
          loading: false,
          songs: songs.results
        });
      });
    } catch (err) {
      console.log({ err });
    }
  }

  gotToSongView = (songData) => {
    const { navigation } = this.props;
    navigation.navigate(routes.SongDetails, {
      songData
    });
  }

  renderSong = ({ item }) => (
    <TouchableOpacity
      style={styles.songWrap}
      onPress={() => this.gotToSongView(item)}
    >
      <View style={styles.leftSec}>
        <Image
          source={{ uri: item.artworkUrl100 }}
          resizeMode="cover"
          style={styles.artistImg}
        />
      </View>
      <View style={styles.rightSec}>
        <Text style={styles.collectionTxt}>{item.collectionName}</Text>
        <View style={styles.rightSecMeta}>
          <Text style={styles.artistNameTxt}>{item.artistName}</Text>
          <Text style={styles.timeTxt}>{helpers.millisToMinutesAndSeconds(item.trackTimeMillis)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

  render() {
    const { loading, songs } = this.state;

    return (
      <View style={styles.wrap}>
        <FlatList
          data={songs}
          renderItem={this.renderSong}
          keyExtractor={item => item.trackId}
          onRefresh={this.getSongs}
          refreshing={loading}
        />
        <Loading isLoading={loading} />
      </View>
    );
  }
}

export default Home;
