export default function getEnvValue<T extends unknown>(
  key: string,
  defaultValue?: T
): T {
  try {
    const env = JSON.parse(__ENV__);
    if (key in env) {
      return env[key] as T;
    } else if (defaultValue !== undefined) {
      return defaultValue;
    } else {
      throw new Error(`Value for key "${key}" not found in env`);
    }
  } catch (error) {
    throw new Error(`Error parsing env: ${error.message}`);
  }
}
