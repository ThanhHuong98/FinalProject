/* eslint-disable import/no-cycle */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable global-require */
import React, { useState, useContext } from 'react';
import {
  StyleSheet, View, Image, TextInput, Text, FlatList,
} from 'react-native';
import PropTypes, { object } from 'prop-types';
import StarRating from 'react-native-star-rating';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeContext, LanguageContext } from '../../../App';
import { Colors } from '../../Constant/Constant';
import { formatHourType1, formatMonthYearType } from '../../utils/DateTimeUtils';


const ContentRating = ({
  avatar, name, ratingNumber, updatedTime, content,
}) => (
  <LanguageContext.Consumer>
    {
      ({ lang }) => (
        <View style={styles.itemWrapper}>
          <View style={styles.itemInfoWrapper}>
            <Image source={{ uri: avatar }} style={styles.itemAvatar} />
            <Text style={{ fontSize: 11, color: Colors.lightGray, marginTop: 5 }}>{name}</Text>
          </View>
          <View style={styles.itemContentWrapper}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <StarRating
                halfStarEnabled
                disabled
                halfStarColor="#fcba03"
                maxStars={5}
                rating={ratingNumber || 0}
                fullStarColor="#fcba03"
                emptyStarColor="#d4d4d4"
                starSize={15}
              />
              <Text style={{ fontSize: 11, color: Colors.lightGray, marginLeft: 10 }}>
                (
                {formatMonthYearType(updatedTime)}
                )
              </Text>
            </View>
            <Text style={{ fontSize: 13, color: Colors.lightGray, marginTop: 10 }}>{content}</Text>
          </View>
        </View>

      )
    }
  </LanguageContext.Consumer>
);

const Rating = ({
  user, userRating, listRating, onSendRating,
}) => {
  const [rating, setRating] = useState({
    contentPoint: userRating ? userRating.contentPoint : 0,
    content: userRating ? userRating.content : 0,
  });
  const handleSaveRating = (number) => {
    setRating({
      ...rating,
      contentPoint: number,
    });
  };
  return (
    <LanguageContext.Consumer>
      {
        ({ lang }) => (
          <ThemeContext.Consumer>
            {
              ({ theme }) => (
                <View style={styles.container}>
                  <View style={styles.userRatingBlock}>
                    <Text style={{ fontSize: 11, color: Colors.lightGray, padding: 10 }}>{lang.RatingIntro}</Text>
                    <StarRating
                      animation="rubberBand"
                      halfStarEnabled
                      halfStarColor="#fcba03"
                      maxStars={5}
                      rating={rating.contentPoint || 0}
                      fullStarColor="#fcba03"
                      emptyStarColor="#d4d4d4"
                      starSize={25}
                      selectedStar={(number) => handleSaveRating(number)}
                    />
                    <View style={styles.inputBlock}>
                      <TextInput
                        placeholder={lang.ContentRating}
                        placeholderTextColor={Colors.gray}
                        value={rating.content}
                        onChangeText={(value) => setRating({
                          ...rating,
                          content: value,
                        })}
                        style={{ ...styles.input, color: theme.textColor }}
                      />
                      <TouchableOpacity
                        style={{
                          backgroundColor: Colors.blue,
                          borderRadius: 5,
                          paddingHorizontal: 10,
                          paddingVertical: 7,
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                        onPress={() => onSendRating(rating)}
                      >
                        <Text style={{
                          color: Colors.white,
                          fontSize: 13,
                          fontWeight: 'bold',
                          marginRight: 5,
                        }}
                        >
                          {lang.Send}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {
              listRating && listRating.length !== 0
                ? (
                  <View style={styles.ratingBlock}>
                    <Text style={{ ...styles.title, color: theme.textColor }}>Đánh giá của người học</Text>
                    <FlatList
                      horizontal={false}
                      data={listRating}
                      showsVerticalScrollIndicator={false}
                      renderItem={({ item }) => (
                        <ContentRating
                          avatar={item.user.avatar}
                          name={item.user.name}
                          ratingNumber={item.contentPoint}
                          content={item.content}
                          updatedTime={item.updatedAt}
                        />
                      )}
                      ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                      ListFooterComponent={() => <View style={{ height: 30 }} />}
                    />
                  </View>
                )
                : null
            }
                  </View>
                </View>

              )
            }
          </ThemeContext.Consumer>
        )
      }
    </LanguageContext.Consumer>
  );
};

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: Colors.lightGray,
    borderRadius: 40,
    height: 60,
    marginBottom: 20,
    width: 60,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    borderBottomColor: Colors.gray,
    borderBottomWidth: 2,
    flex: 1,
    fontSize: 13,
    marginRight: 20,
    paddingVertical: 5,
  },
  inputBlock: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
  },
  itemAvatar: {
    backgroundColor: Colors.lightGray,
    borderRadius: 40,
    height: 30,
    width: 30,
  },
  itemContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 15,
  },
  itemInfoWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '27%',
  },
  itemWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  ratingBlock: {
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30,
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 20,
  },
  userRatingBlock: {
    alignItems: 'center',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
});
ContentRating.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  ratingNumber: PropTypes.number,
  content: PropTypes.string,
};
Rating.propTypes = {
  user: PropTypes.object,
  userRating: PropTypes.object,
  listRating: PropTypes.arrayOf(object),
  onSendRating: PropTypes.func,
};

export default Rating;
