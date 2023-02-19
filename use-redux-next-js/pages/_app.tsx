import { wrapper } from '@/store/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { Provider } from 'react-redux';

const MyApp: FC<AppProps> = ({ Component, ...rest}: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}

export default MyApp;
