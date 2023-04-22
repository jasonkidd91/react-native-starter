import React, { useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ENV } from '@env';

import { Images } from '../../assets';
import { useTheme } from '../../themes/ThemeUtils';
import { DATE_FORMATS, formatDate } from '../../utils/DateUtils';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchContacts } from '../../redux/home/homeSlice';
import getStyles from './TemplateScreenStyles';

const TemplateScreen = () => {
  const dispatch = useAppDispatch();
  const { contacts } = useAppSelector(state => state.home);
  const { t } = useTranslation();
  const { currentTheme } = useTheme();
  const styles = getStyles();

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(originalPromiseResult => {
        console.log(originalPromiseResult && 'api called succeed');
      })
      .catch(rejectedValueOrSerializedError => {
        console.log(rejectedValueOrSerializedError);
      });
  }, [dispatch]);

  const renderHeader = () => (
    <View style={styles.headerSection}>
      <Image source={Images.logo} style={styles.logo} />
      <Text style={styles.text}>{t('common:appName')}</Text>
      <Text style={styles.caption}>
        {formatDate(new Date(), DATE_FORMATS.SHORT_DATE)}
      </Text>
      <Text style={styles.caption}>
        Mode: {ENV} ~ Theme: {currentTheme}
      </Text>
    </View>
  );

  const renderContactItem = ({ item }: any) => (
    <View style={styles.contactItem}>
      <Text style={styles.contactName}>
        {item.firstName} {item.lastName}
      </Text>
      <Text style={styles.contactPhone}>{item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={renderContactItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
};

export default TemplateScreen;
