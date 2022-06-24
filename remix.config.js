/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: 'vercel',
  // When running locally in development mode, we use the built in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  ignoredRouteFiles: ['**/.*'],
  serverDependenciesToBundle: [
    'character-entities',
    'zzfx',
    'decode-named-character-reference',
    /^mdast/,
    /^micromark/,
    /^unist/,
  ],
}
