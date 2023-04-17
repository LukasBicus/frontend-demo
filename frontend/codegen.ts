import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { CodegenConfig } from '@graphql-codegen/cli'

dotenv.config({ path: '.env.local' })

const config: CodegenConfig = {
  schema: process.env.BACKEND_URL,
  documents: ['components/**/graphql.tsx', 'components/**/graphql.ts'],
  generates: {
    './__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
