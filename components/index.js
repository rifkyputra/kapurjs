import {Slim} from 'slim-js'
import {tag, template} from 'slim-js/Decorators'

export const component = {
  "name": "app-home"
} 

@tag(component.name)
@template('<h1> Welcome To My App</h1>')
class AppHome extends Slim {
  // your code here
  onCreated() {
      this.className = "the-main-tag"
  }
}
