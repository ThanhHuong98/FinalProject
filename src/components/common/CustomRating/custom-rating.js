import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MAX_STARS = 5;

export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
}

pressStarButton = (rating) => {
    if (!this.props.disabled) {
    if (rating != this.state.rating) {
        if (this.props.onStarChange) {
            this.props.onStarChange(rating);
        }
        this.setState({
            rating: rating,
        });
    }
    }
};

    render() {
        const starsLeft = this.state.rating;
        const starButtons = [];
        for (let i = 0; i < MAX_STARS; i++) {
            const iconName = (i + 1) <= starsLeft ? 'star' : 'star-outline';
            const iconColor = (i + 1) <= starsLeft ? '#ffee58' : '#cfd8dc';
            starButtons.push(
                <TouchableOpacity
                    activeOpacity={0.20}
                    key={i + 1}
                    onPress={() => this.pressStarButton(i + 1)}
                >
                    <Icon key={`STAR_${i}`} name={iconName} size={this.props.starSize || 18} color={iconColor} />
                </TouchableOpacity>
            );
        }
        return (
            <View style={styles.starRatingContainer}>
                {starButtons}
            </View>
        );
    }
}

const styles = {
    starRatingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
};