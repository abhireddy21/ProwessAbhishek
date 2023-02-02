import './css/header.css'
function Header(){
    return(
        <div className="nav-main">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">HeroViredDeveops</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="nav-right">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/"><i className="icons" class="fa-solid fa-house"></i>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/users"><i className="icons" class="fa-solid fa-users"></i>Users</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/scoreboard"><i className="icons" class="fa-solid fa-chart-line"></i>Scoreboard</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/challenges"><i className="icons" class="fa-solid fa-person-digging"></i>Challenges</a>
              </li>
              <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             <i className="icons" class="fa-solid fa-gear"></i>Options
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#"><i className="icons" class="fa-solid fa-user"></i>Profile</a></li>
                  <li><a class="dropdown-item" href="/register"><i className="icons" class="fa-solid fa-user-plus"></i>Register</a></li>
                  <li><a class="dropdown-item" href="/login"><i className="icons" class="fa-solid fa-right-to-bracket"></i>Login</a></li>
                </ul>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </nav>
    </div>
    );
}
export default Header