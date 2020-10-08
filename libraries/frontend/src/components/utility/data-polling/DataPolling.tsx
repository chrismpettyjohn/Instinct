import { useContext, useEffect } from 'react';
import { configService, sessionService } from 'services';
import { configContext, healthContext, sessionContext } from 'context';

const FIVE_MINUTE_IN_MS = 300000000;

export function DataPolling() {
  const { setConfig } = useContext(configContext);
  const { setHealth } = useContext(healthContext);
  const { setUser } = useContext(sessionContext);

  async function refresh(): Promise<void> {
    const [user, config, health] = await Promise.all([
      sessionService.init(),
      configService.getConfig(),
      configService.getHealth(),
    ]);

    setUser(user);
    setConfig(config);
    setHealth(health);
  }

  useEffect(() => {
    setInterval(refresh, FIVE_MINUTE_IN_MS);
  }, []);

  return null;
}
