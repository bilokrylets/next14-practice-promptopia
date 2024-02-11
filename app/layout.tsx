import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.scss';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const metadata = {
  title: 'next14-practice',
  description: 'next14-practice',
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body>
        <Provider session={}>
          <div className='main'>
            <div className='gradient' />
          </div>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};
export default RootLayout;
