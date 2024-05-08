import { defineConfig, isDev } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial'
import * as dotenv from 'dotenv';
dotenv.config();

const devOnlyPlugins = [getStartedPlugin()]

const title = process.env.TITLE;
const projectId = process.env.PROJECT_ID;

export default defineConfig({
  name: 'default',
  title: title,
  projectId: projectId,
  dataset: 'production',

  plugins: [structureTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})

