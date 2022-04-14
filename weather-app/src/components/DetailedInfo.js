import React from "react";
import { useParams } from "react-router";

//import ReactDOM from 'react-dom';



function DetailedInfo(props) {
  // constructor(props) {
  //   super(props);
  //   // console.log("props.data", props.data);

  // }
  let { id } = useParams();
  console.log("ID", id);
  // console.log("props.data", props.data);

  let getHour = (time) => time ? new Date(time).getHours() : new Date().getHours();
  let getDate = (date) => date ? new Date(date).getDate() : new Date().getDate();
  /*
    displayMoreInfo = (item) => {
      return (
        <span>
           
         </span>
       
      );
    };*/

  //hrdata=[];
  let displayMoreInfo = (item) => {
    return (
      <tr>
        <td>{`${getHour(item.dt_txt)}:00`}</td>
        <td>{`${Math.round(item.main.temp)}°C`}</td>
      </tr>
    )
  };

  let createTable = (hrdata) => {
    /*var table = []
   // var m;
         for(let m=0;m<k;m++){s
 
             const p=hrdata.length ? (Object.values(hrdata[m]["0"]))["0"] : null
             console.log(p)
            
             
            //table.push(<p key={m}>{`${getHour(hrdata["0"][m]["0"] * 1000)}:00`}</p>)
    }
 
    return table*/
    //console.log("createTable:", Object.values(hrdata))
    //        const table = hrdata && hrdata.length && Object.values(hrdata).map(f => f.map(d) => d.dt)
    //const foo = hrdata[0].map(f => f.dt)
    //const bar = foo.map(val => (<p>{`${getHour(val * 1000)}:00`}</p>))
    if (hrdata.length === 1) {
      const foo = hrdata[0].map(val => (

        (getHour(val.dt_txt) > getHour() && getDate(val.dt_txt) === getDate()) ? (
          displayMoreInfo(val)
        ) : getHour(val.dt_txt) >= 0 && getHour(val.dt_txt) <= 23 ? (
          displayMoreInfo(val)
        ) : null
      ))

      return (<tbody>{foo}</tbody>)
    }
    else {
      const foo = hrdata[0].map(val => (
        (getHour(val.dt_txt) > getHour() && getDate(val.dt_txt) === getDate()) ? (
          displayMoreInfo(val)
        ) : getHour(val.dt_txt) >= 0 && getHour(val.dt_txt) <= 23 ? (
          displayMoreInfo(val)
        ) : null
      ))
      const bar = hrdata[1].map(val => (
        (getHour(val.dt_txt) > getHour() && getDate(val.dt_txt) === getDate()) ? (
          displayMoreInfo(val)
        ) : getHour(val.dt_txt) >= 0 && getHour(val.dt_txt) <= 23 ? (
          displayMoreInfo(val)
        ) : null
      ))
      return (<tbody>{foo}{bar}</tbody>)
    }


  }

  // url = new URLSearchParams(window.location.search);
  // id = url.match.params.id;


  // render() {

  console.log("params id", id);
  const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  // const dt = props.data;
  const d = Object.values(props.data.filter(reading => daysOfWeek[new Date(reading[0].dt_txt).getDay()].includes(`${id}`)));

  // console.log("1INSIDE DETAILED INFO.JS", d)
  // {console.log(_.size(d) )};
  // const d=state.tiles;

  if (d && d.length) {
    // console.log("2INSIDE DETAILED INFO.JS")
    return (
      <div>
        <hr></hr>
        <h3>Selected Day's forecast</h3>
        <table border-collapse="collapse">
          <thead><tr><th>Time (3 hr intervals)</th><th>Temparature</th></tr></thead>
          {console.log(d)}
          {createTable(d)}
        </table>

      </div>
    );
  }
  return null;
  // }

}


export default DetailedInfo;
