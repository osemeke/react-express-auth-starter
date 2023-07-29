import { Navigate } from "react-router-dom"
import { Link } from "react-router-dom";

const Dashboard = ({ roles = [] }) => {

    const role = JSON.parse(localStorage.getItem("role"));

    return !roles.length || roles.includes(role)
      ? (<div>
        
        <div>
  <div className="az-header">
    <div className="container">
      <div className="az-header-left">
        <Link to="index.html" className="az-logo"><span /> azia</Link>
        <Link to id="azMenuShow" className="az-header-menu-icon d-lg-none"><span /></Link>
      </div>{/* az-header-left */}
      <div className="az-header-menu">
        <div className="az-header-menu-header">
          <Link to="index.html" className="az-logo"><span /> azia</Link>
          <Link to className="close">×</Link>
        </div>{/* az-header-menu-header */}
        <ul className="nav">
          <li className="nav-item">
            <Link to="index.html" className="nav-link"><i className="typcn typcn-chart-area-outline" /> Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to className="nav-link with-sub"><i className="typcn typcn-document" /> Pages</Link>
            <nav className="az-menu-sub">
              <Link to="page-signin.html" className="nav-link">Sign In</Link>
              <Link to="page-signup.html" className="nav-link">Sign Up</Link>
            </nav>
          </li>
          <li className="nav-item active">
            <Link to="chart-chartjs.html" className="nav-link"><i className="typcn typcn-chart-bar-outline" /> Charts</Link>
          </li>
          <li className="nav-item">
            <Link to="form-elements.html" className="nav-link"><i className="typcn typcn-chart-bar-outline" /> Forms</Link>
          </li>
          <li className="nav-item">
            <Link to className="nav-link with-sub"><i className="typcn typcn-book" /> Components</Link>
            <div className="az-menu-sub">
              <div className="container">
                <div>
                  <nav className="nav">
                    <Link to="elem-buttons.html" className="nav-link">Buttons</Link>
                    <Link to="elem-dropdown.html" className="nav-link">Dropdown</Link>
                    <Link to="elem-icons.html" className="nav-link">Icons</Link>
                    <Link to="table-basic.html" className="nav-link">Table</Link>
                  </nav>
                </div>
              </div>{/* container */}
            </div>
          </li>
        </ul>
      </div>{/* az-header-menu */}
      <div className="az-header-right">
        <Link to="https://www.bootstrapdash.com/demo/azia-free/docs/documentation.html" target="_blank" className="az-header-search-link"><i className="far fa-file-alt" /></Link>
        <Link to className="az-header-search-link"><i className="fas fa-search" /></Link>
        <div className="az-header-message">
          <Link to="#"><i className="typcn typcn-messages" /></Link>
        </div>{/* az-header-message */}
        <div className="dropdown az-header-notification">
          <Link to className="new"><i className="typcn typcn-bell" /></Link>
          <div className="dropdown-menu">
            <div className="az-dropdown-header mg-b-20 d-sm-none">
              <Link to className="az-header-arrow"><i className="icon ion-md-arrow-back" /></Link>
            </div>
            <h6 className="az-notification-title">Notifications</h6>
            <p className="az-notification-text">You have 2 unread notification</p>
            <div className="az-notification-list">
              <div className="media new">
                <div className="az-img-user"><img src="template/img/faces/face2.jpg" alt /></div>
                <div className="media-body">
                  <p>Congratulate <strong>Socrates Itumay</strong> for work anniversaries</p>
                  <span>Mar 15 12:32pm</span>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media new">
                <div className="az-img-user online"><img src="template/img/faces/face3.jpg" alt /></div>
                <div className="media-body">
                  <p><strong>Joyce Chua</strong> just created a new blog post</p>
                  <span>Mar 13 04:16am</span>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media">
                <div className="az-img-user"><img src="template/img/faces/face4.jpg" alt /></div>
                <div className="media-body">
                  <p><strong>Althea Cabardo</strong> just created a new blog post</p>
                  <span>Mar 13 02:56am</span>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media">
                <div className="az-img-user"><img src="template/img/faces/face5.jpg" alt /></div>
                <div className="media-body">
                  <p><strong>Adrian Monino</strong> added new comment on your photo</p>
                  <span>Mar 12 10:40pm</span>
                </div>{/* media-body */}
              </div>{/* media */}
            </div>{/* az-notification-list */}
            <div className="dropdown-footer"><Link to>View All Notifications</Link></div>
          </div>{/* dropdown-menu */}
        </div>{/* az-header-notification */}
        <div className="dropdown az-profile-menu">
          <Link to className="az-img-user"><img src="template/img/faces/face1.jpg" alt /></Link>
          <div className="dropdown-menu">
            <div className="az-dropdown-header d-sm-none">
              <Link to className="az-header-arrow"><i className="icon ion-md-arrow-back" /></Link>
            </div>
            <div className="az-header-profile">
              <div className="az-img-user">
                <img src="template/img/faces/face1.jpg" alt />
              </div>{/* az-img-user */}
              <h6>Aziana Pechon</h6>
              <span>Premium Member</span>
            </div>{/* az-header-profile */}
            <Link to className="dropdown-item"><i className="typcn typcn-user-outline" /> My Profile</Link>
            <Link to className="dropdown-item"><i className="typcn typcn-edit" /> Edit Profile</Link>
            <Link to className="dropdown-item"><i className="typcn typcn-time" /> Activity Logs</Link>
            <Link to className="dropdown-item"><i className="typcn typcn-cog-outline" /> Account Settings</Link>
            <Link to="page-signin.html" className="dropdown-item"><i className="typcn typcn-power-outline" /> Sign Out</Link>
          </div>{/* dropdown-menu */}
        </div>
      </div>{/* az-header-right */}
    </div>{/* container */}
  </div>{/* az-header */}
  <div className="az-content pd-y-20 pd-lg-y-30 pd-xl-y-40">
    <div className="container">
      <div className="az-content-left az-content-left-components">
        <div className="component-item">
          <label>UI Elements</label>
          <nav className="nav flex-column">
            <Link to="elem-buttons.html" className="nav-link">Buttons</Link>
            <Link to="elem-dropdown.html" className="nav-link">Dropdown</Link>
            <Link to="elem-icons.html" className="nav-link">Icons</Link>
          </nav>
          <label>Forms</label>
          <nav className="nav flex-column">
            <Link to="form-elements.html" className="nav-link">Form Elements</Link>
          </nav>
          <label>Charts</label>
          <nav className="nav flex-column">
            <Link to="chart-chartjs.html" className="nav-link active">ChartJS</Link>
          </nav>
          <label>Tables</label>
          <nav className="nav flex-column">
            <Link to="table-basic.html" className="nav-link">Basic Tables</Link>
          </nav>
        </div>{/* component-item */}
      </div>{/* az-content-left */}
      <div className="az-content-body pd-lg-l-40 d-flex flex-column">
        <div className="az-content-breadcrumb">
          <span>Components</span>
          <span>Charts</span>
          <span>ChartJS Charts</span>
        </div>
        <h2 className="az-content-title">ChartJS Charts</h2>
        <div className="az-content-label mg-b-5">Bar Chart</div>
        <p className="mg-b-20">Below is the basic bar chart example.</p>
        <div className="row row-sm">
          <div className="col-sm-8 col-md-6 col-xl-4">
            <div className="az-content-label az-content-label-sm mg-b-15">Solid Color</div>
            <div className="ht-200 ht-lg-250"><canvas id="chartBar1" /></div>
          </div>{/* col-6 */}
          <div className="col-sm-8 col-md-6 col-xl-4 mg-t-20 mg-md-t-0">
            <div className="az-content-label az-content-label-sm mg-b-15">With Transparency</div>
            <div className="ht-200 ht-lg-250"><canvas id="chartBar2" /></div>
          </div>{/* col-6 */}
          <div className="col-sm-8 col-md-6 col-xl-4 mg-t-20 mg-xl-t-0">
            <div className="az-content-label az-content-label-sm mg-b-15">Using Gradient Color</div>
            <div className="ht-200 ht-lg-250"><canvas id="chartBar3" /></div>
          </div>{/* col-6 */}
        </div>{/* row */}
        <hr className="mg-y-30" />
        <div className="az-content-label mg-b-5">Horizontal Bar Chart</div>
        <p className="mg-b-20">Below is the horizontal bar chart example.</p>
        <div className="row row-sm">
          <div className="col-sm-8 col-md-6">
            <div className="chartjs-wrapper-demo"><canvas id="chartBar4" /></div>
          </div>{/* col-6 */}
          <div className="col-sm-8 col-md-6 mg-t-20 mg-md-t-0">
            <div className="chartjs-wrapper-demo"><canvas id="chartBar5" /></div>
          </div>{/* col-6 */}
        </div>{/* row */}
        <hr className="mg-y-30" />
        <div className="az-content-label mg-b-5">Stacked Bar Chart</div>
        <p className="mg-b-20">Below are the vertical and horizontal bar chart example.</p>
        <div className="row row-sm">
          <div className="col-sm-8 col-md-6">
            <div className="chartjs-wrapper-demo"><canvas id="chartStacked1" /></div>
          </div>{/* col-6 */}
          <div className="col-sm-8 col-md-6 mg-t-20 mg-md-t-0">
            <div className="chartjs-wrapper-demo"><canvas id="chartStacked2" /></div>
          </div>{/* col-6 */}
        </div>{/* row */}
        <hr className="mg-y-30" />
        <div className="row row-sm">
          <div className="col-sm-8 col-md-6">
            <div className="az-content-label mg-b-5">Line Chart</div>
            <p className="mg-b-20">Below is the basic line chart example.</p>
            <div className="chartjs-wrapper-demo"><canvas id="chartLine1" /></div>
          </div>{/* col-6 */}
          <div className="col-sm-8 col-md-6 mg-t-20 mg-md-t-0">
            <div className="az-content-label mg-b-5">Area Chart</div>
            <p className="mg-b-20">Below is the basic area chart example.</p>
            <div className="chartjs-wrapper-demo"><canvas id="chartArea1" /></div>
          </div>{/* col-6 */}
        </div>{/* row */}
        <hr className="mg-y-30" />
        <div className="az-content-label mg-b-5">Pie &amp; Donut Chart</div>
        <p className="mg-b-20">Below are an example of data in a pie and donut chart.</p>
        <div className="d-md-flex">
          <div className="chartjs-wrapper-demo mg-b-20 mg-md-b-0 mg-md-r-30 mg-xl-r-40"><canvas id="chartPie" /></div>
          <div className="chartjs-wrapper-demo"><canvas id="chartDonut" /></div>
        </div>
        <div className="ht-40" />
        <div className="az-footer mg-t-auto">
          <div className="container">
            <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com 2020</span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <Link to="https://www.bootstrapdash.com/bootstrap-admin-template/" target="_blank">Bootstrap admin templates</Link> from Bootstrapdash.com</span>
          </div>{/* container */}
        </div>{/* az-footer */}
      </div>{/* az-content-body */}
    </div>{/* container */}
  </div>{/* az-content */}
</div>



<script src="template/lib/jquery/jquery.min.js"></script>
    <script src="template/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="template/lib/ionicons/ionicons.js"></script>
    <script src="template/lib/chart.js/Chart.bundle.min.js"></script>


    <script src="template/js/azia.js"></script>
    <script src="template/js/chart.chartjs.js"></script>
    <script src="template/js/jquery.cookie.js" type="text/javascript"></script>



      </div>)
      : <Navigate to="/unauthorized" replace />;
      
}

export default Dashboard;