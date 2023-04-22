import React, { memo } from 'react';
import type { PropsWithChildren } from 'react';
import { Text, useColorScheme, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from './WelcomeSectionStyles';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function WelcomeSection({ children, title }: SectionProps) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

export default memo(WelcomeSection);
