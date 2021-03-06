import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor:'#fff'
  },
  songWrap: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5'
  },
  leftSec: {
    marginRight: 20,
    width: 80
  },
  artistImg: {
    height: 70,
    width: 70
  },
  rightSec: {
    flex: 1,
    justifyContent: 'center'
  },
  collectionTxt: {
    fontSize: 15,
    flexWrap: 'wrap'
  },
  rightSecMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  artistNameTxt: {
    fontSize: 13
  },
  timeTxt: {
    fontSize: 13
  },
});

export default styles;
