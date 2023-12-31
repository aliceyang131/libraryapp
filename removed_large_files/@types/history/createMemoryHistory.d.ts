import { History, Location, LocationState } from './index';
import { getConfirmation } from './DOMUtils';

export type InitialEntry = string | Partial<Location>;

export interface MemoryHistoryBuildOptions {
    getUserConfirmation?: typeof getConfirmation | undefined;
    initialEntries?: InitialEntry[] | undefined;
    initialIndex?: number | undefined;
    keyLength?: number | undefined;
}

export interface MemoryHistory<HistoryLocationState = LocationState> extends History<HistoryLocationState> {
    index: number;
    entries: Location<HistoryLocationState>[];
    canGo(n: number): boolean;
}

export default function createMemoryHistory<S = LocationState>(options?: MemoryHistoryBuildOptions): MemoryHistory<S>;
