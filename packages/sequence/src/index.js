// @flow

export type StartInput = {|
  path: string,
  data: ?string,
  map: ?{},
|}[]

export type StartPluginArg = {
  input: StartInput,
  taskName: string,
  [string]: any,
}

export type StartPlugin = (StartPluginArg) => Promise<StartInput> | StartInput

export type StartMiddleware = (StartPlugin) => (StartPluginArg) => Promise<StartInput> | StartInput

const sequence = (...middlewares: StartMiddleware[]) => (...plugins: StartPlugin[]) => ({
  input = [],
  taskName,
}: StartPluginArg) =>
  plugins.reduce(async (result, plugin) => {
    const enhancedPlugin = middlewares.reduce((a, b) => b(a), plugin)

    return enhancedPlugin({
      input: await result,
      taskName,
    })
  }, input)

export default sequence
