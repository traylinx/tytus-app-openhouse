import type { AppBootEnv } from '@tytus/host-api';
import { OpenHouse } from './OpenHouse';

export default function bootOpenHouse(env: AppBootEnv) {
  const db = env.host.storage.current();
  void db.migrate('migrations/');
  return function OpenHouseApp() {
    return <OpenHouse host={env.host} />;
  };
}
