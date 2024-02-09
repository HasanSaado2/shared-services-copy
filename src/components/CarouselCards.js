import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";

function CarouselCards() {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  const data = [
    {
      title: "Aenean leo",
      body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      title: "In turpis",
      body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "Lorem Ipsum",
      body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
  ];

  return (
    <View style={{ alignSelf: "center" }}>
      <Text style={styles.highLightText}>Highlights</Text>
      <Carousel
        layout="tinder"
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={300}
        itemWidth={300}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        height={125}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "rgba(0, 0, 0, 0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  highLightText: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: "MontserratBold",
  },
});
export default CarouselCards;
