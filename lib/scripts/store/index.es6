import development from './development'
import production from './production'

const Environment = process.env.NODE_ENV
const store = Environment === 'production' ? production : development

export default store
