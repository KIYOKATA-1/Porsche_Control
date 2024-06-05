import { icon } from '@fortawesome/fontawesome-svg-core';
import { StyleSheet } from 'react-native';

const width = window.innerWidth;
export const MpStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: '#9b9ba8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    position: 'relative',
    top: 10,
    left: 10,
    right: 10,
    zIndex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    borderColor: '#CDBDFA',
    borderBottomWidth: 2,
    borderRadius: 0,
    padding: 10,
    color: '#FBFAFE',
    fontFamily: 'coda-regular',
    fontSize: 24,
    flexWrap: 'wrap',
    position: 'relative',
    bottom: 100,
    marginRight: 10,
  },
  searchInputLight: {
    flex: 1,
    borderColor: '#63519F',
    borderBottomWidth: 2,
    borderRadius: 0,
    padding: 10,
    color: '#FBFAFE',
    fontFamily: 'coda-regular',
    fontSize: 24,
    flexWrap: 'wrap',
    position: 'relative',
    bottom: 100,
    marginRight: 10,
  },
  map: {
    position: 'relative',
    alignSelf: 'center',
    width: 410,
    height: 410,
    bottom: 150,
    borderRadius: 20,
  },
  btn:{
    position: 'relative',
    backgroundColor: '#CDBDFA',
    width: 120,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 20,
  },
  btnLight:{
    position: 'relative',
    backgroundColor: '#63519F',
    width: 120,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 20,
  },
  btnC:{
    position: 'relative',
    justifyContent: 'space-between',
    flexDirection: 'row',
    bottom: 130,
  },
  icon:{
    color: '#FBFAFE'
  },
  iconLight:{
    color: '#0d0d0f'
  }
});