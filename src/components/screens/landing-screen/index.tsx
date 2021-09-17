import React, { FunctionComponent, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setLatestNews } from '../../../redux/actions/news';

import globalStyles from '../../../global/global-styles';
import styles from './styles';

const tvIcon = require('../../../assets/icons/tv-icon.png');

type Props = {
  latestNewsIds: number[],
  setLatestNews: () => void;
};
const LandingScreenContainer: FunctionComponent<Props> = (props) => {
  const navigation = useNavigation();
  useEffect(() => {
    props.setLatestNews();
  },[]);

  return (
    <View style={[globalStyles.center, globalStyles.flex_1]}>
      <View>
        <View style={[styles.watch_live, globalStyles.center]}>
          <Text style={[globalStyles.h2, styles.watch_live_text]}>Watch Live</Text>
        </View>
        <Text style={[globalStyles.small, styles.feature_in_progress]}>Feature in progress</Text>
        <TouchableOpacity
          delayPressIn={0}
          onPress={()=>{
            navigation.navigate('LatestNews');
          }}
          style={[styles.latest_news, globalStyles.center, globalStyles.flex_direction_row]}
        >
          <Image source={tvIcon} style={{width: 40, height: 40}} />
          <Text style={[globalStyles.h2, styles.top_stories_text]}>See Top stories</Text>
        </TouchableOpacity>
      </View>
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
        setLatestNews,
      },
      dispatch
    ),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingScreenContainer);
