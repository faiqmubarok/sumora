import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import OrderedList from "../ordered-list";
import { useNavigation } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StatusBar } from "react-native";

const tags = [
  { id: 1, name: "Water Quality" },
  { id: 2, name: "Monitoring Tips" },
  { id: 3, name: "Smart Living" },
];

export default function DetailArticlePage() {
  const navigation = useNavigation();

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const [barStyle, setBarStyle] = useState<"light-content" | "dark-content">(
    "light-content"
  );

  useEffect(() => {
    const listener = scrollY.addListener(({ value }) => {
      if (value > 30 && barStyle !== "dark-content") {
        setBarStyle("dark-content");
      } else if (value <= 60 && barStyle !== "light-content") {
        setBarStyle("light-content");
      }
    });

    return () => {
      scrollY.removeListener(listener);
    };
  }, [scrollY, barStyle]);

  return (
    <>
      <StatusBar
        barStyle={barStyle}
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.container}>
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            {
              height: 110,
              backgroundColor: "white",
              opacity: headerOpacity,
              zIndex: 10,
              elevation: 4,
              shadowColor: "#000",
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
            },
          ]}
        />

        {/* Header Content */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.goBack()}
          >
            <Entypo name="chevron-left" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="more-vert" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <Animated.ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
        >
          <Image
            source={require("@/assets/images/article-image.png")}
            style={{ width: "100%", height: 389, resizeMode: "cover" }}
          />
          <View style={styles.content}>
            {/* Tags & Heading */}
            <View style={{ gap: 8 }}>
              <View style={{ gap: 12 }}>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 8,
                    flexWrap: "wrap",
                  }}
                >
                  {tags.map((tag) => (
                    <View
                      key={tag.id}
                      style={{
                        borderWidth: 1,
                        borderColor: "#E2E2E2",
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        borderRadius: 999,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          color: "#4D4D4D",
                          fontFamily: "DMSans-Regular",
                        }}
                      >
                        {tag.name}
                      </Text>
                    </View>
                  ))}
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "DMSans-Medium",
                    lineHeight: 28,
                  }}
                >
                  Why Daily Water Monitoring Matters More Than You Think
                </Text>
              </View>

              {/* Logo & Date */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Image
                    width={32}
                    height={32}
                    style={{ width: 32, height: 32, borderRadius: 16 }}
                    source={require("@/assets/images/logo-2.png")}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "DMSans-Medium",
                    }}
                  >
                    Sumora
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#A5A5A5",
                    fontFamily: "DMSans-Regular",
                  }}
                >
                  14 July 2025
                </Text>
              </View>
            </View>

            {/* Description */}
            <Text style={styles.paragraph}>
              We often take clean water for granted—until something goes wrong.
              From sudden changes in temperature to unexpected contamination,
              water quality can shift faster than we realize. That’s why
              consistent, daily monitoring isn’t just recommended—it’s
              essential.
            </Text>

            <View>
              <Text style={[styles.subheading, { marginBottom: 4 }]}>
                The Hidden Fluctuations in Water Quality
              </Text>
              <Text style={styles.paragraph}>
                Water is dynamic. Its quality can be affected by environmental
                factors like rainfall, nearby industrial activity, or aging
                pipes. These changes can happen within just a few hours.
              </Text>
              <Text style={styles.paragraph}>Let’s break it down:</Text>
              <OrderedList
                data={[
                  "Rainfall can introduce dirt or bacteria into open water tanks or reservoirs.",
                  "Temperature shifts can influence the growth of algae or bacteria.",
                  "Human activities such as washing chemicals down the drain affect underground water.",
                ]}
              />
              <Text style={[styles.paragraph, { marginBottom: 4 }]}>
                Without regular checks, these changes go unnoticed until they
                become real problems.
              </Text>
            </View>

            <View style={styles.noteBox}>
              <Text style={styles.paragraph}>
                Imagine discovering a spike in turbidity due to a pipe leak in
                the morning. If detected early, action can be taken before it
                affects household use or crops (if used in farming).
              </Text>
            </View>

            <View>
              <Text style={styles.subheading}>
                Why 4–5 Hour Intervals Make Sense
              </Text>
              <Text style={styles.paragraph}>
                Research and field practice suggest that checking water quality
                every 4 to 5 hours provides the best balance between
                practicality and prevention. It ensures:
              </Text>
              <OrderedList
                data={[
                  "Early detection of changes",
                  "Timely alerts for water treatment",
                  "Smarter usage decisions based on real-time data",
                ]}
              />
              <Text style={styles.paragraph}>
                With Sumora, your water is monitored in smart cycles—alerting
                you when something’s off and showing you trends you wouldn’t
                spot on your own.
              </Text>
            </View>
          </View>
        </Animated.ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 50,
    width: "100%",
    paddingHorizontal: 16,
    zIndex: 11,
  },
  iconButton: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(121, 121, 121, 0.25)",
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    marginTop: -13,
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 16,
  },
  subheading: {
    fontSize: 14,
    fontFamily: "DMSans-SemiBold",
    marginBottom: 4,
  },
  paragraph: {
    fontSize: 14,
    color: "#4D4D4D",
    fontFamily: "DMSans-Regular",
    lineHeight: 24,
  },
  noteBox: {
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.04)",
    borderLeftWidth: 2,
    borderLeftColor: "#000",
  },
});
