import fs from 'fs';
export interface Config {
  mqttUsername?: string;
  mqttPassword?: string;
  deviceType: string;
  deviceId: string;
}

export function loadConfig(): Config {
  const configPath = process.env.CONFIG_PATH || 'config/hm2mqtt/config.json';
  if (!fs.existsSync(configPath)) {
    throw new Error('Konfigurationdatei nicht gefunden: ${configPath}');
  }

const content = fs.readFileSync(configPath, 'utf-8');
return JSON.parse(content) as Config;
}
