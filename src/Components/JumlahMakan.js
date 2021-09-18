import React, { Fragment } from 'react';
import './JumlahMakan.css'
class jumlahMakan extends React.Component {
  constructor(props) {
    super(props)
    this.handleChangeMakan = this.handleChangeMakan.bind(this)
    this.state = {
      makan: [
        ['Soto', 15000],
        ['Nasi Goreng', 20000],
        ['Ayam Bakar', 25000],
        ['Pecel Lele', 22000],
        ['Udah Saos Tiram', 30000],
        ['Cumi Saos Padang', 28000],
        ['Teh Manis', 5000],
        ['Aqua', 4000],
        ['Es Jeruk', 6000],
        ['Teh Botol', 10000],
        ['Es Nutri Sari', 5000],
      ],
      menu: {
        sarapan1: 0,
        makanSiang1: 0,
      },
      caloriesTotalPagi: 0,
      caloriesTotalSiang: 0,
      caloriesTotal: 0
    }
  }

  handleTotal = () => {
    const {
      caloriesTotalPagi,
      caloriesTotalSiang,
    } = this.state
    this.setState({
      caloriesTotal: caloriesTotalPagi + caloriesTotalSiang
    })
  }

  handleCalculation = () => {
    const {
      sarapan1,
      makanSiang1,
    } = this.state.menu
    var pagi = sarapan1
    var siang = makanSiang1
    this.setState({
      ...this.state.menu,
      caloriesTotalPagi: pagi,
      caloriesTotalSiang: siang,
    }, this.handleTotal
    )
  }

  handleChangeMakan(e) {
    e.preventDefault()
    const { menu } = this.state
    const { name } = e.target
    var index = e.nativeEvent.target.selectedIndex;
    const { value } = e.nativeEvent.target[index];
    this.setState({
      menu: {
        ...menu,
        [name]: Number(value)
      }
    }, this.handleCalculation);
  }

  render() {
    const {
      makan,
      caloriesTotalPagi,
      caloriesTotalSiang,
      caloriesTotal
    } = this.state

    return (
      <>
      <p>Silahkan Memilih Menu Makanan Dan Minuman</p>
        <div className='tips-container'>
          <div style={{ height: '75%' }} className='tips-content'>
            <div className='calories-calculator'>
              <div className='sarapan'>
                <h2>Makanan</h2>
                <select onChange={this.handleChangeMakan} name='sarapan1'>
                  <option value='0'>Pilih Makanan</option>
                  <Fragment>
                    {
                      makan.map(makanan => {
                        return (
                          <option value={makanan[1]}>{makanan[0]}</option>
                        )
                      })
                    }
                  </Fragment>
                </select>
                <h2>Harga Makan: {caloriesTotalPagi}</h2>
              </div>
              <div className='makan-siang'>
                <h2>Minuman</h2>
                <select onChange={this.handleChangeMakan} name='makanSiang1'>
                  <option value='0'>Pilih Minuman</option>
                  <Fragment>
                    {
                      makan.map(makanan => {
                        return (
                          <option value={makanan[1]}>{makanan[0]}</option>
                        )
                      })
                    }
                  </Fragment>
                </select>
                <h2>Harga Minum: {caloriesTotalSiang} </h2>
              </div>
              <h2 style={{ color: '#8dd2e3', textAlignVertical: 'center', flex: '1 0 100%', margin: '10px 0' }}>Total Biaya: Rp. {caloriesTotal} </h2>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default jumlahMakan;
