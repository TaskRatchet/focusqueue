export default function getEnvValue<T>(key: string, defaultValue?: T): T {
  try {
    const env = __ENV__;
    if (key in env) {
      return env[key] as T;
    } else if (defaultValue !== undefined) {
      return defaultValue;
    } else {
      throw new Error(`Value for key "${key}" not found in env`);
    }
  } catch (error) {
    const m = error instanceof Error ? error.message : JSON.stringify(error);
    throw new Error(`Error parsing env: ${m}`);
  }
}
