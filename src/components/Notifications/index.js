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

  const loadNotifications = async () => {
    const response = await api.get('/notifications');

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
          <Notification unread>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
