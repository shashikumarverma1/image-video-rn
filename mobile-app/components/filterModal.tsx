import { useEffect, useState } from "react";
import {
  TextInput,
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Image,
  Modal,
} from "react-native";
// import { Checkbox } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import experience from "../data/experience";
import { DatePosted } from "../data/datePosted";
import { department } from "../data/department";
import { distance } from "../data/distance";
import { salary } from "../data/salary";
import { sortBy } from "../data/sortBy";
import { workMode } from "../data/workMode";
import { workShift } from "../data/workShift";
import { workType } from "../data/workType";

const windowWidth = Dimensions.get("window").width;

export const FilterModal = ({
  modalVisible,
  setModalVisible,
  selectedFilterText,
  setSelectedFilterText,data,setData
}) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [isSelected, setSelection] = useState(false);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={{ marginTop: 130 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            backgroundColor: "#D3D3D3",
            paddingVertical: 10,
            marginTop: -150,
            opacity: 0.5,
            paddingTop: 140,
          }}
        >
          <Pressable onPress={() =>{ setModalVisible(!modalVisible)
            setData(null)
          }}>
            <Text
              style={{
                padding: 10,
                marginRight: 12,
                backgroundColor: "black",
                borderRadius: 20,
              }}
            >
              <Ionicons name="close-outline" size={25} color="#FFFFFF" />
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: windowWidth / 3,
              backgroundColor: "#f7f3f2",
              height: windowHeight,
            }}
          >
            <Text
              style={{
                padding: 5,
                paddingLeft: 15,
                fontWeight: "600",
                fontSize: 18,
                color: "grey",
                marginTop: 10,
              }}
            >
              All Filter
            </Text>
            {[
              { date: "Date-posted" },
              { date: "Distance" },
              { date: "Salary" },
              { date: "work-mode" },
              { date: "work-type" },
              { date: "work-shift" },
              { date: "Department" },
              { date: "Experience" },
              { date: "sort-by" },
            ].map((e, index) => {
              return (
                <Pressable
                  onPress={() => {
              
                    if (e.date == "Date-posted") {
                      setData(DatePosted);
                    }
                    if (e.date == "Distance") {
                      setData(distance);
                    }
                    if (e.date == "Salary") {
                      setData(salary);
                    }
                    if (e.date == "work-mode") {
                      setData(workMode);
                    }
                    if (e.date == "work-type") {
                      setData(workType);
                    }
                    if (e.date == "work-shift") {
                      setData(workShift);
                    }
                    if (e.date == "Department") {
                      setData(department);
                    }
                    if (e.date == "Experience") {
                      setData(experience);
                    }
                    if (e.date == "sort-by") {
                      setData(sortBy);
                    }
                    setSelectedFilterText(e.date);
                  }}
                  key={index}
                >
                  <Text
                    style={{
                      padding: 15,
                      paddingLeft: 15,
                      fontWeight: "500",
                      fontSize: 15,
                      color: "grey",
                      backgroundColor:
                        e.date == selectedFilterText ? "#FFFFFF" : null,
                    }}
                  >
                    {e.date}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <View
            style={{
              width: (windowWidth * 2) / 3,
              backgroundColor: "#ffffff",
              height: windowHeight,
            }}
          >
            {data?.map((e, i) => {
              return (
                <Pressable
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onPress={() => {
                    setSelectedFilterText(e.name);
                  }}
                >
                  {/* <Checkbox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={{ alignSelf: "center" , color:"grey" }}
                /> */}
                  <Text
                    style={{
                      padding: 5,
                      paddingLeft: 19,
                      fontWeight: "500",
                      fontSize: 15,
                      color: "grey",
                      marginTop: 10,
                    }}
                  >
                    {e.name}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
