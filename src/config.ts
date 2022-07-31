export const optionDefinitions = [
  {
    name: 'dir',
    description: 'The directory in which your project is created',
    type: String,
    defaultOption: true,
    defaultValue: undefined,
  },
  {
    name: 'help',
    alias: 'h',
    description: 'Shows this help screen',
    type: Boolean,
    defaultValue: false,
  },
  {
    name: 'packagemanager',
    alias: 'p',
    description: 'Which package manager to use',
    typeLabel: 'pnpm | {underline npm} | yarn | bun',
    type: (pm: string) =>
      ['pnpm', 'npm', 'yarn', 'bun'].includes(pm) ? pm : 'npm',
    defaultValue: 'npm',
  },
  {
    name: 'typescript',
    alias: 'T',
    description: 'Include typescript in the project',
    typeLabel: '{underline true} | false',
    type: (T: string) => !(T === 'false'),
    defaultValue: 'true',
  },
  {
    name: 'lint',
    alias: 'l',
    description: 'Include eslint and prettier in the project',
    typeLabel: 'true | {underline false}',
    type: Boolean,
    defaultValue: false,
  },
  {
    name: 'test',
    alias: 't',
    type: Boolean,
    defaultValue: false,
    description: 'Feature Not Implemented',
  },
  {
    name: 'netlify',
    alias: 'n',
    type: Boolean,
    defaultValue: false,
    description: 'Feature Not Implemented',
  },
];