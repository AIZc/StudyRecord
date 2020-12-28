import { api } from '@/scripts/api'

const install = (Vue) => {
    const plugins = {
        $api: api
    }
    Object.assign(Vue.prototype, plugins)
}

export default { install }