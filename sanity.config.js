'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schemaTypes} from './src/sanity/schemaTypes'
import {frFRLocale} from '@sanity/locale-fr-fr'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
 
  plugins: [structureTool(), visionTool(),  frFRLocale(),],

  schema: {
    types: schemaTypes,
  },
})
