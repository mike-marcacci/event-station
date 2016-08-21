import {MatchingListener} from './MatchingListener';
import {matchListener} from './matchListener';

export function matchListeners(matchingListener: MatchingListener, attachedListeners: MatchingListener[], exactMatch?: boolean): boolean {

    const count = attachedListeners.length;

    if (count < 1) return false;

    for (let attachedListener of attachedListeners) {

        if (matchListener(matchingListener, attachedListener, exactMatch)) {
            return true;
        }
    }

    return false;
}
