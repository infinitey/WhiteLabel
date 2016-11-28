import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  //basic layouts for the app
  mainLayout: {
    flex: 1,
  },

  sampleChanges: {

  },

  verticalLayout: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },

  //components of the container
  header: {
    flex: 1,
    backgroundColor: '#181818',
    justifyContent: 'center',
  },

  headerText: {
    color: '#ffffff',
    textAlign: 'center',
  },

  content: {
    flex: 9,
    backgroundColor: '#4f4f4f',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  brandCard: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },

  brandCardText: {
    color: '#ffffff',
  },




  /*
  styleReferenceName: {
    propertyName: propertyValue/Type,
  },
  */

});

export default styles;
