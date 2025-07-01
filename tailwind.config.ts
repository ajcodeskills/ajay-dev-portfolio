import preset from '@codekaro/dev-ui/theme/preset';
import type { Config } from 'tailwindcss';
export default {
  presets: [preset],
  content: ['./src/**/*.{js,jsx,ts,tsx}', ...preset.content],
} as Config;
