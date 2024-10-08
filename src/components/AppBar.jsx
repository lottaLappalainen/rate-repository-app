import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client'; 
import theme from './theme';
import Text from './Text';
import { GET_USER } from './graphQL/queries'; 
import useAuthStorage from '../hooks/useAuthStorage'; 
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    flexDirection: 'row',
  },
  tabTouchable: {
    flexGrow: 0,
  },
  tabContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'white',
  },
});

const AppBarTab = ({ children, to, ...props }) => {
  const content = (
    <View style={styles.tabContainer} {...props}>
      <Text fontWeight="bold" style={styles.tabText}>
        {children}
      </Text>
    </View>
  );

  return to ? (
    <Link to={to} {...props}>
      {content}
    </Link>
  ) : (
    <Pressable {...props}>{content}</Pressable>
  );
};

const AppBar = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const navigate = useNavigate();

  const { data } = useQuery(GET_USER);
  const currentUser = data?.me;

  const onSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate('/');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <AppBarTab to="/">Repositories</AppBarTab>
        {currentUser ? (
          <>
            <AppBarTab to="/create-review">Create a review</AppBarTab>
            <AppBarTab to="/my-reviews">My reviews</AppBarTab>
            <AppBarTab onPress={onSignOut}>Sign out</AppBarTab>
          </>
        ) : (
          <>
          <AppBarTab to="/sign-in">Sign in</AppBarTab>
          <AppBarTab to="/sign-up">Sign Up</AppBarTab>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
