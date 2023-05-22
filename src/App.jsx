import "materialize-css/dist/css/materialize.min.css"

import './App.css'

function App() {


  return (
   
    <div  className="app-container row">
      <div className="app-wrapper col s12">
        <div className="wrapper-page-1 row ">
          <h3>Professional Accounting Services</h3>
          <p>We offer a wide range of accounting services to help your business thrive. Our team of experts can handle everything from bookkeeping to tax preparatio</p>
        </div>
        <div className="wrapper-page-2 row">

          <div className="col s12 m4">
            <h4>Book keeping</h4>
            <span>We offer bookkeeping services to help you stay on top of your finances and manage your cash flow.</span>
          </div>

          <div className="col s12 m4">
            <h4>Payroll</h4>
            <span>
            Let us handle your payroll needs, from calculating employee salaries to processing tax forms
            </span>
          </div>
          <div className="col s12 m4">
            <h4>Tax Preparation</h4>
            <span>
            Our experienced team can prepare and file your tax returns, ensuring compliance with all regulations.
            </span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
