import { Decorator } from '@storybook/react/*';
import { Theme } from 'App/providers/ThemeProvider';

export const ThemeDecorator: (theme: Theme) => Decorator = (theme) => (Story) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);
