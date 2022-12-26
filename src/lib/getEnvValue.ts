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
    if (error instanceof Error) {
      throw new Error(`Error parsing env: ${error.message}`);
    } else {
      throw new Error(`Error parsing env`);
    }
  }
}
