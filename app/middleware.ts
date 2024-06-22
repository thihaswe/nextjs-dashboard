import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextRequest } from 'next/server';
import { auth } from './auth';
import exp from 'constants';

//auth config
export default NextAuth(authConfig).auth;

//auth
// export default auth((req) => {
//   console.log(req.url);
// });

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
