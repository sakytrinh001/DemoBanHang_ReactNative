

import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import MainScreen from './MainScreen'
import LoginScreen from './LoginScreen'
import ForgotPass from './ForgotPass'
import ScrollViewTest from './ScrollViewTest'
import ListView from './ListView'
import ScrollViewKeyboard from './ScrollViewKeyboard'
import SectionListBasics from './SectionListBasics'
import TabbarCustom from './Tabbar/TabbarCustom'
import TabbarTopBottom from './Tabbar/TabbarTopBottom'
import ViewScreenTabbar from './ViewScreenTabbar/ViewScreenTabbar'
import TEST from './TEST'
import { TouchableOpacity, Image, Icon, Dimensions } from 'react-native';
import Menu from './Menu'
const { width, height } = Dimensions.get('window')

export const MyApp = StackNavigator({ 
  LoginScreen: {
    screen: MainScreen,
    navigationOptions: {
      headerVisible: false,
      title: 'Home',
    }
  },
  MainScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerVisible: false,
      title: 'Dang nhap',
      
    }
  },
  ForgotPass: {
    screen: ForgotPass,
    navigationOptions: {
      title: 'Quên mật khẩu',
    }
  },
  ScrollViewTest: {
    screen: ScrollViewTest,
    navigationOptions: {
      title: 'Test Scroll',
    }
  },
  ListView: {
    screen: ListView,
    navigationOptions: {
      title: 'Test ListView',
    }
  },
  ScrollViewKeyboard: {
    screen: ScrollViewKeyboard,
    navigationOptions: {
      title: 'Test Keyboard Scroll',
    }
  },
  SectionListBasics: {
    screen: SectionListBasics,
    navigationOptions: {
      title: 'Test Keyboard Scroll',
    }
  },
  TabbarCustom: {
    screen: TabbarCustom,
    navigationOptions: {
      title: 'Tabbar',
    }
  },
  TabbarTopBottom: {
    screen: TabbarTopBottom,
    navigationOptions: {
      title: 'Tabbar',
    }
  },
  ViewScreenTabbar: {
    screen: ViewScreenTabbar,
  },
  // Drawer: {
  //   screen: Drawer,
  // },
  
},
{
  headerMode: 'none'
});

export const DrawerNav = DrawerNavigator({
  Tabs: {
    screen: MyApp,
  }
},
  {
    drawerWidth: (width * 7) / 10,
    drawerPosition: 'left',
    contentComponent: Menu
  }
);
