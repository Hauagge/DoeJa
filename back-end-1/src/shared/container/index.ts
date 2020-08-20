import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IDonationRepository from '@modules/donations/repositories/IDonationRepository';
import DonationRepository from '@modules/donations/Infra/typeorm/repositories/DonationRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/Infra/typeorm/repositories/UsersRepository';

import IUsersTokensRepository from '@modules/users/repositories/IUSersTokenRepository';
import UserTokensRepository from '@modules/users/Infra/typeorm/repositories/UserTokensRepository';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationRepositories';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
container.registerSingleton<IUsersTokensRepository>(
  'UserTokenRepository',
  UserTokensRepository,
);

container.registerSingleton<INotificationsRepository>(
  'NotificationsRepository',
  NotificationsRepository,
);

container.registerSingleton<IDonationRepository>(
  'DonationRepository',
  DonationRepository,
);
