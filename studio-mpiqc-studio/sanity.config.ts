import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from '@sanity/dashboard'

export default defineConfig([
  {
    name: 'default',
    title: 'mpiqc-studio-production',

    projectId: process.env.SANITY_STUDIO_TITLE_PROJECT_ID!,
    dataset: 'production',

    basePath: '/production',
    subtitle: 'production',

    plugins: [
      structureTool(),
      visionTool(),
      dashboardTool({
        widgets: [sanityTutorialsWidget(), projectInfoWidget(), projectUsersWidget()],
      }),
    ],

    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'staging',
    title: 'mpiqc-studio-staging',

    projectId: process.env.SANITY_STUDIO_TITLE_PROJECT_ID!,
    dataset: 'staging',

    basePath: '/staging',
    subtitle: 'staging',

    plugins: [
      structureTool(),
      visionTool(),
      dashboardTool({
        widgets: [sanityTutorialsWidget(), projectInfoWidget(), projectUsersWidget()],
      }),
    ],

    schema: {
      types: schemaTypes,
    },
  },
])
