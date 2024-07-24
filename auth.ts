import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import {user} from "@/app/lib/placeholder-data";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(6) })
            .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          // Vérifiez l'utilisateur défini
          if (email === user.email) {
            const passwordsMatch = await bcrypt.compare(password, await user.password);
            if (passwordsMatch) {
              return user;
            }
          }
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
