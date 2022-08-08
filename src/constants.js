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
export const blueColor = '#0066cc';

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

export const howTo = [
  {
    id: 1,
    image: "https://raw.githubusercontent.com/iamayala/sileeence/master/assets/hellobg.png?token=GHSAT0AAAAAABUJLQS22ZAETNS4EWWZUNKMYXLNKIQ",
    title: "If you haven't seen Game of Thrones",
    description: "If you haven't seen Game of Thrones, go watch it right now. If you have then you'll totally get why this Hodor themed lorem ipsum generator is just brilliant."
  },
  {
    id: 2,
    image: "https://raw.githubusercontent.com/iamayala/sileeence/master/assets/hellobg.png?token=GHSAT0AAAAAABUJLQS22ZAETNS4EWWZUNKMYXLNKIQ",
    title: "In case you don't read Twitter",
    description: "In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size."
  },
  {
    id: 3,
    image: "https://raw.githubusercontent.com/iamayala/sileeence/master/assets/hellobg.png?token=GHSAT0AAAAAABUJLQS22ZAETNS4EWWZUNKMYXLNKIQ",
    title: "A handcrafted, small-batch.",
    description: "A handcrafted, small-batch, artisinal pour-over version of the classic lorem ipsum generator, Hipster Ipsum will give your mocks that blue collar touch."
  },
  {
    id: 4,
    image: "https://raw.githubusercontent.com/iamayala/sileeence/master/assets/hellobg.png?token=GHSAT0AAAAAABUJLQS22ZAETNS4EWWZUNKMYXLNKIQ",
    title: "Raise your design from the dead",
    description: "Raise your design from the dead with an army of Zombie Ipsum, frightful filler text that just won't die. Try the lorem ipsum of the undead if you dare..."
  }
]


export const FrequentlyAskedQuestions = [
  {
    id: 1,
    question: "What are the rules and regulations for riding a GrunScooter?",
    answer: ""
  },
  {
    id: 2,
    question: "Can I reserve a scooter?",
    answer: ""
  },
  {
    id: 3,
    question: "How do I start a scooter?",
    answer: ""
  },
  {
    id: 4,
    question: "How do I ride a GrunScooter?",
    answer: "Place one foot firmly on the baseboard. Use your other foot to push off against the ground a few times. Once you've gained some speed, press down on the throttle near your right thumb to accelerate. \n\nNote: In select markets, you can limit the top speed of your scooter via the app to learn at a comfortable pace. This option is displayed during the trip. \n\nWe recommend you familiarize yourself with the throttle to understand how to adjust your speed. To slow down, squeeze the hand brake."
  },
  {
    id: 5,
    question: "How do I end my ride?",
    answer: ""
  },
  {
    id: 6,
    question: "Why am I still getting charged after I end my ride?",
    answer: ""
  },
  {
    id: 7,
    question: "How much does it cost to ride a GrunScooter?",
    answer: ""
  },
  {
    id: 8,
    question: "How do I pay for a ride?",
    answer: ""
  },
  {
    id: 9,
    question: "Was I charged incorrectly?",
    answer: ""
  },
  {
    id: 10,
    question: "What do I do if I was involved in an accident?",
    answer: ""
  },
  {
    id: 11,
    question: "Was I charged incorrectly?",
    answer: ""
  },
  {
    id: 12,
    question: "What do I do if I was involved in an accident?",
    answer: ""
  }

]


export const supportmessages = [
  {
        conversationid: 1,
        content: "Hi there, I'm Lime's virtual assistant. How can I help you today?",
        sender: 0,
        receiver: 1,
        suggestedReplies: [{
          id: 1,
          reply: "I found an improperly parked Lime vehicle"
        }, {
          id: 2,
          reply: "I have a question about a charge"
        }, {
          id: 3,
          reply: "I have another question"
        }]
        
       },
      {
        conversationid: 2,
        content: "I found an improperly parked Lime vehicle",
        sender: 1,
        receiver: 0,
        suggestedReplies: []
       }
]
