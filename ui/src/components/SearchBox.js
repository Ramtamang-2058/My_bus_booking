import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from '@mui/lab/DatePicker';

const LocationOptions=[
  'Achham',
  'Arghakhanchi',
  'Baglung',
  'Baitadi',
  'Bajhang',
  'Bajura',
  'Banke',
  'Bara',
  'Bardiya',
  'Bhaktapur',
  'Bhojpur',
  'Chitwan',
  'Dadeldhura',
  'Dailekh',
  'Dang deukhuri',
  'Darchula',
  'Dhading',
  'Dhankuta',
  'Dhanusa',
  'Dholkha',
  'Dolpa',
  'Doti',
  'Gorkha',
  'Gulmi',
  'Humla',
  'Ilam',
  'Jajarkot',
  'Jhapa',
  'Jumla',
  'Kailali',
  'Kalikot',
  'Kanchanpur',
  'Kapilvastu',
  'Kaski',
  'Kathmandu',
  'Kavrepalanchok',
  'Khotang',
  'Lalitpur',
  'Lamjung',
  'Mahottari',
  'Makwanpur',
  'Manang',
  'Morang',
  'Mugu',
  'Mustang',
  'Myagdi',
  'Nawalparasi',
  'Nuwakot',
  'Okhaldhunga',
  'Palpa',
  'Panchthar',
  'Parbat',
  'Parsa',
  'Pyuthan',
  'Ramechhap',
  'Rasuwa',
  'Rautahat',
  'Rolpa',
  'Rukum',
  'Rupandehi',
  'Salyan',
  'Sankhuwasabha',
  'Saptari',
  'Sarlahi',
  'Sindhuli',
  'Sindhupalchok',
  'Siraha',
  'Solukhumbu',
  'Sunsari',
  'Surkhet',
  'Syangja',
  'Tanahu',
  'Taplejung',
  'Terhathum',
  'Udayapur'
]
export default function SearchBox() {
  const navigate = useNavigate();
  const [destination, setDestination] = React.useState(LocationOptions[0]);
  const [inputdestination, setInputDestination] = React.useState('');
  const [departure, setDeparture] = React.useState(LocationOptions[10]);
  const [inputdeparture, setInputDeparture] = React.useState('');
  const [date, setDate] = React.useState('2022-01-01');
  
  const onSubmit = (e) => {
    e.preventDefault();
      if (inputdestination != null && inputdeparture != null) {
        let finaldeparture = inputdeparture.toLowerCase();
        let finaldestination = inputdestination.toLowerCase();
        var start = new Date(date);
        let year = start.getFullYear()
        let month = start.getMonth()
        let day = start.getDate()

        function checkMonth() {
          if (month === 0) {
            month = '01'
          }
          if (month === 1) {
            month = '02'
          }
          if (month === 2) {
            month = '03'
          }
          if (month === 3) {
            month = '04'
          }
          if (month === 4) {
            month = '05'
          }
          if (month === 5) {
            month = '06'
          }
          if (month === 6) {
            month = '07'
          }
          if (month === 7) {
            month = '08'
          }
          if (month === 8) {
            month = '09'
          }
          if (month === 9) {
            month = '10'
          }
          if (month === 10) {
            month = '11'
          }
          if (month === 11) {
            month = '12'
          }
        }

        function checkDay() {
          if (day === 1) {
            day = '01'
          }
          if (day === 2) {
            day = '01'
          }
          if (day === 2) {
            day = '02'
          }
          if (day === 3) {
            day = '03'
          }
          if (day === 4) {
            day = '04'
          }
          if (day === 5) {
            day = '05'
          }
          if (day === 6) {
            day = '06'
          }
          if (day === 7) {
            day = '07'
          }
          if (day === 8) {
            day = '08'
          }
          if (day === 9) {
            day = '09'
          }
        }
        checkDay();
        checkMonth();
       let finaldate = year + '-' + month + '-' + day;
       console.log(finaldate);

        navigate('/result/' + finaldeparture + '/' + finaldestination+ '/' + finaldate);
      };
  };
  return (
  
    <div className = 'list-group d-flex justify-content-center responsive' id = "search-box" >
        <div className = 'list-group d-flex justify-content-between align-items-center search-comp' >
          <h1>Where will you go next?</h1>
        </div>  
        <div className = 'list-group d-flex justify-content-between align-items-center search-comp' >
          <Autocomplete
            value={departure}
            onChange={(event, newDepartureValue) => {
                console.log(newDepartureValue);
              setDeparture(newDepartureValue);
            }}
            inputdeparture={inputdeparture}
            onInputChange={(event, newInputDepartureValue) => {
              setInputDeparture(newInputDepartureValue);
            }}
            id="search-box-from"
            options={LocationOptions}
            sx = {
              {
                width: 300
              }
            }
            renderInput={(params) => <TextField {...params} label="From" />}
          />
        </div>
        <div className = 'list-group d-flex justify-content-between align-items-center search-comp' >
          <Autocomplete
            value={destination}
            onChange={(event, newDestinationValue) => {
                console.log(newDestinationValue);
              setDestination(newDestinationValue);
            }}
            inputdestination={inputdestination}
            onInputChange={(event, newInputDestinationValue) => {
              setInputDestination(newInputDestinationValue);
            }}
            id="search-box-destination"
            options={LocationOptions}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Destination" />}
          />
      </div>
      < div className = 'list-group d-flex justify-content-between align-items-center search-comp' >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            disablePast
            label="Departure Date"
            openTo="year"
            views={['year', 'month', 'day']}
            value={date}
            onChange={(newDate) => {
              setDate(newDate);
              console.log(newDate);
            }}
            renderInput = {
                (params) => < TextField {
                  ...params
                }
                sx = {
                  {
                    width: 300
                  }
                }
                />}
          />
      </LocalizationProvider>
      </div>
      <div className = 'list-group d-flex justify-content-between align-items-center search-comp' >
        <Button
          variant=""
          className="btn btn-danger"
          type="submit"
          onClick={onSubmit}
          size="lg"
        >
          Search Bus
        </Button>
      </div>
    </div>
    
  );
}
