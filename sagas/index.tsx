import axios from 'axios';
import { all, call } from 'redux-saga/effects';
import post from './post';
import posts from './posts';
import user from './user';

axios.defaults.baseURL = process.env.SERVER_URL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
	yield all([call(user), call(post), call(posts)]);
}
