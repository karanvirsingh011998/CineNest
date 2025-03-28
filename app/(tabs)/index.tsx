import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, View } from "react-native";

export default function Index() {
  return (
<View className="flex-1 bg-primary" >
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView className="flex-1 px-5">
          <Image source={icons.logo} className="mt-5 mx-auto " style={{width: 100, height: 100}} />
      </ScrollView>
    </View>
  );
}
