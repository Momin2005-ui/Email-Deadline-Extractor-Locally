import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function SelectDate() {
    return(
      <DropdownButton id="dropdown-basic-button" title="Select Date">
      <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Yesterday</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Last 7 Days</Dropdown.Item>
    </DropdownButton>
    );
}
export default SelectDate;