'use strict';

import myData from './data.json';



const e = React.createElement;
const Form = ReactBootstrap.Form;

const sdg_labels = ["1. No Poverty","2. Zero Hunger","3. Good Health and Well-being","4. Quality Education","5. Gender Equality","6. Clean Water and Sanitation","7. Affordable and Clean Energy","8. Decent Work and Economic Growth","9. Industry, Innovation and Infrastructure","10. Reduced Inequality","11. Sustainable Cities and Communities","12. Responsible Consumption and Production","13. Climate Action","14. Life Below Water","15. Life on Land","16. Peace and Justice Strong Institutions","17. Partnerships to achieve the Goal"]

String.prototype.trunc = String.prototype.trunc ||
      function(n){
          return (this.length > n) ? this.substr(0, n-1) + '...' : this;
      };

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
      return (
        <div>
          <p class="filter_header">SDG</p>
            <Form>
              {sdg_labels.map(label => (
              <Form.Check 
                type='checkbox'
                id='default-checkbox'
                label={label.trunc(25)}
                defaultChecked
              />
              ))}
            </Form>
        </div> 
        ); 
  }
}

class List extends React.Component {
  render() {
    return(
        <table class="table"> 
          <tr>
            <th>Nominee</th>
            <th>Description</th>
            <th>Type</th>
            <th>SDGs</th>
            <th>License</th>
            <th>Past year of activity</th>
          </tr>
          <tr>
            <td>{nominees.name}</td>
            <td>{nominees.description}</td>
            <td>{nominees.type}</td>
            <td>{nominees.license}</td>
            <td>&nbsp;</td>
          </tr>
        </table>
      )
  }
}

const domContainer = document.querySelector('#filters');
ReactDOM.render(e(Filters), document.querySelector('#filters'));

ReactDOM.render(e(List), document.querySelector('#mytable'))
