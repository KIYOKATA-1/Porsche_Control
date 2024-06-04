import { StyleSheet } from 'react-native';

const width = window.innerWidth;
export const MpStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0f',
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
    borderColor: 'white',
    borderBottomWidth: 2,
    borderRadius: 0,
    padding: 10,
    color: 'white',
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
  }
});