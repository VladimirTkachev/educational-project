import type { Preview } from "@storybook/react";
import 'loki/configure-react'

import {
  StyleDecorator
} from './../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import {
  ThemeDecorator
} from './../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {
  RouterDecorator
} from './../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import {
  StoreDecorator
} from './../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme }  from '../../src/App/providers/ThemeProvider';


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    StoreDecorator({}),
  ]
};

export default preview;
