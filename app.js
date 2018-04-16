import {Slim} from 'slim-js'
import {tag, template} from 'slim-js/Decorators'
import router from './router/router'

const rx = router.content.component

@tag('app-root')
@template(`${rx}`)
class AppRoot extends Slim {
  // your code here
  onCreated() {
      this.id = "the-tag"
  }
}

