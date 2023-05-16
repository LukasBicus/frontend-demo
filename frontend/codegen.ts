import { CodegenConfig } from '@graphql-codegen/cli'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config({ path: '.env.local' })

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.BACKEND_URL,
  ignoreNoDocuments: true,
  documents: ['components/**/graphql.ts', 'graphql.ts'],
  generates: {
    './__generated__/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        withMutationFn: true,
        namingConvention: 'change-case#pascalCase',
        addTypename: true,
        avoidOptionals: true,
        preResolveTypes: true,
        apolloReactCommonImportFrom: '@apollo/client',
        apolloReactHooksImportFrom: '@apollo/client',
      },
    },
  },
}

export default config
