import React, { Component } from 'react'

export default class AdminPage extends Component {
  state = {
      nama: '',
      harga: 0,
      tipe: 'makanan',
      img: '',
      imageUrl: '',
      id_makanan: ''
  }
  onChange(e) {
      console.log(e.target.name)
      this.setState({
          [e.target.name]: e.target.value
      })
      e.preventDefault()
  }
  onChangeFile(e) {
      this.setState({
          img: URL.createObjectURL(e.target.files[0]),
          imageUrl: e.target.files[0]
      })
  }


  componentWillReceiveProps(nextProps, nextState) {
    if(nextProps.editedMenu) {
      const {
        id_makanan,
        img,
        nama,
        tipe,
        harga
      } = nextProps.editMenu
      this.setState({
        id_makanan,
        imageUrl: img,
        nama,
        tipe,
        harga
      })
    }
      if(!!nextProps.message.affectedRows) {
        if (nextProps.message.affectedRows === 1) {

              window.alert('Data berhasil ditambahkan')
        } else {
            window.alert('Data gagal ditambahkan')
        }
      }
  }

  tambahMakanan() {
    const {nama, harga, stok, tipe, imageUrl} = this.state
          this.props.onAddMenus({nama, harga, stok, tipe, imageUrl})
          this.setState({img: '', nama: '', harga: 0, stok: 0, tipe: 'makanan'})
          setTimeout(() => {
            this.props.onGetMenu()
          }, 1000)
  }

  render() {
    
    return (
        <React.Fragment>
      <form onSubmit={(e) => {
          e.preventDefault()
      }}>
        <div className="text-center">Tambah Data Makanan</div>
        <br/>
          <div className="form-group">
            <label htmlFor="nama">Nama</label>
            <input type="text" id="nama" className="form-control" value={this.state.nama} onChange={this.onChange.bind(this)} name="nama" />
          </div>
          <div className="form-group">
            <label htmlFor="harga">Harga</label>
            <input type="number" id="harga" className="form-control" value={this.state.harga} name="harga" onChange={this.onChange.bind(this)} />
          </div>
          <div className="form-group">
            <select name="tipe" id="tipe" className="form-control" value={this.state.tipe} onChange={this.onChange.bind(this)}>
                <option value="makanan">Makanan</option>
                <option value="minuman">Minuman</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlFile1"></label>
            <img src={ this.state.img } alt="" style={{width: '100px'}}/>
            <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={this.onChangeFile.bind(this)} />
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-4">
                <button className="form-control btn btn-success" onClick={this.tambahMakanan.bind(this)}>Tambahkan</button>
              </div>
              <div className="col-4">
                <button className="form-control btn btn-secondary">Ubah</button>
              </div>
              <div className="col-4">
                <button className="form-control btn btn-danger">Hapus</button>
              </div>
            </div>
          </div>
      </form>
        <br/><br/><br/><br/>
      <div className="text-center">
        <button className="btn btn-primary" onClick={e => {
            localStorage.clear()
            location.reload()
        }}>Logout</button>
      </div>
      </React.Fragment>
    )
  }
}
