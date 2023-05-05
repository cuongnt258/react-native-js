import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from '@hooks';
import { setDefaultTheme } from '@redux/theme';

const Startup = ({ navigation }) => {
  const { Layout, Gutters } = useTheme();

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );
    await setDefaultTheme({ theme: 'default', darkMode: null });
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
    </View>
  );
};
export default Startup;
