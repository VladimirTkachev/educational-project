import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import i18nTest from 'shared/config/i18n/i18nTest';
import { StoreProvider, StateSchema } from 'App/providers/StoreProvider';

interface ComponentRenderOptions {
  route?: string;
  initialState?: Partial<StateSchema>;
}

export const componentRender = (components: ReactNode, options: ComponentRenderOptions = {}) => {
  const { route = '/', initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nTest}>
          {components}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
};
