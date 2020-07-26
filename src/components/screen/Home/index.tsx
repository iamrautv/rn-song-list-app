import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Config from 'react-native-config';
import { constants } from '../../../config';
import { Button } from '../../custom';
import styles from './style';

const { routes } = constants;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.wrap}>
        <Button
          text="Goto Login"
          onPress={() => { navigation.navigate(routes.Login); }}
          style={styles.btnStyle}
        />
        <Text>{Config.BASE_URL}</Text>
      </View>
    );
  }
}

export default Home;
