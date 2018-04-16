import {Slim} from 'slim-js'
import {tag, template} from 'slim-js/Decorators'

export const component = {
  "name": "register-new"
} 

const html = `
<div class="">
<form> 
  <span>Your Name : </span>
  <input name="" class="ui input">
  <span>password</span>
  <input name="" class="ui input">
  <button type="submit" class="ui button submit">Submit</button>
</form>
</div>
`

@tag(component.name)
@template(html)
class TestTag extends Slim {
  // your code here
  onCreated() {
      this.className = "the-tag"
  }
}