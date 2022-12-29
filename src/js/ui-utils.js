export function writeNavigation() {
    document.getElementById('navigation').innerHTML = `
    <div class="menu"> 
      <input type="checkbox" id="check">
      <div class="logo"><a href="#">Collectway</a></div>
      <ul>
      <label class="btn cancel" for="check"><i class="fas fa-times"></i></label>
      <li><a href="index.html">Home</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="login-signup.html">Login</a></li>
      </ul>
      <label for="check" class="btn bars"><i class="fas fa-bars"></i></label>
    </div>
    `
  };

export function messageDialog(){
  document.getElementById('messageDialog').innerHTML = `
  <div id="myModal" class="modal">
      <!-- Modal content -->
      <div id="msgContent" class="modal-content">          
        <span class="close">&times;</span>
        <p></p>         
      </div>
  </div>
  `
};