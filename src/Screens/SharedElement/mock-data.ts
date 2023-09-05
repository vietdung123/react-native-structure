import { SharedTransition, withTiming } from 'react-native-reanimated';

export const PHOTOS = [
  {
    description: 'Leader structure safe or black late wife newspaper her pick central forget single likely.',
    id: 1,
    url: 'https://api.slingacademy.com/public/sample-photos/1.jpeg',
    title: 'Defense the travel audience hand',
    user: 28,
  },
  {
    description: 'Much technology how within rather him lay why part actually system increase feel.',
    id: 2,
    url: 'https://api.slingacademy.com/public/sample-photos/2.jpeg',
    title: 'Space build policy people model treatment town hard use',
    user: 25,
  },
  {
    description: 'Street anything piece south yard since well point summer school economy respond people mother.',
    id: 3,
    url: 'https://api.slingacademy.com/public/sample-photos/3.jpeg',
    title: 'Party about different guess bill too owner',
    user: 7,
  },
  {
    description:
      'Skill drug college contain herself future seat human yes approach how then maybe public summer play commercial anything woman include million body measure government clearly question quickly parent.',
    id: 4,
    url: 'https://api.slingacademy.com/public/sample-photos/4.jpeg',
    title: 'Table husband',
    user: 22,
  },
  {
    description:
      'World early north TV around meet goal across reason responsibility have must build up some language soon.',
    id: 5,
    url: 'https://api.slingacademy.com/public/sample-photos/5.jpeg',
    title: 'Support audience model program three music',
    user: 25,
  },
  {
    description:
      'Training beautiful age four skin cultural hundred environmental ability blood go physical relate produce tough open police.',
    id: 6,
    url: 'https://api.slingacademy.com/public/sample-photos/6.jpeg',
    title: 'Apply future response she reduce decide',
    user: 30,
  },
  {
    description: 'Few address take for special development white career.',
    id: 7,
    url: 'https://api.slingacademy.com/public/sample-photos/7.jpeg',
    title: 'Fire year candidate too like',
    user: 20,
  },
  {
    description:
      'Drug if approach out according set home job company wall source trouble act huge easy style physical so month.',
    id: 8,
    url: 'https://api.slingacademy.com/public/sample-photos/8.jpeg',
    title: 'Reflect design camera land girl wind behind side',
    user: 13,
  },
  {
    description: 'Nature focus wonder behind magazine pattern degree far without tree consider.',
    id: 9,
    url: 'https://api.slingacademy.com/public/sample-photos/9.jpeg',
    title: 'Per nature research',
    user: 2,
  },
  {
    description:
      'Parent talk collection fill between management purpose fish fight real teacher successful me arrive little.',
    id: 10,
    url: 'https://api.slingacademy.com/public/sample-photos/10.jpeg',
    title: 'Yard',
    user: 30,
  },
];

const timingConfig = { duration: 300 };

export const sharedTransitionIn = SharedTransition.custom(values => {
  'worklet';
  return {
    height: withTiming(values.targetHeight, timingConfig),
    width: withTiming(values.targetWidth, timingConfig),
    originX: withTiming(values.targetOriginX, timingConfig),
    originY: withTiming(values.targetOriginY, timingConfig),
    // originY: values.currentOriginY < 100 ? withTiming(values.targetOriginY, timingConfig) : withSequence(
    //   withTiming(values.currentOriginY + 50, {
    //     duration: 300,
    //     easing: Easing.linear,
    //   }),
    //   withTiming(values.targetOriginY, {
    //     duration: 300,
    //     easing: Easing.linear,
    //   }),
    // ),
  };
});
