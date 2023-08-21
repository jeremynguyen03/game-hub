import {
  MdPhoneIphone,
  SiNintendo,
  BsGlobe,
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid
} from "react-icons/all";
import {Platform} from "../hooks/usePlatforms";
import {HStack, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";

interface Props {
  platforms: Platform[]
}

const PlatformIconList = ({platforms}: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  }
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
  )
}

export default PlatformIconList;