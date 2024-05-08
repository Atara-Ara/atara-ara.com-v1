import { defineCliConfig } from 'sanity/cli'
import * as dotenv from 'dotenv';
dotenv.config();

const projectId = process.env.PROJECT_ID

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: 'production'
  }
})
