import React, { Component } from 'react';
import JumlahKursi from './JumlahKursi';
import JumlahMakan from './JumlahMakan';

class Home extends Component {
    state = {
        nama: '',
        jumlahKursi: false,
        jumlahMakan: false
    }
    componentDidMount() {
        alert('Haii')
    }
    componentWillUnmount() {
        alert( 'Terima Kasihh')
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) { 
        return window.confirm('Anda Yakin?');
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState((state) => {
            return {
                [name]: value
            }
        })
    }
    pesanKursi = () => {
        this.setState(() => {
            return {
                jumlahKursi: !this.state.jumlahKursi
            }
        })
    }
    pesanMakan = () => {
        this.setState(() => {
            return {
                jumlahMakan: !this.state.jumlahMakan
            }
        })
    }
    render() {
        return (
            <div>
                <h1> Resto Group V</h1>
                <p>Atas Nama?</p>
                <input onChange={this.handleChange} name='nama' value = {this.state.nama} />
                <br />
                <br />
            <span>
                Selamat Datang {this.state.nama} 
            </span>
                <hr/>
                <div style={{ display: "flex" }}>
                <div style={{ width: "50%" }}>
                    <button onClick={this.pesanKursi}>{this.state.jumlahKursi ? 'tutup' : 'edit'} jumlah Kursi</button>
                    {this.state.jumlahKursi && <JumlahKursi />} 
                </div>
                <div style={{ width: "50%" }}>
                    <button onClick={this.pesanMakan}>{this.state.jumlahMakan ? 'tutup' : 'edit'} Pesanan</button>
                    {this.state.jumlahMakan && <JumlahMakan />} 
                </div>

                </div>
            </div>
        );
    }
}

export default Home;