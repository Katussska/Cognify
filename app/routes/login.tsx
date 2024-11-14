import { ActionFunctionArgs, json, redirect } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { Auth } from '~/components/auth';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { useTranslation } from 'react-i18next';
import { loginSchema, LoginSchema } from '~/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { getValidatedFormData, useRemixForm } from 'remix-hook-form';
import i18next from '~/lib/i18next.server';
import { createSupabaseServerClient } from '~/lib/supabase.server';

export const action = async ({ request }: ActionFunctionArgs) => {
  let t = await i18next.getFixedT(request);

  const { errors, data: formData, receivedValues: defaultValues } =
    await getValidatedFormData<LoginSchema>(request, zodResolver(loginSchema(t)));

  if (errors || !formData) {
    return json({ errors, defaultValues });
  }

  const supabase = createSupabaseServerClient(request);
  const { error } = await supabase.client.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    return json({ error: error.message });
  }

  return redirect('/dashboard');
};

export default function Login() {
  const { t } = useTranslation();

  const form = useRemixForm<LoginSchema>({
    resolver: zodResolver(loginSchema(t)),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <Auth title={t('auth.login.title')}
          footer={<p><Link to="resetPassword">{t('auth.login.forgotPassword')}</Link>
          </p>}>
      <Form {...form}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('auth.login.email')}</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('auth.login.password')}</FormLabel>
              <FormControl>
                <Input placeholder="******" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{t('auth.login.submit')}</Button>
      </Form>
    </Auth>
  );
}