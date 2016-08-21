import {Listener} from './Listener';
import {removeListener} from './removeListener';

/** Removes the given listener from all of the station meta it's attached to */
export function removeListenerFromAll(listener: Listener): void {

    const stationMetas = listener.stationMetas;

    if (!stationMetas) return;

    for (let stationMeta of stationMetas) {
        removeListener(stationMeta, listener, true);
    }
}
