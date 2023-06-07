import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Line, Circle, Text, G } from 'react-native-svg';

const data = [
    { date: '2023-06-01', content: 'Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit.\nLorem ipsum dolor sit amet,\n consectetur adipiscing elit.\nkjnkn\njknkn\nkjnkn' },
    { date: '2023-06-02', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nsfefwef\nefewf' },
    { date: '2023-06-03', content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { date: '2023-06-03', content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { date: '2023-06-03', content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { date: '2023-06-03', content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  const bubblePositions = [];
  const bubbleContentPositions = [];
  
  const getBubblePosition = (index) => {
    let position = 20; // Initial position with a fixed spacing of 60 units
    if(index===0){
        bubblePositions[index] = position;
        return position;
    }
    // Calculate the dynamic height based on the text length
    const contentTextHeight = data[index - 1].content.split('\n').length * 20; // Assuming each line takes 20 units of height
  
    //Adjust the bubble position based on the previous bubble position
    position += bubblePositions[index-1];
    // Adjust the bubble position based on the dynamic height
    position += contentTextHeight;
    bubblePositions[index] = position;

    return position;
  };

  const getBubbleTextPosition = (index) => {
    let position = 20; // Initial position with a fixed spacing of 60 units
    if(index===0){
        bubbleContentPositions[index] = position;
        return position;
    }
    // Calculate the dynamic height based on the text length
    const contentTextHeight = data[index - 1].content.split('\n').length * 20; // Assuming each line takes 20 units of height
  
    //Adjust the bubble position based on the previous bubble position
    position += bubbleContentPositions[index-1];
    // Adjust the bubble position based on the dynamic height
    position += contentTextHeight;
    bubbleContentPositions[index] = position;

    return position;
  }

  const BubbledLineDisplay = () => {
    return (
      <View style={styles.container}>
        <Svg height="100%" width="100%">
          <Line
            x1="10"
            y1="0"
            x2="10"
            y2="100%"
            stroke="blue"
            strokeWidth="2"
          />
          {data.map((item, index) => (
            <G key={index} x={10} y={getBubblePosition(index)} style={styles.fancyRenderer}>
              <Circle
                cx="0"
                cy="0"
                r="8"
                fill="white"
                stroke="blue"
                strokeWidth="2"
                style={styles.circle}
              />
              <Text style={styles.bubbleDate} x="24" y={getBubblePosition(index)}>{item.date}</Text>
              <Text style={styles.bubbleText} x="24" y={getBubbleTextPosition(index) + 20}>{item.content}</Text>
            </G>
          ))}
        </Svg>
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      padding: 20,
      backgroundColor:'#ff0000'
    },
    bubbleDate: {
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 10,
      backgroundColor:'#001110'
    },
    bubbleText: {
      fontSize: 14,
      marginLeft: 10,
    },
    circle: {
        width: 20
    },
    fancyRenderer: {
        flexDirection: 'column'
    }
  });

export default BubbledLineDisplay;
  
  