import { Document, Image, Page, Text, View } from '@react-pdf/renderer';
import styles from './TripDownloadDoc.styles';

function TripDownloadDoc() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.day}>DAY 1 | 2024.10.20</Text>
          <View style={styles.cityTitle}>
            <Image src="/images/map-pin.png" style={styles.mapPin} />
            <Text style={styles.cityName}>스위스 취리히</Text>
          </View>
          <View style={styles.location}>
            <View style={styles.locationTitle}>
              <Text style={styles.locationOrder}>1</Text>
              <Text style={styles.locationText}>스위스 공항</Text>
            </View>
            <View style={styles.descWrap}>
              <Text style={styles.desc}>
                스위스 공항은 별거 없었습니다. 공항에서 파는 음식은 맛이
                없었어요. 항공권은 델타 항공 이용했습니다.
              </Text>
            </View>
          </View>
          <View style={styles.location}>
            <View style={styles.locationTitle}>
              <Text style={styles.locationOrder}>2</Text>
              <Text style={styles.locationText}>메이빈 숙소</Text>
            </View>
            <View style={styles.descWrap}>
              <Text style={styles.desc}>
                메이빈 숙소 좋았어요~ 스위스 풍경이 한눈에 다 보이기도 하고
                기차역이랑 가까워서 좋았습니다. 주변 풍경이 예술이에요.
              </Text>
            </View>
            <View style={styles.imageWrap}>
              <View style={styles.imageItem}>
                <Image src="/images/maybin-review01.jpg" />
              </View>
              <View style={styles.imageItem}>
                <Image src="/images/maybin-review02.jpg" />
              </View>
              <View style={styles.imageItem}>
                <Image src="/images/maybin-review03.jpg" />
              </View>
            </View>
          </View>
          <View style={styles.location}>
            <View style={styles.locationTitle}>
              <Text style={styles.locationOrder}>3</Text>
              <Text style={styles.locationText}>라인 폭포</Text>
            </View>
            <View style={styles.descWrap}>
              <Text style={styles.desc}>
                첫날은 숙소 근처 라인 폭포를 구경했어요. 스위스는 무조건 스위스
                패스를 구매해서 기차를 타고 관광하시면 편합니다. 다섯줄
                이상부터는 옆에 스크롤바 생성 내려가게 할 수 있나요??
              </Text>
            </View>
            <View style={styles.imageWrap}>
              <View style={styles.imageItem}>
                <Image src="/images/line-review01.jpg" />
              </View>
              <View style={styles.imageItem}>
                <Image src="/images/line-review02.jpg" />
              </View>
              <View style={styles.imageItem}>
                <Image src="/images/line-review03.jpg" />
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default TripDownloadDoc;
