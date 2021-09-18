import React from "react";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:"",
      age:"",
      courses:"",
      gender:{
        male:"",
        female:"",
      },
      languages:{
        c:false,
        java:false,
        javascript:true,
      },
      error:{
        name:"",
        age:"",
      }
    }
  }

  handleChange({target:{name,value,type,checked}})
  {
    const errors=this.state.error
    switch(name){
      case "name":{
        if(value.length<6){
          errors.name="Must be above six";
        }
        else{
          errors.name="";
        }
        break;
      }
      case "age":{
        if(value>45 || value<18){
          errors.age="Must between 18 to 45";
        }
        else if(value!=="number"){
          errors.age="Must be number";
        }
        else{
          errors.age=""
        }
        break;
      }
      default:{}
    }
    this.setState({error: errors})
    if(type==="checkbox"){
      let a=this.state.languages
      a[name]=checked
      this.setState({a})
    }
    else{
      this.setState({[name]:value},
      ()=>{console.log(this.state.gender)})
    }
  }

  handleSubmit(event){
    event.preventDefault();
  }
  
  render(){
    return(
      <>
      <h1>FORMS</h1>
      <form>
        <div>
        <label>Username </label>
        <input name="name" value={this.state.name} type="text" onChange={(event)=>{this.handleChange(event)}}/>
        <span>{this.state.error.name}</span>
        </div><br />
        <div>
        <label>Age </label>
        <input name="age" value={this.state.age} type="age" onChange={(event)=>{this.handleChange(event)}}/>
        <span>{this.state.error.age}</span>
        </div><br />
        <div>
        <label>Courses </label>
        <select name="courses" value={this.state.courses} onChange={(event)=>{this.handleChange(event)}}>
          <option value="mongo">Mongo</option>
        <option value="mysql">My sql</option>
     <option value="react">React</option>
         </select>
        </div><br />
        <div>
          <label>Gender </label>
          <input name="gender" value="male" type="radio" onChange={(event)=>{this.handleChange(event)}} checked={(this.state.gender === "male")}/>
          <label>Male </label>
          <input name="male" value="female" type="radio" onChange={(event)=>{this.handleChange(event)}} checked={(this.state.gender === "female")}/>
          <label>Female </label>
        </div><br />
        <div>
          <label>Languages Known</label><br/><br />
          <input name="c" type="checkbox" onChange={(event)=>this.handleChange(event)} checked={this.state.languages.c} value="c"/>
          <label>c</label><br/>
          <input name="javascript" type="checkbox" onChange={(event)=>this.handleChange(event)} checked={this.state.languages.javascript} value="javascript"/>
          <label>javascript</label><br/>
          <input name="python" type="checkbox" onChange={(event)=>this.handleChange(event)} checked={this.state.languages.python} value="python"/>
          <label>python</label>
        </div><br />
        <div>
          <button type="submit" onClick={(event)=>this.handleSubmit(event)}>submit</button>
        </div>
      </form>
      </>
    )
  }
}

export default App;