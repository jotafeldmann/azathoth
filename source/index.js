import { get } from 'cli-parameter-getter'
import cliInterface from './app/interfaces/cli'
import httpInterface from './app/interfaces/http'

const { mode } = get()

if (mode === 'http') {
    httpInterface.init({ port: 3000 })
}
else {
    cliInterface.init()
}
