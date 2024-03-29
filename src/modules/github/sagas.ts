import { getUserProfileAsync, GET_USER_PROFILE } from "./actions";
import { takeEvery } from "redux-saga/effects";
import { getUserProfile } from "../../api/github";
import createAsyncSaga from "../../lib/createAsyncSaga";

// function* getUserProfileSaga(
//   action: ReturnType<typeof getUserProfileAsync.request>
// ) {
//   try {
//     const userProfile: GithubProfile = yield call(
//       getUserProfile,
//       action.payload
//     );
//     yield put(getUserProfileAsync.success(userProfile));
//   } catch (error) {
//     yield put(getUserProfileAsync.failure(error));
//   }
// }

const getUserProfileSaga = createAsyncSaga(getUserProfileAsync, getUserProfile);

export function* githubSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}
