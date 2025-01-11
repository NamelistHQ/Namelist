/**
 * To add a new URL to the front end:
 * - add a URL function here
 * - add a scene to the enum in sceneTypes.ts
 * - add a scene configuration in scenes.ts
 * - add a route to scene mapping in scenes.ts
 * - and add a scene import in appScenes.ts
 */

export const urls = {
    absolute: (path = ''): string => window.location.origin + path,
    default: (): string => '/',
    login: (): string => '/login',

    // team urls
    dashboard: (): string => '/',
    contacts: (): string => '/contacts',
    contact: (contactId: string): string => `/contacts/${contactId}`,
}