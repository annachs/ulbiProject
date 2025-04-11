import { AppStore } from 'app/providers/StoreProvider/config/StateSchema';
import { useStore } from 'react-redux';

export const useAppStore = (): AppStore => useStore() as AppStore;
