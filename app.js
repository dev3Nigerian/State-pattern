// STATE PATTERN- MINI PROJECT
class PageState {
  constructor() {
    let currState = new homeState(this);

    this.init = () => {
      this.change(new homeState);
    };

    this.change = (state) => {
      currState = state;
    };
  }
}

// Home State
const homeState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
    <h1 class="display-3">Hello, world!</h1>
    <p class="lead">This is a Simple hero unit, a simple jumbotron-style component for calling extra attention to fautured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the large container.</p>
    <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
  `;
};

// About State
const aboutState = function(page){
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
  <p>This is the About Page</p>
  `;
};

// Contact State
const contactState = function(page){
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
  <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  `;
};

// Instantiate 
const page = new PageState()

// Init the first state
page.init()

// UI vars
const home = document.getElementById('home'),
      features = document.getElementById('features');
      pricing = document.getElementById('pricing');

// Home
home.addEventListener('click', (e) => {
  page.change(new homeState);
})
// Features
features.addEventListener('click', (e) => {
  page.change(new aboutState);
})
// Pricing
pricing.addEventListener('click', (e) => {
  page.change(new contactState);
})

