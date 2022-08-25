# Create Next.js × Typescript × Storybook × React-testing-library

## Install
Create Nextjs project
~~~
yarn create next-app --typescript
yarn add @reduxjs/toolkit react-redux
yarn add -D @types/react-redux
yarn add @tanstack/react-query
yarn add @tanstack/react-query-devtools
~~~

Server state data management ---> react-query
Client state management ---> redux(redux toolkit)

Add storybook
~~~
npx sb init
~~~

Add test
~~~
yarn add jest @testing-library/react @types/jest @testing-library/jest-dom @testing-library/dom babel-jest @testing-library/user-event jest-css-modules --dev
yarn add jest-environment-jsdom --dev
yarn add next-page-tester --dev
yarn add msw --dev
~~~

If you use css module, you must add settings in .storybook/main.js and install sass.

## Change settings
Please add this code in eslintrc.json
~~~
"extends": [
  ....
  "plugin:storybook/recommended",  // Add
]
~~~

touch .babelrc
~~~
{
    "presets": ["next/babel"]
}
~~~

touch jest.config.js
~~~
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}
module.exports = createJestConfig(customJestConfig)
~~~

## Mock
If you must make api document, you should use /swagger/openapi.yaml.
Swagger Editor generate stub api.
It's the mock.

Install Swagger Editor
https://github.com/swagger-api/swagger-editor
~~~
git clone https://github.com/swagger-api/swagger-editor.git
~~~
or
~~~
https://github.com/swagger-api/swagger-editor
docker run -d -p 80:8080 swaggerapi/swagger-editor
~~~

copy and paste openapi.yaml
Generate Server → nodejs-server
The generate folder is used mock.

## command
Please read scripts in package.json!
yarn dev
yarn build
yarn storybook
yarn test

## document
about storybook
https://qiita.com/suzu1997/items/2afcfc2d13f4bdd12841

about tests
https://zenn.dev/panyoriokome/scraps/78aecf55ba5a38
https://qiita.com/ossan-engineer/items/4757d7457fafd44d2d2f

about GA4
https://zenn.dev/kcabo/scraps/9c4bfc65720554
