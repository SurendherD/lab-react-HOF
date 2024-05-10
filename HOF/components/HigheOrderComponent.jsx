import React from 'react'

class HigheOrderComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }

 
    displayAllItems(){
        const data = this.state.userData;
        const rows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li>
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return rows;
    };
    
    displayDataOfUserType = () => {
      const data = this.state.userData;
      const Filter = data.filter((item)=>{
        return item.user_type == "Designer";
        }).map((item)=>(
        <React.Fragment key={item.id}>
            <li>
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        </React.Fragment>)
      );
      return Filter;
    }
    
    displayDataOfLetterJ = () => {
      const data = this.state.userData;
      const Filter = data.filter((item)=>{
        return item.name[0] == "J";
      }).map((item)=>(
        <React.Fragment key={item.id}>
            <li>
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        </React.Fragment>)
      );
      return Filter;
    }
    
    displayDataOfAge = () => {
      const data = this.state.userData;
      const Filter = data.filter((item)=>{
        if(item.age<=50 && item.age>28){
          return item
        }
      }).map((item)=>(
        
        <React.Fragment key={item.id}>
            <li>
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        </React.Fragment>)
      );
      return Filter;
    }
    
    displayAgeofAllDesigners = () => {
      const data = this.state.userData;
      const reducedata = data.reduce((total, age)=>{
        if(age.user_type=="Designer"){
          total+=age.years;
        }
        return total;
      },0)
      return reducedata;
    }
    
    render() {
      return (
        <>
        <React.Fragment>
          <h1>Display all items</h1>
          <div >
          <ul>{this.displayAllItems()} </ul>
          </div>
        </React.Fragment>
    
        <React.Fragment>
          <h1>Display based on user type</h1>
          <div >
          <ul>{this.displayDataOfUserType()} </ul>
          </div>
        </React.Fragment>
    
        <React.Fragment>
          <h1>Filter all data starting with letter J </h1>
          <div >
          <ul>{this.displayDataOfLetterJ()} </ul>
          </div>
        </React.Fragment>
    
        <React.Fragment>
          <h1>Filter all data based on age greater than 28 and age less than or equal to 50 </h1>
          <div >
          <ul>{this.displayDataOfAge()} </ul>
          </div>
        </React.Fragment>
    
        <React.Fragment>
          <h1>Find the total years of the designers </h1>
          <div >
          <ul>{this.displayAgeofAllDesigners()} </ul>
          </div>
        </React.Fragment>
    
      </>
      );
      };
    
    
    
    }
    
    
    function demo(){
      return "something";
    }
    
    export default HigheOrderComponent;
