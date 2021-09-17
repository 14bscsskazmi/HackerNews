import React, { FunctionComponent, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, Linking} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
// import { setLatestNews } from '../../../redux/actions/news';
import { getLatestNews } from '../../../helpers';

import globalStyles from '../../../global/global-styles';
import styles from './styles';
import { BASE_URL, COLORS, SCREEN_WIDTH } from '../../../global/constants';
import { getRequest } from '../../../network';
import DividerContainer from '../../../global/divider';

const rightArrow = require('../../../assets/icons/right-icon.png');

type Props = {
  latestNewsIds: number[],
  // setLatestNews: () => void;
};
const LatestNewsContainer: FunctionComponent<Props> = (props) => {
  const [latestNews, setLatestNews] = useState<any>([]);

  useEffect(() => {
   console.log('HERE: ', latestNews.length);
   setLatestNews(getLatestNews(props.latestNewsIds, setLatestNews, latestNews));
  },[]);
  // useEffect(() => {
  //   console.log('News.......: ', latestNews);
  //  },[latestNews.length === 5]);

  return (
    <View style={[globalStyles.center, globalStyles.flex_1, styles.main_container]}>
      {
        latestNews.length !== 5 ?
          <View style={[globalStyles.center, {flex: 1}]}>
            <ActivityIndicator  size="large" color="#000000"/>
          </View>
        :
        <View>
          <Text style={[globalStyles.h2, {color: COLORS.black}]}>Latest stories</Text>

          {
          latestNews.map((currentNews: any, index: number) => {
            return (
              <TouchableOpacity
                onPress={()=>{
                  Linking.openURL(currentNews.url);
                }}
              >
                <View style={[styles.latest_story_title_card]}>
                  <Text style={[globalStyles.regular, styles.title_text]}>{currentNews.title}</Text>
                  <Image source={rightArrow} style={styles.right_arrow}/>
                </View>
                  {
                    index === latestNews.length - 1? 
                      null
                    :
                      <DividerContainer />
                  }
              </TouchableOpacity>
            )
          })
          }
        </View>
      }
      
    </View>
  );
};
function mapStateToProps(state: {
  newsReducer: any;
}) {
  return {
    latestNewsIds: state.newsReducer.latestNewsIds,
  };
}
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    ...bindActionCreators(
      {
        // setLatestNews,
      },
      dispatch
    ),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestNewsContainer);
