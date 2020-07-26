import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { helpers, constants } from '../../../config';
import styles from './style';

class SongDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = (label: string, value: string|number) => (
    <View style={styles.infoItem}>
      <Text style={styles.infoLbl}>{label}</Text>
      <Text style={styles.infoTxt}>{value}</Text>
    </View>
  )

  render() {
    const { route } = this.props;
    const { params } = route;
    const { songData } = params;

    return (
      <View style={styles.wrap}>
        <View style={styles.songWrap} >
          <View style={styles.leftSec}>
            <Image
              source={{ uri: songData.artworkUrl100 }}
              resizeMode="cover"
              style={styles.artistImg}
            />
          </View>
          <View style={styles.rightSec}>
            <Text style={styles.collectionTxt}>{songData.collectionName}</Text>
          </View>
        </View>
        {this.renderItem("Artist name:", songData.artistName)}
        {this.renderItem("Track price:", songData.trackPrice)}
        {this.renderItem("Track Censore:", songData.trackCensoredName)}
        {this.renderItem("Track timing:", helpers.millisToMinutesAndSeconds(songData.trackTimeMillis))}
      </View>
    );
  }
}

export default SongDetails;
