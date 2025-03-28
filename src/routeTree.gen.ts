/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ServicesImport } from './routes/services'
import { Route as ProductsImport } from './routes/products'
import { Route as DecorImport } from './routes/decor'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ServicesRoute = ServicesImport.update({
  id: '/services',
  path: '/services',
  getParentRoute: () => rootRoute,
} as any)

const ProductsRoute = ProductsImport.update({
  id: '/products',
  path: '/products',
  getParentRoute: () => rootRoute,
} as any)

const DecorRoute = DecorImport.update({
  id: '/decor',
  path: '/decor',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/decor': {
      id: '/decor'
      path: '/decor'
      fullPath: '/decor'
      preLoaderRoute: typeof DecorImport
      parentRoute: typeof rootRoute
    }
    '/products': {
      id: '/products'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof ProductsImport
      parentRoute: typeof rootRoute
    }
    '/services': {
      id: '/services'
      path: '/services'
      fullPath: '/services'
      preLoaderRoute: typeof ServicesImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/decor': typeof DecorRoute
  '/products': typeof ProductsRoute
  '/services': typeof ServicesRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/decor': typeof DecorRoute
  '/products': typeof ProductsRoute
  '/services': typeof ServicesRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/decor': typeof DecorRoute
  '/products': typeof ProductsRoute
  '/services': typeof ServicesRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/decor' | '/products' | '/services'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/decor' | '/products' | '/services'
  id: '__root__' | '/' | '/about' | '/decor' | '/products' | '/services'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  DecorRoute: typeof DecorRoute
  ProductsRoute: typeof ProductsRoute
  ServicesRoute: typeof ServicesRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  DecorRoute: DecorRoute,
  ProductsRoute: ProductsRoute,
  ServicesRoute: ServicesRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/about",
        "/decor",
        "/products",
        "/services"
      ]
    },
    "/": {
      "filePath": "index.jsx"
    },
    "/about": {
      "filePath": "about.jsx"
    },
    "/decor": {
      "filePath": "decor.jsx"
    },
    "/products": {
      "filePath": "products.jsx"
    },
    "/services": {
      "filePath": "services.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
