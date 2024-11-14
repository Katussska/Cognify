import { useChangeLanguage } from 'remix-i18next/react';
import { useTranslation } from 'react-i18next';
import i18next from '~/lib/i18next.server';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from 'remix-themes';
import { themeSessionResolver } from './routes/sessions.server';

import globalStylesheetUrl from '~/tailwind.css?url';
import { clsx } from 'clsx';

export async function loader({ request }: LoaderFunctionArgs) {
  let locale = await i18next.getLocale(request);
  const { getTheme } = await themeSessionResolver(request);
  return { locale, theme: getTheme() };
}

export let handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: 'common',
};

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: globalStylesheetUrl }];
};

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

export function App() {
  // Get the locale from the loader
  let data = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  let { i18n } = useTranslation();

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(data.locale);

  return (
    <html lang={data.locale} dir={i18n.dir()} className={clsx(theme)}>
    <head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      {/* All `meta` exports on all routes will render here */}
      <Meta />
      <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />

      {/* All `link` exports on all routes will render here */}
      <Links />
    </head>
    <body className="min-h-dvh">


    <Outlet />{/* Child routes render here */}


    {/* Manages scroll position for client-side transitions */}
    {/* If you use a nonce-based content security policy for scripts, you must provide the `nonce` prop. Otherwise, omit the nonce prop as shown here. */}
    <ScrollRestoration />

    {/* Script tags go here */}
    {/* If you use a nonce-based content security policy for scripts, you must provide the `nonce` prop. Otherwise, omit the nonce prop as shown here. */}
    <Scripts />
    </body>
    </html>
  );
}