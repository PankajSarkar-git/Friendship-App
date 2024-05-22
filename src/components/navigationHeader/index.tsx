import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import BackIcon from '../../assets/icons/BackIcon';
import BarIcon from '../../assets/icons/BarIcon';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const NavigationHeader = ({setShowNotification}: any) => {
  const [showMenu, setShowMenu] = useState<Boolean>(false);

  const navigation = useNavigation();

  const selectAll = (e: any) => {
    setShowMenu(!setShowMenu);
    setShowNotification('All');
  };
  const selectWeek = (e: any) => {
    setShowMenu(!setShowMenu);
    setShowNotification('Week');
  };
  const selectMonth = (e: any) => {
    setShowMenu(!setShowMenu);
    setShowNotification('Month');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon height={24} width={24} color={'#414141'} />
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
          <BarIcon height={24} width={24} color={'#414141'} />
        </TouchableOpacity>
        {showMenu && (
          <>
            <View style={styles.filterContainer}>
              <TouchableOpacity onPress={selectAll}>
                <Text style={styles.FilterText}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={selectWeek}>
                <Text style={styles.FilterText}>This Week</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={selectMonth}>
                <Text style={styles.FilterText}>This month</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default NavigationHeader;
