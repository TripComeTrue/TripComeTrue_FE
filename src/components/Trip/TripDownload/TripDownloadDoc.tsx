import { Document, Image, Page, Text, View } from '@react-pdf/renderer';
import styles from './TripDownloadDoc.styles';
import { TripDownloadDocProps } from './TripDownloadDoc.types';

function TripDownloadDoc({ schedulesData }: TripDownloadDocProps) {
  const schedulesArr = schedulesData && Object.entries(schedulesData);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {schedulesArr?.map(([date, daysData], index) => (
          <View style={styles.section} key={index}>
            <Text style={styles.day}>
              DAY {daysData[0].dayNumber} | {date.replace(/-/gi, '.')}
            </Text>
            <View style={styles.cityTitle}>
              <Image src="/images/marker.svg" style={styles.mapPin} />
              <Text style={styles.cityName}>{daysData[0].countryName}</Text>
            </View>
            {daysData?.map((dayData) => (
              <View style={styles.location} key={dayData.id}>
                <View style={styles.locationTitle}>
                  <Text style={styles.locationOrder}>{dayData.ordering}</Text>
                  <Text style={styles.locationText}>{dayData.placeName}</Text>
                </View>
                <View style={styles.descWrap}>
                  <Text style={styles.desc}>{dayData.content}</Text>
                </View>
                <View style={styles.imageWrap}>
                  {dayData.images.map((imageData) => (
                    <View
                      style={styles.imageItem}
                      key={`imageData-${imageData.id}`}>
                      <Image src={imageData.imageUrl} />
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        ))}
      </Page>
    </Document>
  );
}

export default TripDownloadDoc;
