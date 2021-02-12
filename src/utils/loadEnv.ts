export const loadEnv = (env: string) => {
  const v = process.env[env];
  if (!v) {
    throw new Error(`${env} not set`);
  }
  return v;
};
