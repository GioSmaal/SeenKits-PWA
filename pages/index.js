import Head from 'next/head'
import { Fragment } from 'react';
import React from 'react';
import NavBar from '../components/navBar';
import { supabase } from "../lib/supabase";
import { useState } from "react";

export default function Home() {
  
  //database 
  React.useEffect(() => {
    retrieveKitsData();
  }, []);
  
  const initialState = {
    player_name: "",
    number: "",
  }

  const [kitsUpdate, setKitsUpdate] = useState(initialState);
  const [kitsData, setKitsData] = useState(initialState);

  const { player_name, number } = kitsUpdate;

  const handleChange = (e) => {
    setKitsUpdate({ ...kitsUpdate, [e.target.name]: e.target.value });
  };

  const createKits = async () => {
    try {
      const { data, error } = await supabase
        .from("kits")
        .insert([
          {
            player_name,
            number,
          },  
        ])
        .select()
      if (error) throw error;
      alert("gg");
      setKitsUpdate(initialState);
    } catch (error) {
      alert(error.message);
    }
  };

  const retrieveKitsData = async () => {
    try {
      // Use a SELECT query to retrieve the desired data from the database
      const { data, error } = await supabase
        .from("kits")
        .select()
        .eq("kit_id", "17")
        .single ();
      if (error) throw error;
      
      localStorage.setItem("kitsData", JSON.stringify({ playerName: data.player_name, number: data.number }));
      // Set the data to a state variable in your React component using the setState hook
      setKitsData(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  //database end
  
  const submitContact = async (event) => {
    
    event.preventDefault();

    let biggerParentDiv = document.createElement('div');
    biggerParentDiv.className = "parentKit"; //parent div 

    let parentDiv = document.createElement('div');
    parentDiv.className = "kit"; //div to display the kit

    parentDiv.style.filter ="brightness(0.5) sepia(1) saturate(10000%) hue-rotate(" + document.getElementById('color').value + "deg)"; //filter code to give kit color

    if(document.getElementById('color').value < 0) { //if statement for when user wants harder to filter colors
      console.log("hi")
      if(document.getElementById('color').value == "-10"){ //black
        parentDiv.style.filter ="brightness(0)";
      }
      else if (document.getElementById('color').value == "-20") { //orange
        parentDiv.style.filter = "invert(74%) sepia(100%) saturate(2206%) hue-rotate(16deg) brightness(114%) contrast(118%)"; //used https://codepen.io/jumarjuaton/full/mdJYWYq generator
      }
      else if (document.getElementById('color').value == "-30") { //yellow
        console.log("hello...")
        parentDiv.style.filter = "invert(82%) sepia(74%) saturate(614%) hue-rotate(3deg) brightness(1198%) contrast(108%)";
      }
      else { //white
        parentDiv.style.filter ="brightness(1)";
      }
    }


    let childDivName = document.createElement('div');
    let childDivNumber = document.createElement('div');
    childDivName.className = "kitName"; //div to display player name
    childDivNumber.className = "kitNumber"; //div to display player number

    childDivName.style.color = document.getElementById('textcolor').value; //use form value to define color
    childDivNumber.style.color = document.getElementById('textcolor').value;

    childDivName.innerText = document.getElementById('player_name').value;
    childDivNumber.innerText = document.getElementById('number').value; 
    parentDiv.appendChild(childDivName);
    parentDiv.appendChild(childDivNumber);
    biggerParentDiv.appendChild(parentDiv);

    biggerParentDiv.className = 'relative pt-3 text-text text-center text-sm font-bold';
    // document.body.appendChild(biggerParentDiv);
    document.getElementById('home').appendChild(biggerParentDiv);
    document.getElementById('kitComponent').style.visibility = 'hidden';

    const storedData = localStorage.getItem("kitsData");
    if (storedData) {
      setKitsData(JSON.parse(storedData));
    }    
  }

  const newKit = async (event) => {
    event.preventDefault();
    console.log('hewo');
    document.getElementById('kitComponent').style.visibility = 'visible';
  };
  
  return (
    <Fragment>
      <div id='home' className='pt-8 h-screen'>

        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
        </Head>

        {/* top of the page DYNAMIC KIT COUNT */}
        <div className='dynaKitCount'>
          <div className='relative w-70% pt-4 text-text text-center font-bold'>SeenKits</div>
          <div className='relative w-70% pt-5 text-text text-center font-bold text-xxxl'>0</div>
        </div>

        {/* STAT BUBBLES */}
        <div className='flex grid grid-cols-1 content-center mx-10 '>
          <div className='text-center border-b-2 border-lineBlue pt-8'>Top countries seen</div>
        </div>
        <div className='flex grid grid-cols-3 content-center mx-10 pt-2'>
          <div className='text-center rounded-full border-solid border-2 border-lightBlue w-24 pt-0 mx-auto'>
            <div className='my-5 text-xxxl'>
              0
            </div>
          </div>
          <div className='text-center rounded-full border-solid border-2 border-lightBlue w-24 pt-0 mx-auto'>
            <div className='my-5 text-xxxl'>
              0
            </div>
          </div>
          <div className='text-center rounded-full border-solid border-2 border-lightBlue w-24 pt-0 mx-auto'>
            <div className='my-5 text-xxxl'>
              0
            </div>
          </div>
          <div className='text-center text-sm mt-1'>Country</div>
          <div className='text-center text-sm mt-1'>Country</div>
          <div className='text-center text-sm mt-1'>Country</div>
        </div>

        {/* RECENT KITS */}
        <div className='flex grid grid-cols-1 content-center mx-10 pt-6'>
          <div className='text-center border-b-2 border-lineBlue pt-8'>Newest kits</div>
        </div>
        <div className='flex grid grid-cols-3 content-center mx-10 pt-2'>
          <div className='showKits w-22 h-28 pt-0 mx-auto text-center'>
            <button className='my-5 text-xxxl text-text' onClick={newKit}>
              +
            </button>
          </div>
          {/* brightness(0.5) sepia(1) saturate(10000%) hue-rotate(" + document.getElementById('color').value + "deg) */}
          <div id='recent1' className='showKits w-22 h-28 pt-0 mx-auto text-center'>
            <div className='relative pt-3 text-text text-center text-sm font-bold'>{kitsData.player_name}</div>
            <div id='recentNumber1' className='relative pt-4 text-text text-center text-xl font-bold text-xxxl'>{kitsData.number}</div>
          </div>
          <div className='showKits w-22 h-28 pt-0 mx-auto text-center'>
            <div className='relative pt-3 text-text text-center text-sm font-bold'>Messi</div>
            <div className='relative pt-4 text-text text-center text-xl font-bold text-xxxl'>10</div>
          </div>
          <div className='text-center text-sm mt-1'>New kit</div>
          <div id='recent1name' className='text-center text-sm mt-1'>Liverpool</div>
          <div className='text-center text-sm mt-1'>PSG</div>
        </div>
        

        {/* CREATE NEW KIT COMPONENT */}
        <div className='relative mx-auto w-80 bottom-2/4'>
          <div className="kitComponent absolute my-2 shadow-lg rounded-lg bg-text w-80 h-max" id='kitComponent'> 
            <div className="px-6 py-4">
              <div className="mb-2 text-xxl font-bold text-center">New kit</div>
              <form className="flex flex-col" onSubmit={submitContact}>
                <div className='flex flex-col grid grid-cols-2'>
                  <div>
                    <label htmlFor="name" className="mb-2 italic">Country</label>
                    <select 
                      className="mb-4 bg-white rounded text-black w-5/6"
                      id="country"
                      name="country"
                      required>
                        <option>Germany</option> 
                        <option>Netherlands</option>
                        <option>Belgium</option>
                        <option>Spain</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="name" className="mb-2 italic">League</label>
                    <select 
                      className="mb-4 bg-white rounded text-black w-5/6"
                      id="league"
                      name="league"
                      required>
                        <option>Bundesliga</option> 
                        <option>Netherlands</option>
                        <option>Pro league</option>
                        <option>La liga</option>
                    </select>
                  </div>
                  <div className='grid grid-cols-1'>
                    <label htmlFor="name" className="mb-2 italic">Team</label>
                    <select 
                      className="mb-4 bg-white rounded text-black w-5/6"
                      id="team"
                      name="team"
                      required>
                        <option>Bayern</option> 
                        <option>Dortmund</option>
                        <option>Schalke</option>
                        <option>HSV</option>
                    </select>
                  </div>
                  <div className='flex flex-col grid grid-cols-2'>
                    <div>
                      <label htmlFor="name" className="mb-2 italic">Num.</label>
                      <input
                        className="mb-4 mt-2 bg-white rounded text-black w-2/3"
                        id="number"
                        name="number"
                        type="text"
                        autoComplete="#"
                        placeholder= "#"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="name" className="mb-2 italic">Name </label>
                      <input
                        className="mb-4 mt-2 bg-white rounded text-black w-full"
                        id="player_name"
                        name="player_name"
                        type="text"
                        autoComplete="name"
                        placeholder= "name"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                  </div>
                  <div>
                  <label htmlFor="name" className="mb-2 italic">Kit main color</label>
                  <select //https://www.quackit.com/css/functions/css_hue-rotate_function.cfm color wheel HUE RED
                  //these options hold values for the color wheel. B&W hold values for the if statement.
                    className="mb-4 bg-white rounded text-black w-5/6"
                    id="color"
                    name="color"
                    required>
                      <option value="-10">Black</option> 
                      <option value="-100">White</option>
                      <option value="0">Red</option>
                      <option value="-20">Orange</option> 
                      <option value="-30">Yellow</option>
                      <option value="120">Green</option>
                      <option value="180">Light blue</option>
                      <option value="240">Blue</option>
                      <option value="270">Purple</option>
                      <option value="300">Pink</option>
                  </select>
                  </div>
                  <div>
                  <label htmlFor="name" className="mb-2 italic">Text color</label>
                  <select //https://www.quackit.com/css/functions/css_hue-rotate_function.cfm color wheel HUE RED
                  //these options hold values for the color wheel. B&W hold values for the if statement.
                    className="mb-4 bg-white rounded text-black w-5/6"
                    id="textcolor"
                    name="textcolor"
                    required>
                      <option value="black">Black</option> 
                      <option value="white">White</option>
                      <option value="red">Red</option>
                      <option value="orange">Orange</option> 
                      <option value="yellow">Yellow</option>
                      <option value="green">Green</option>
                      <option value="blue">Blue</option>
                      <option value="purple">Purple</option>
                      <option value="pink">Pink</option>
                  </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mx-auto py-2 font-bold text-white bg-lineBlue rounded-lg w-1/2 shadow-lg"
                  onClick={() => {
                    createKits();
                    retrieveKitsData();
                  }}>
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
          {/* END CREATE NEW KIT COMPONENT */}
          <NavBar />
      </div>
    </Fragment>
  )
}
