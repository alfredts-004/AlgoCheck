import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: [
    '/',
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/uploadthing'
  ],
  debug: true
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 