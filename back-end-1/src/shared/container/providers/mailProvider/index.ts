import { container } from 'tsyringe';

import mailconfig from '@config/email';

import IMailProvider from './models/IMailProvider';

import EtherealMailProvider from './implementation/EtherealMailProvider';
import SESMailProvider from './implementation/SESMailProvider';

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailconfig.driver],
);
