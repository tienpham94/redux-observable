// import {Observable} from 'rxjs'
import {combineEpics} from 'redux-observable'
import {LOAD_STORIES} from '../actions'

// import individual rxjs operators
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/ignoreElements';
import 'rxjs/add/operator/filter';

function loadStoriesEpic(action$){
  return action$.ofType(LOAD_STORIES)
    .filter(action => action.type ===LOAD_STORIES)
    .do(action => console.log(action))
    .ignoreElements()
}

export const rootEpic = combineEpics(loadStoriesEpic)