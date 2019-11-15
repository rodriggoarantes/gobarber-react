import Reactotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    // .use(reactotronRedux())
    // .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
