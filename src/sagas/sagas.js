import { call, put, takeLatest } from "redux-saga"; 
import { REQUEST_API_DATA, receiveApiData } from "../components/actions/actions"; 
import { fetchData } from "../api/api";

function* getApiData(){
    try {
        const data = yield call(fetchData);
        yield put(receiveApiData(data));
    } catch (e){
        console.log(e);
    }
} 

export default function* mySaga() {
    yield takeLatest(REQUEST_API_DATA, getApiData);
}