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
  },
  artistImg: {
    height: 100,
    width: 100
  },
  rightSec: {
    flex: 1,
    justifyContent: 'center'
  },
  collectionTxt: {
    fontSize: 22,
    fontWeight: '500',
    flexWrap: 'wrap'
  },
  infoItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  infoLbl: {
    fontSize: 15,
    width: 130
  },
  infoTxt: {
    flex: 1,
    marginLeft: 15,
    fontSize: 15,
    fontWeight: '500',
  },
});

export default styles;
