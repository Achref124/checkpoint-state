import './App.css';
import React, { Component } from 'react'
import Profile from './Component/Profile';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {peron:{fullname:'Achref Ouerfelli',Bio:'Full stack JS Developper',imgSrc:'https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/217730792_4409824815727110_7057865548945378740_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RegaLy9vsdsAX_f3ifi&_nc_ht=scontent.ftun1-2.fna&oh=00_AfA5ApsW36bSlw6-qFPyKUbpAq63RvAfoGx5VGz68Dh5eA&oe=63FA88F0',profession:'student'},
  show:false,date:0};
  }
  toggle=()=>{
    this.setState({show: !this.state.show})
  };
 
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentDidUpdate(){
    clearInterval(this.state.date);
  }

  componentWillUnmount(){
    clearInterval(this.state.date);
  }

  tick(){
    this.setState({
      date: this.state.date+1
    });
  }

  render() {
    return (
      <div className='div1'>
      <button className='glowing-btn' onClick={this.toggle}><span className='glowing-txt'>C<span className='faulty-letter'>L</span>ICK</span></button>
      {this.state.show ? <Profile fullname={this.state.peron.fullname} Bio={this.state.peron.Bio} imgSrc={this.state.peron.imgSrc} profession={this.state.peron.profession}/>:null}
<div>
<h2>It is {this.state.date}.</h2>
</div>
      </div>
    )
  }
} 
