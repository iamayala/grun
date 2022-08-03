import { Dimensions, View, StatusBar, StyleSheet, Platform } from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height, width } = Dimensions.get('window');

const isIPhoneX = () => Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT
    : false;

export const StatusBarHeight = Platform.select({
    ios: isIPhoneX() ? 33 : 20,
    android: StatusBar.currentHeight,
    default: 0
})

export const WIDTH = Dimensions.get('screen').width;
export const HEIGHT = Dimensions.get('screen').height;

export const primary = '#171717';
export const textColor = '#3F414E';
export const greyColor = '#A1A4B2';
export const lightColor = '#F2F3F7';


// exporrt language

export const languages = [
        {
          language: "English",
          flag: "https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png"
        }, {
          language: "French",
          flag: "https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png"
        }, {
          language: "Kinyarwanda",
          flag: "https://www.countryflags.com/wp-content/uploads/rwanda-flag-png-large.png"
        }
    ]


// profiles
export const profiles = [
  {
          id: 1,
          image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
          name: "John Smith",
        },
        {
          id: 2,
          image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
          name: "Jane Smith",
        },{
          id: 3,
          image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
          name: "Patrick Smith",
        },
        {
          id: 4,
          image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
          name: "Billie Smith",
        }
]
