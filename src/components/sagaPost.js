import { takeLatest, put, call} from 'redux-saga/effects'; 
import { loadPostSuccess, loadPostFail } from './actions/actions'; 
import { loadPostApi } from '../api/api';

export function* onLoadPostStartAsync() {
    try {
        const response = yield call(loadPostApi, "posts");
        yield put(loadPostSuccess(response.data))
    } catch (error) {
        yield put(loadPostFail(error));
    }
}
export function* onLoadPostStart(){
    yield takeLatest("LOAD_POST_START", onLoadPostStartAsync)
}