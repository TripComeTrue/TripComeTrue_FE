import { Font, StyleSheet } from '@react-pdf/renderer';
import Mundial from '@/styles/fonts/Mundial-Demibold.ttf';
import AppleSDGothicNeoR from '@/styles/fonts/AppleSDGothicNeoR00.woff2';
import AppleSDGothicNeoB from '@/styles/fonts/AppleSDGothicNeoB00.woff2';

Font.register({
  family: 'Mundial',
  src: Mundial,
});

Font.register({
  family: 'AppleSDGothicNeo',
  fonts: [
    { src: AppleSDGothicNeoR, fontWeight: 'normal' },
    { src: AppleSDGothicNeoB, fontWeight: 'bold' },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
  },
  section: {
    padding: 36,
    flexGrow: 1,
  },
  day: {
    fontFamily: 'Mundial',
  },
  mapImage: {
    width: 200,
    height: 150,
  },
  cityTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    borderBottom: '2px solid #f6f6f6',
    padding: '10 0',
  },
  cityName: {
    fontFamily: 'AppleSDGothicNeo',
    fontWeight: 'bold',
    fontSize: 14,
  },
  mapPin: {
    width: 18,
    height: 18,
    marginRight: 6,
  },
  location: {
    margin: '15 0 0',
  },
  locationTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  locationOrder: {
    width: 20,
    height: 20,
    backgroundColor: '#0A0A0A',
    fontFamily: 'Mundial',
    color: 'white',
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 12,
    padding: '4 0 0',
    marginRight: 12,
  },
  locationText: {
    fontFamily: 'AppleSDGothicNeo',
    fontWeight: 'bold',
    fontSize: 12,
  },
  descWrap: {
    margin: '0 9',
    padding: '8 20',
    borderLeft: '2px dashed #ddd',
  },
  desc: {
    fontFamily: 'AppleSDGothicNeo',
    fontWeight: 'normal',
    fontSize: 12,
  },
  imageWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 6,
  },
  imageItem: {
    width: '24%',
    borderRadius: 12,
    overflow: 'hidden',
  },
});

export default styles;
