import {Slim} from 'slim-js'
import {tag, template} from 'slim-js/Decorators'

export const component = {
    "name": "profile-board"
} 

@tag(component.name)
@template('<h1> The Test is Working Properly.</h1>')
class ProfileBoard extends Slim {
  // your code here
  onCreated() {
      this.className = "profile-board"
  }
}