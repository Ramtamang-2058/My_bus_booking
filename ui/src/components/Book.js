import React, { useState, useEffect } from "react";
import { ButtonGroup,  ButtonToolbar,Button } from "react-bootstrap";
import API from "./API";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet'
import { useParams } from "react-router-dom";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import CSRFToken from "./csrftoken";
import { GiSteeringWheel, GiEntryDoor } from 'react-icons/gi'

const TITLE = 'Book Ticket';
const Book = () => {
  const [name, setName] = useState("");
  const [departureTime, setDepartureTime] = useState("06:00");
  const [arrivalTime, setArrivalTime] = useState("18:00");
  const [departureDate, setDepartureDate] = useState("");
  const [price, setPrice] = useState(400);
  const [vehicleID, setVehicleID] = useState("");
  const navigate = useNavigate();
  const [routes, setRoutes] = useState([]);
  const { username, id } = useParams();
  const [departureLocation, setDepartureLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [routeID, setRouteID] = useState(id);
  const [user, setUser] = useState(username);
  const [disable, setDisable] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState({});
  const realusername = localStorage.getItem("username");
  const [bookedSeat1, setBookedSeat1] = useState("");
  const [bookedSeat2, setBookedSeat2] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  let amount = price * selectedSeats.length;
  const style1={
    backgroundColor: 'green',
  }
  const clearstyle={}
  let [seat1, setSeat1] = useState(false);
  let [seat2, setSeat2] = useState(false);
  let [seat3, setSeat3] = useState(false);
  let [seat4, setSeat4] = useState(false);
  let [seat5, setSeat5] = useState(false);
  let [seat6, setSeat6] = useState(false);
  let [seat7, setSeat7] = useState(false);
  let [seat8, setSeat8] = useState(false);
  let [seat9, setSeat9] = useState(false);
  let [seat10, setSeat10] = useState(false);
  let [seat11, setSeat11] = useState(false);
  let [seat12, setSeat12] = useState(false);
  let [seat13, setSeat13] = useState(false);
  let [seat14, setSeat14] = useState(false);
  let [seat15, setSeat15] = useState(false);
  let [seat16, setSeat16] = useState(false);
  let [seat17, setSeat17] = useState(false);
  let [seat18, setSeat18] = useState(false);
  let [seat19, setSeat19] = useState(false);
  let [seat20, setSeat20] = useState(false);
  let [seat21, setSeat21] = useState(false);
  let [seat22, setSeat22] = useState(false);
  let [seat23, setSeat23] = useState(false);  
  let [seat24, setSeat24] = useState(false);
  let [seat25, setSeat25] = useState(false);
  let [seat26, setSeat26] = useState(false);
  let [seat27, setSeat27] = useState(false);
  let [seat28, setSeat28] = useState(false);
  let [seat29, setSeat29] = useState(false);
  let [seat30, setSeat30] = useState(false);
  
  const [selectStyle1, setSelectStyle1] = useState({});
  const [selectStyle2, setSelectStyle2] = useState({});
  const [selectStyle3, setSelectStyle3] = useState({});
  const [selectStyle4, setSelectStyle4] = useState({});
  const [selectStyle5, setSelectStyle5] = useState({});
  const [selectStyle6, setSelectStyle6] = useState({});
  const [selectStyle7, setSelectStyle7] = useState({});
  const [selectStyle8, setSelectStyle8] = useState({});
  const [selectStyle9, setSelectStyle9] = useState({});
  const [selectStyle10, setSelectStyle10] = useState({});
  const [selectStyle11, setSelectStyle11] = useState({});
  const [selectStyle12, setSelectStyle12] = useState({});
  const [selectStyle13, setSelectStyle13] = useState({});
  const [selectStyle14, setSelectStyle14] = useState({});
  const [selectStyle15, setSelectStyle15] = useState({});
  const [selectStyle16, setSelectStyle16] = useState({});
  const [selectStyle17, setSelectStyle17] = useState({});
  const [selectStyle18, setSelectStyle18] = useState({});
  const [selectStyle19, setSelectStyle19] = useState({});
  const [selectStyle20, setSelectStyle20] = useState({});
  const [selectStyle21, setSelectStyle21] = useState({});
  const [selectStyle22, setSelectStyle22] = useState({});
  const [selectStyle23, setSelectStyle23] = useState({});
  const [selectStyle24, setSelectStyle24] = useState({});
  const [selectStyle25, setSelectStyle25] = useState({});
  const [selectStyle26, setSelectStyle26] = useState({});
  const [selectStyle27, setSelectStyle27] = useState({});
  const [selectStyle28, setSelectStyle28] = useState({});
  const [selectStyle29, setSelectStyle29] = useState({});
  const [selectStyle30, setSelectStyle30] = useState({});

  const [selectedSeat1, setSelectedSeat1] = useState(false);
  const [selectedSeat2, setSelectedSeat2] = useState(false);
  const [selectedSeat3, setSelectedSeat3] = useState(false);
  const [selectedSeat4, setSelectedSeat4] = useState(false);
  const [selectedSeat5, setSelectedSeat5] = useState(false);
  const [selectedSeat6, setSelectedSeat6] = useState(false);
  const [selectedSeat7, setSelectedSeat7] = useState(false);
  const [selectedSeat8, setSelectedSeat8] = useState(false);
  const [selectedSeat9, setSelectedSeat9] = useState(false);
  const [selectedSeat10, setSelectedSeat10] = useState(false);
  const [selectedSeat11, setSelectedSeat11] = useState(false);
  const [selectedSeat12, setSelectedSeat12] = useState(false);
  const [selectedSeat13, setSelectedSeat13] = useState(false);
  const [selectedSeat14, setSelectedSeat14] = useState(false);
  const [selectedSeat15, setSelectedSeat15] = useState(false);
  const [selectedSeat16, setSelectedSeat16] = useState(false);
  const [selectedSeat17, setSelectedSeat17] = useState(false);
  const [selectedSeat18, setSelectedSeat18] = useState(false);
  const [selectedSeat19, setSelectedSeat19] = useState(false);
  const [selectedSeat20, setSelectedSeat20] = useState(false);
  const [selectedSeat21, setSelectedSeat21] = useState(false);
  const [selectedSeat22, setSelectedSeat22] = useState(false);
  const [selectedSeat23, setSelectedSeat23] = useState(false);
  const [selectedSeat24, setSelectedSeat24] = useState(false);
  const [selectedSeat25, setSelectedSeat25] = useState(false);
  const [selectedSeat26, setSelectedSeat26] = useState(false);
  const [selectedSeat27, setSelectedSeat27] = useState(false);
  const [selectedSeat28, setSelectedSeat28] = useState(false);
  const [selectedSeat29, setSelectedSeat29] = useState(false);
  const [selectedSeat30, setSelectedSeat30] = useState(false);
  let actualbookedseat1 = "";
  let actualbookedseat2 = "";
  
  const selectSeat1 = (e) => {
      if (selectedSeat1) {
        setSelectedSeat1(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle1(clearstyle);
        return
      }
      setSelectedSeat1(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle1(style1);
      }
      const selectSeat2 = (e) => {
        if (selectedSeat2) {
          setSelectedSeat2(false);
          const newList = selectedSeats.filter((item) => item !== e.target.value);
          console.log(selectedSeats.length);
          setSelectedSeats(newList);
          setSelectStyle2(clearstyle);
          return
        }
        setSelectedSeat2(true);
        const newList = selectedSeats.concat(e.target.value);
        console.log(selectedSeats.length);
        setSelectedSeats(newList);
        setSelectStyle2(style1);
      }
    const selectSeat3 = (e) => {
      if (selectedSeat3) {
        setSelectedSeat3(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle3(clearstyle);
        return
      }
      setSelectedSeat3(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle3(style1);
    }
    const selectSeat4 = (e) => {
      if (selectedSeat4) {
        setSelectedSeat4(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle4(clearstyle);
        return
      }
      setSelectedSeat4(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle4(style1);
    }
    const selectSeat5 = (e) => {
      if (selectedSeat5) {
        setSelectedSeat5(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle5(clearstyle);
        return
      }
      setSelectedSeat5(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle5(style1);
    }
    const selectSeat6 = (e) => {
      if (selectedSeat6) {
        setSelectedSeat6(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle6(clearstyle);
        return
      }
      setSelectedSeat6(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle6(style1);
    }
    const selectSeat7 = (e) => {
      if (selectedSeat7) {
        setSelectedSeat7(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle7(clearstyle);
        return
      }
      setSelectedSeat7(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle7(style1);
    }
    const selectSeat8 = (e) => {
      if (selectedSeat8) {
        setSelectedSeat8(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle8(clearstyle);
        return
      }
      setSelectedSeat8(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle8(style1);
    }
    const selectSeat9 = (e) => {
      if (selectedSeat9) {
        setSelectedSeat9(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle9(clearstyle);
        return
      }
      setSelectedSeat9(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle9(style1);
    }
    const selectSeat10 = (e) => {
      if (selectedSeat10) {
        setSelectedSeat10(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle10(clearstyle);
        return
      }
      setSelectedSeat10(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle10(style1);
    }
    const selectSeat11 = (e) => {
      if (selectedSeat11) {
        setSelectedSeat11(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle11(clearstyle);
        return
      }
      setSelectedSeat11(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle11(style1);
    }
    const selectSeat12 = (e) => {
      if (selectedSeat12) {
        setSelectedSeat12(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle12(clearstyle);
        return
      }
      setSelectedSeat12(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle12(style1);
    }
    const selectSeat13 = (e) => {
      if (selectedSeat13) {
        setSelectedSeat13(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle13(clearstyle);
        return
      }
      setSelectedSeat13(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle13(style1);
    }
    const selectSeat14 = (e) => {
      if (selectedSeat14) {
        setSelectedSeat14(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle14(clearstyle);
        return
      }
      setSelectedSeat14(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle14(style1);
    }
    const selectSeat15 = (e) => {
      if (selectedSeat15) {
        setSelectedSeat15(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle15(clearstyle);
        return
      }
      setSelectedSeat15(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle15(style1);
    }
    const selectSeat16 = (e) => {
      if (selectedSeat16) {
        setSelectedSeat16(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle16(clearstyle);
        return
      }
      setSelectedSeat16(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle16(style1);
    }
    const selectSeat17 = (e) => {
      if (selectedSeat17) {
        setSelectedSeat17(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle17(clearstyle);
        return
      }
      setSelectedSeat17(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle17(style1);
    }
    const selectSeat18 = (e) => {
      if (selectedSeat18) {
        setSelectedSeat18(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle18(clearstyle);
        return
      }
      setSelectedSeat18(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle18(style1);
    }
    const selectSeat19 = (e) => {
      if (selectedSeat19) {
        setSelectedSeat19(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle19(clearstyle);
        return
      }
      setSelectedSeat19(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle19(style1);
    }
    const selectSeat20 = (e) => {
      if (selectedSeat20) {
        setSelectedSeat20(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle20(clearstyle);
        return
      }
      setSelectedSeat20(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle20(style1);
    }
    const selectSeat21 = (e) => {
      if (selectedSeat21) {
        setSelectedSeat21(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle21(clearstyle);
        return
      }
      setSelectedSeat21(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle21(style1);
    }
    const selectSeat22 = (e) => {
      if (selectedSeat22) {
        setSelectedSeat22(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle22(clearstyle);
        return
      }
      setSelectedSeat22(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle22(style1);
    }
    const selectSeat23 = (e) => {
      if (selectedSeat23) {
        setSelectedSeat23(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle23(clearstyle);
        return
      }
      setSelectedSeat23(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle23(style1);
    }
    const selectSeat24 = (e) => {
      if (selectedSeat24) {
        setSelectedSeat24(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle24(clearstyle);
        return
      }
      setSelectedSeat24(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle24(style1);
    }
    const selectSeat25 = (e) => {
      if (selectedSeat25) {
        setSelectedSeat25(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle25(clearstyle);
        return
      }
      setSelectedSeat25(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle25(style1);
    }
    const selectSeat26 = (e) => {
      if (selectedSeat26) {
        setSelectedSeat26(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle26(clearstyle);
        return
      }
      setSelectedSeat26(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle26(style1);
    }
    const selectSeat27 = (e) => {
      if (selectedSeat27) {
        setSelectedSeat27(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle27(clearstyle);
        return
      }
      setSelectedSeat27(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle27(style1);
    }
    const selectSeat28 = (e) => {
      if (selectedSeat28) {
        setSelectedSeat28(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle28(clearstyle);
        return
      }
      setSelectedSeat28(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle28(style1);
    }
    const selectSeat29 = (e) => {
      if (selectedSeat29) {
        setSelectedSeat29(false); 
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle29(clearstyle);
        return
      }
      setSelectedSeat29(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle29(style1);
    }
    const selectSeat30 = (e) => {
      if (selectedSeat30) {
        setSelectedSeat30(false);
        const newList = selectedSeats.filter((item) => item !== e.target.value);
        setSelectedSeats(newList);
        setSelectStyle30(clearstyle);
        return
      }
      setSelectedSeat30(true);
      const newList = selectedSeats.concat(e.target.value);
      console.log(selectedSeats.length);
      setSelectedSeats(newList);
      setSelectStyle30(style1);
    }
    
  useEffect(() => {
    refreshRoutes();
    console.log(`${routeID}`);
    console.log(username);
  }, []);

  const getUsername=()=>{
    API.get("loggeduser/1/").then(res => {
      localStorage.setItem("username", res.data.username);
      username=res.data.username;
      console.log("Username"+username);
      actualusername=res.data.username+"";
      console.log(actualusername);
    })
  }
  const bookedSeat=()=>{
    setBookedSeat1(selectedSeats[0]);
    actualbookedseat1=selectedSeats[0];
    actualbookedseat2=selectedSeats[1];
    console.log(selectedSeats[0]);
    console.log(selectedSeats[1]);
    setBookedSeat2(selectedSeats[1]);

    if(selectedSeats[0]==="seat1" || selectedSeats[1]==="seat1"){
      seat1=true;
    }
    if (selectedSeats[0] === "seat2" || selectedSeats[1] === "seat2") {
      seat2=true;
    }
    if (selectedSeats[0] === "seat3" || selectedSeats[1] === "seat3") {
      seat3=true;
    }
    if (selectedSeats[0] === "seat4" || selectedSeats[1] === "seat4") {
      seat4=true;
    }
    if (selectedSeats[0] === "seat5" || selectedSeats[1] === "seat5") {
      seat5=true;
    }
    if (selectedSeats[0] === "seat6" || selectedSeats[1] === "seat6") {
      seat6=true;
    }
    if (selectedSeats[0] === "seat7" || selectedSeats[1] === "seat7") {
      seat7=true;
    }
    if (selectedSeats[0] === "seat8" || selectedSeats[1] === "seat8") {
      seat8=true;
    }
    if (selectedSeats[0] === "seat9" || selectedSeats[1] === "seat9") {
      seat9=true;
    }
    if (selectedSeats[0] === "seat10" || selectedSeats[1] === "seat10") {
      seat10=true;
    }
    if (selectedSeats[0] === "seat11" || selectedSeats[1] === "seat11") {
      seat11=true;
    }
    if (selectedSeats[0] === "seat12" || selectedSeats[1] === "seat12") {
      seat12=true;
    }
    if (selectedSeats[0] === "seat13" || selectedSeats[1] === "seat13") {
      seat13=true;
    }
    if (selectedSeats[0] === "seat14" || selectedSeats[1] === "seat14") {
      seat14=true;
    }
    if (selectedSeats[0] === "seat15" || selectedSeats[1] === "seat15") {
      seat15=true;
    }
    if (selectedSeats[0] === "seat16" || selectedSeats[1] === "seat16") {
      seat16=true;
    }
    if (selectedSeats[0] === "seat17" || selectedSeats[1] === "seat17") {
      seat17=true;
    }
    if (selectedSeats[0] === "seat18" || selectedSeats[1] === "seat18") {
      seat18=true;
    }
    if (selectedSeats[0] === "seat19" || selectedSeats[1] === "seat19") {
      seat19=true;
    }
    if (selectedSeats[0] === "seat20" || selectedSeats[1] === "seat20") {
      seat20=true;
    }
    if (selectedSeats[0] === "seat21" || selectedSeats[1] === "seat21") {
      seat21=true;
    }
    if (selectedSeats[0] === "seat22" || selectedSeats[1] === "seat22") {
      seat22=true;
    }
    if (selectedSeats[0] === "seat23" || selectedSeats[1] === "seat23") {
      seat23=true;
    }
    if (selectedSeats[0] === "seat24" || selectedSeats[1] === "seat24") {
      seat24=true;
    }
    if (selectedSeats[0] === "seat25" || selectedSeats[1] === "seat25") {
      seat25=true;
    }
    if (selectedSeats[0] === "seat26" || selectedSeats[1] === "seat26") {
      seat26=true;
    }
    if (selectedSeats[0] === "seat27" || selectedSeats[1] === "seat27") {
      seat27=true;
    }
    if (selectedSeats[0] === "seat28" || selectedSeats[1] === "seat28") {
      seat28=true;
    }
    if (selectedSeats[0] === "seat29" || selectedSeats[1] === "seat29") {
      seat29=true;
    }
    if (selectedSeats[0] === "seat30" || selectedSeats[1] === "seat30") {
      seat30=true;
    }  
  }
  const refreshRoutes = () => {
        API.get("routes/").then(
          (res) => {
          setRoutes(res.data);
          routes.map((route)=>{
            if(route.id === routeID){
              console.log(route);
            }
          });
          for(let i=0; i<res.data.length; i++){
            if(res.data[i].id==routeID){
              console.log("FOund!");
              console.log(res.data[i].id);
              setPrice(res.data[i].price);
              setSeat1(res.data[i].seat1);
              setSeat2(res.data[i].seat2);
              setSeat3(res.data[i].seat3);
              setSeat4(res.data[i].seat4);
              setSeat5(res.data[i].seat5);
              setSeat6(res.data[i].seat6);
              setSeat7(res.data[i].seat7);
              setSeat8(res.data[i].seat8);
              setSeat9(res.data[i].seat9);
              setSeat10(res.data[i].seat10);
              setSeat11(res.data[i].seat11);
              setSeat12(res.data[i].seat12);
              setSeat13(res.data[i].seat13);
              setSeat14(res.data[i].seat14);
              setSeat15(res.data[i].seat15);
              setSeat16(res.data[i].seat16);
              setSeat17(res.data[i].seat17);
              setSeat18(res.data[i].seat18);
              setSeat19(res.data[i].seat19);
              setSeat20(res.data[i].seat20);
              setSeat21(res.data[i].seat21);
              setSeat22(res.data[i].seat22);
              setSeat23(res.data[i].seat23);
              setSeat24(res.data[i].seat24);
              setSeat25(res.data[i].seat25);
              setSeat26(res.data[i].seat26);
              setSeat27(res.data[i].seat27);
              setSeat28(res.data[i].seat28);
              setSeat29(res.data[i].seat29);
              setSeat30(res.data[i].seat30);
              setDepartureDate(res.data[i].departureDate);
              setDepartureTime(res.data[i].departureTime);
              setArrivalTime(res.data[i].arrivalTime);
              setVehicleID(res.data[i].vehicleID);
              setDepartureLocation(res.data[i].departureLocation);
              setDestinationLocation(res.data[i].destinationLocation);
            } 
          }
        })
        .catch(console.error);
  };
  const onUpdate = (id) => {
    let item1 = {
      seat1,
      seat2,
      seat3,
      seat4,
      seat5,
      seat6,
      seat7,
      seat8,
      seat9,
      seat10,
      seat11,
      seat12,
      seat13, 
      seat14,
      seat15,
      seat16,
      seat17,
      seat18,
      seat19,
      seat20,
      seat21,
      seat22,
      seat23,
      seat24,
      seat25,
      seat26,
      seat27,
      seat28,
      seat29,
      seat30
    }
    API.patch(`routes/${id}/`, item1).then((res) => refreshRoutes());
  };
    const onSubmit = (e) => {
      e.preventDefault();
      getUsername();
      bookedSeat();
      if(selectedSeats.length>2){
        swal("Error!", "You can't book more than 2 seats!", "error");
        return
      }
      const routeId = routeID;
      let item = {
       username: user, 
       routeId,
       bookedSeat1:actualbookedseat1,
       bookedSeat2:actualbookedseat2,
       amount,
       departureLocation,
       destinationLocation,
       departureTime,
        arrivalTime,
        departureDate,
        vehicleID
      };
      swal({
          title: "Book Ticket",
          text: "Are you sure you want to book the tickets?",
          icon: "info",
          buttons: true,
          dangerMode: false,
        })
        .then((willDelete) => {
          if (willDelete) {
            API.post("tickets/", item).then(() => refreshRoutes());
            console.log("Seat 1"+seat1);
            console.log("Seat 2"+seat2);
            onUpdate(routeID);
            console.log("Seat 1" + seat1);
            console.log("Seat 2" + seat2);
            setDisable(false);
            swal("You have successfully booked the ticket(s)!", {
              icon: "success",
            });
          } else {
            swal("Booking process was cancelled!");
            setDisable(false);
          }
        });
    };
  return (
    <div style={{minHeight: '500px'}} className = "container">
          <Helmet>
            <title> {TITLE} </title> 
          </Helmet>
          <CSRFToken />
          <h1 style={{textAlign:'center'}}>Book Ticket</h1>
            <div className = "item-group d-flex justify-content-center input-group" >
              {routes.map((route, index) => {
                      return (
                      route.id == routeID ?
                      <div key={routeID} className="card list-group-item input-group-prepend" style={{ width: "24rem" }}>
                        <div className="card-body">
                            <h5 style={{textTransform:"capitalize"}}className="card-title">{route.departureLocation} to {route.destinationLocation}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Departure Time: {route.departureTime}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Arrival Time: {route.arrivalTime}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Price: {route.price}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Vehicle ID: {route.vehicleID}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Departure Date: {route.departureDate}</h6>
                        </div>
                    </div> : null
                      );
                    })}
            <div style={{textAlign:'center', marginTop: '8px', marginLeft: '5px'}}className="input-group-prepend">
                <ButtonToolbar className="mb-3 d-flex justify-content-center" aria-label="Toolbar with Button groups">
                  <ButtonGroup className="me-2" aria-label="First group">
                    <Button style={style1} variant="secondary">Selected</Button>{' '}
                    <Button variant="secondary" disabled>Booked</Button>{' '}
                    <Button variant="secondary">Available</Button>
                  </ButtonGroup>
                </ButtonToolbar>
                <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                  <Button style={{transform: 'rotate(180deg)'}} variant="secondary" disabled>< GiSteeringWheel /></Button>{' '}
                  <Button value="seat1" variant="secondary" onClick={selectSeat1} style={selectStyle1} disabled={seat1}>01</Button>{' '}
                  <Button value="seat2" onClick={selectSeat2} style={selectStyle2} disabled={seat2} variant="secondary">02</Button>{' '}
                  <Button value="seat3" onClick={selectSeat3} style={selectStyle3} disabled={seat3} variant="secondary">03</Button>{' '}
                  <Button value="seat4" onClick={selectSeat4} style={selectStyle4} disabled={seat4} variant="secondary">04</Button>{' '}
                  <Button value="seat5" onClick={selectSeat5} style={selectStyle5} disabled={seat5} variant="secondary">05</Button>{' '}
                  <Button value="seat6" onClick={selectSeat6} style={selectStyle6} disabled={seat6} variant="secondary">06</Button>{' '}
                  <Button value="seat7" onClick={selectSeat7} style={selectStyle7} disabled={seat7} variant="secondary">07</Button>{' '}
                  <Button value="seat8" onClick={selectSeat8} style={selectStyle8} disabled={seat8} variant="secondary">08</Button>{' '}
                  <Button value="seat9" onClick={selectSeat9} style={selectStyle9} disabled={seat9} variant="secondary">09</Button>{' '}
                  <Button value="seat10" onClick={selectSeat10} style={selectStyle10} disabled={seat10} variant="secondary">10</Button>{' '}
                  <Button value="seat11" onClick={selectSeat11} style={selectStyle11} disabled={seat11} variant="secondary">11</Button>{' '}
                  <Button value="seat12" onClick={selectSeat12} style={selectStyle12} disabled={seat12} variant="secondary">12</Button>{' '}
                  <Button value="seat13" onClick={selectSeat13} style={selectStyle13} disabled={seat13} variant="secondary">13</Button>{' '}
                  <Button value="seat14" onClick={selectSeat14} style={selectStyle14} disabled={seat14} variant="secondary">14</Button>{' '}
                  <Button value="seat15" onClick={selectSeat15} style={selectStyle15} disabled={seat15} variant="secondary">15</Button>
                </ButtonGroup>
              </ButtonToolbar>
              <ButtonToolbar
                className="justify-content-between"
                aria-label="Toolbar with Button groups"
              >
                <ButtonGroup aria-label="First group">
                  <Button value="seat16" style={selectStyle16} onClick={selectSeat16} disabled={seat16} variant="secondary">16</Button>{' '}
                  <Button value="seat17" onClick={selectSeat17} style={selectStyle17} disabled={seat17} variant="secondary">17</Button>{' '}
                  <Button value="seat18" onClick={selectSeat18} style={selectStyle18} disabled={seat18} variant="secondary">18</Button>{' '}
                  <Button value="seat19" onClick={selectSeat19} style={selectStyle19} disabled={seat19} variant="secondary">19</Button>{' '}
                  <Button disabled variant="secondary" >< GiEntryDoor /></Button>{' '}
                  <Button value="seat20" onClick={selectSeat20} style={selectStyle20} disabled={seat20} variant="secondary">20</Button>{' '}
                  <Button value="seat21" onClick={selectSeat21} style={selectStyle21} disabled={seat21} variant="secondary">21</Button>{' '}
                  <Button value="seat22" onClick={selectSeat22} style={selectStyle22} disabled={seat22} variant="secondary">22</Button>{' '}
                  <Button value="seat23" onClick={selectSeat23} style={selectStyle23} disabled={seat23} variant="secondary">23</Button>{' '}
                  <Button value="seat24" onClick={selectSeat24} style={selectStyle24} disabled={seat24} variant="secondary">24</Button>{' '}
                  <Button value="seat25" onClick={selectSeat25} style={selectStyle25} disabled={seat25} variant="secondary">25</Button>{' '}
                  <Button value="seat26" onClick={selectSeat26} style={selectStyle26} disabled={seat26} variant="secondary">26</Button>{' '}
                  <Button value="seat27" onClick={selectSeat27} style={selectStyle27} disabled={seat27} variant="secondary">27</Button>{' '}
                  <Button value="seat28" onClick={selectSeat28} style={selectStyle28} disabled={seat28} variant="secondary">28</Button>{' '}
                  <Button value="seat29" onClick={selectSeat29} style={selectStyle29} disabled={seat29} variant="secondary">29</Button>{' '}
                  <Button value="seat30" onClick={selectSeat30} style={selectStyle30} disabled={seat30} variant="secondary">30</Button>
                </ButtonGroup>
              </ButtonToolbar>
              <ButtonToolbar style={{marginTop:"8px"}}className="justify-content-between" aria-label="Toolbar with Button groups">
                <ButtonGroup  aria-label="First group">
                  <Button variant="dark" disabled>Selected Seats: {selectedSeats}</Button>{' '}
                  <Button variant="dark" disabled>Amount: Rs {amount}</Button>{' '}
                  <Button variant="outline-danger" onClick={onSubmit} disabled={selectedSeats.length==0}>Book Ticket</Button>
                </ButtonGroup>
              </ButtonToolbar>
              </div>
        </div>
    </div>
  );
};
export default Book;