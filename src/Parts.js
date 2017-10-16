import React, { Component } from 'react';
import './App.css';

class Parts extends Component {
  constructor(props){
    super(props);
    this.state={
      fr:'',
      fwl:'',
      fwr:'',
      bonnet:'',
      ws:'',
      fdl:'',
      fdr:'',
      roof:'',
      bdl:'',
      bdr:'',
      rw:'',
      bumper:'',
      tl:'',
      tr:''
    };
  }
  select(e){
    if(e.target.textContent ==='Frente')
      this.state.fr === ''?this.setState({fr:'selected'}):this.setState({fr:''})
    if(e.target.textContent ==='Ala Izquierda')
      this.state.fwl === ''?this.setState({fwl:'selected'}):this.setState({fwl:''})
    if(e.target.textContent ==='Ala Derecha')
      this.state.fwr === ''?this.setState({fwr:'selected'}):this.setState({fwr:''})
    if(e.target.textContent ==='Capot')
      this.state.bonnet === ''?this.setState({bonnet:'selected'}):this.setState({bonnet:''})
    if(e.target.textContent ==='Parabrisas')
      this.state.ws === ''?this.setState({ws:'selected'}):this.setState({ws:''})
    if(e.target.textContent ==='P. Delantera Izquierda')
      this.state.fdl === ''?this.setState({fdl:'selected'}):this.setState({fdl:''})
    if(e.target.textContent ==='P. Delantera Derecha')
      this.state.fdr === ''?this.setState({fdr:'selected'}):this.setState({fdr:''})
    if(e.target.textContent ==='Techo')
      this.state.roof === ''?this.setState({roof:'selected'}):this.setState({roof:''})
    if(e.target.textContent ==='P. Trasera Izquierda')
      this.state.bdl === ''?this.setState({bdl:'selected'}):this.setState({bdl:''})
    if(e.target.textContent ==='P. Trasera Derecha')
      this.state.bdr === ''?this.setState({bdr:'selected'}):this.setState({bdr:''})
    if(e.target.textContent ==='Ventana Trasera')
      this.state.rw === ''?this.setState({rw:'selected'}):this.setState({rw:''})
    if(e.target.textContent ==='Cola Izquierda')
      this.state.tl === ''?this.setState({tl:'selected'}):this.setState({tl:''})
    if(e.target.textContent ==='Maletero')
      this.state.bumper === ''?this.setState({bumper:'selected'}):this.setState({bumper:''})
    if(e.target.textContent ==='Cola Derecha')
      this.state.tr === ''?this.setState({tr:'selected'}):this.setState({tr:''})
  }
  render() {
    return (
      <div className="container text-center">
        <div className='row'>
          <div className='col-md-12'><h2>Select Area(s) of Damage</h2></div>
        </div>
        <div className='row'>
          <div className='s-car'>
            <div className='one col-md-12'>
              <div className={'box '+this.state.fr} onClick={(e)=>this.select(e)}>Frente</div>
            </div>
            <div className='two col-md-12'>
              <div className={'box '+this.state.fwl} onClick={(e)=>this.select(e)}>Ala Izquierda</div>
              <div className={'box '+this.state.fwr} onClick={(e)=>this.select(e)}>Ala Derecha</div>
            </div>
            <div className='one col-md-12'>
              <div className={'box '+this.state.bonnet} onClick={(e)=>this.select(e)}>Capot</div>
            </div>
            <br/>
            <div className='one col-md-12'>
              <div className={'box '+this.state.ws} onClick={(e)=>this.select(e)}>Parabrisas</div>
            </div>
            <br/>
            <div className='two col-md-12'>
              <div className={'box '+this.state.fdl} onClick={(e)=>this.select(e)}>P. Delantera Izquierda</div>
              <div className={'box '+this.state.fdr} onClick={(e)=>this.select(e)}>P. Delantera Derecha</div>
            </div>
            <div className='one col-md-12'>
              <div className={'box '+this.state.roof} onClick={(e)=>this.select(e)}>Techo</div>
            </div>
            <div className='two col-md-12'>
              <div className={'box '+this.state.bdl} onClick={(e)=>this.select(e)}>P. Trasera Izquierda</div>
              <div className={'box '+this.state.bdr} onClick={(e)=>this.select(e)}>P. Trasera Derecha</div>
            </div>
            <br/><br/>
            <div className='one col-md-12'>
              <div className={'box '+this.state.rw} onClick={(e)=>this.select(e)}>Ventana Trasera</div>
            </div>
            <div className='two col-md-12'>
              <div className={'box '+this.state.tl} onClick={(e)=>this.select(e)}>Cola Izquierda</div>
              <div className={'box '+this.state.bumper} onClick={(e)=>this.select(e)}>Maletero</div>
              <div className={'box '+this.state.tr} onClick={(e)=>this.select(e)}>Cola Derecha</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Parts;
