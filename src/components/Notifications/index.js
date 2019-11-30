import React, { useState, useEffect } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { MdNotifications } from 'react-icons/md';

import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const handleToggleVisible = () => {
    setVisible(!visible);
  };

  const handleMarkAsRead = async id => {
    await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map(noti =>
        noti._id === id ? { ...noti, read: true } : noti
      )
    );
  };

  const loadNotifications = async () => {
    const response = await api.get('notifications');

    const data = response.data.map(noti => ({
      ...noti,
      timeDistance: formatDistance(parseISO(noti.createdAt), new Date(), {
        addSuffix: true,
        locale: pt,
      }),
    }));
    setNotifications(data);
  };

  useEffect(() => {
    loadNotifications();
  }, []);

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              <button
                type="button"
                onClick={() => handleMarkAsRead(notification._id)}>
                Marcar como lida
              </button>
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
