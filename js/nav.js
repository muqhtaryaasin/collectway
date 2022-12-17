function writeNavigation() {
    document.write('<nav>');
    document.write('<div class="menu">');
    document.write('  <input type="checkbox" id="check">');
    document.write('  <div class="logo"><a href="#">CollectWay</a></div>');
    document.write('    <ul>');
    document.write('      <label class="btn cancel" for="check"><i class="fas fa-times"></i></label>');
    document.write('      <li><a href="index.html">Home</a></li>');
    document.write('      <li><a href="#">Contact</a></li>');
    document.write('     <li><a href="#">Pricing</a></li>');
    document.write('      <li><a href="login-signup.html">Login</a></li>');
    document.write('    </ul>');
    document.write('    <label for="check" class="btn bars"><i class="fas fa-bars"></i></label>');
    document.write('  </div>');
    document.write('</div>');
    document.write('</nav>');
  }

