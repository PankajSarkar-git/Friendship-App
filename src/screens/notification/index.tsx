import {View, Text, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import NavigationHeader from '../../components/navigationHeader';
import {styles} from './styles';
import NotificationItem from '../../components/notificationItem';
import {notificationData} from '../../data';
import sizer from '../../helper/sizer';

const Notification = () => {
  const [showNotification, setShowNotification] = useState<String>('All');
  return (
    <View style={styles.container}>
      <NavigationHeader setShowNotification={setShowNotification} />
      <View>
        <View>
          <Text style={styles.headdingText}>
            {showNotification} Notification
          </Text>
        </View>

        <ScrollView
          scrollEnabled={true}
          style={styles.scroll}
          showsHorizontalScrollIndicator={false}>
          {showNotification === 'All' && (
            <>
              <View>
                <Text style={styles.subHeading}>Today</Text>
                <View>
                  {notificationData.map(item => (
                    <NotificationItem item={item} key={item.id} />
                  ))}
                </View>
              </View>
              <View
                style={[
                  styles.notificationContainer,
                  {
                    marginTop: sizer.horizontalScale(12),
                  },
                ]}>
                <Text style={styles.subHeading}>This Week</Text>
                <View>
                  {notificationData.map(item => (
                    <NotificationItem item={item} key={item.id} />
                  ))}
                </View>
              </View>
              <View
                style={[
                  styles.notificationContainer,
                  {
                    marginTop: sizer.horizontalScale(12),
                  },
                ]}>
                <Text style={styles.subHeading}>This Month</Text>
                <View>
                  {notificationData.map(item => (
                    <NotificationItem item={item} key={item.id} />
                  ))}
                </View>
              </View>
            </>
          )}
          {showNotification === 'Week' && (
            <>
              <View>
                <Text style={styles.subHeading}>This Week</Text>
                <View>
                  {notificationData.map(item => (
                    <NotificationItem item={item} key={item.id} />
                  ))}
                </View>
              </View>
            </>
          )}
          {showNotification === 'Month' && (
            <>
              <View>
                <Text style={styles.subHeading}>This Month</Text>
                <View>
                  {notificationData.map(item => (
                    <NotificationItem item={item} key={item.id} />
                  ))}
                </View>
              </View>
            </>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default Notification;
